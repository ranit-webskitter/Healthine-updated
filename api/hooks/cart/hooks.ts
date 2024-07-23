import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addToCartFunc, addToCartSessionFunc, emptyCartFunc, fetchCartsFunc, fetchSessionCartsFunc, removeCartItemFunc } from "./functions"
import { toast } from "sonner"
import { string } from "yup";

export const useAddToCartMutation = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationKey:['addToCart'],
        mutationFn: async (data: any) => {
            const response = await addToCartFunc(data)
            return response
        },
        onSuccess: (response) => {
            console.log('from addtocart hook',response)
            
           response?.statusCode===200 && toast.success(response?.message)
          
           response?.statusCode===200 && fetchCartsFunc()
           queryClient.invalidateQueries({queryKey:['cart']});

        },
        onError: (error :any) => {
            console.log('insuraces list', error)
            toast.error(error?.response?.data?.message)
    
    
        }
    })
    return mutation
}


export const useViewCart=()=>{
    const {data: cartElement,isLoading,isError,refetch}=useQuery({
        queryKey:['cart'],
        queryFn:fetchCartsFunc
        
    })
    return {cartElement,isLoading,isError,refetch}
}

export const useEmptyCartMutation = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationKey:['emptyCart'],
        mutationFn:()=>emptyCartFunc({}),
        onSuccess: (response) => {
           response?.data.statusCode===200 && toast.success(response?.data.message)
           queryClient.invalidateQueries({queryKey:['cart']});
            
        },
        onError: (error :any) => {
            console.log('emptycart list', error)
            // toast.error(error?.response?.data?.message)
    
    
        }
    })
    return mutation
}

export const useRemoveCartElementMutation = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationKey:['removeCartElement'],
        mutationFn:(data:{cartId: string})=>removeCartItemFunc(data),
        onSuccess: (response) => {
           response?.data.statusCode===200 && toast.success(response?.data.message)
           queryClient.invalidateQueries({queryKey:['cart']});
            
        },
        onError: (error :any) => {
            console.log('emptycart list', error)
            // toast.error(error?.response?.data?.message)
    
    
        }
    })
    return mutation
}


export const useAddToCartSessionMutation = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationKey:['addToCartSession'],
        mutationFn: async (data: any) => {
            const response = await addToCartSessionFunc(data)
            return response
        },
        onSuccess: (response) => {
            console.log('from addtocart hook',response)
            
           response?.statusCode===200 && toast.success(response?.message)
          
           response?.statusCode===200 && fetchCartsFunc()
           queryClient.invalidateQueries({queryKey:['sessioncart',response?.data?.sessionId]});
           fetchSessionCartsFunc(response?.data?.sessionId)
        },
        onError: (error :any) => {
            console.log('insuraces list', error)
            toast.error(error?.response?.data?.message)
    
    
        }
    })
    return mutation
}


export const useViewSessionCart=(data:any)=>{
    const {data: cartElement,isLoading,isError,refetch}=useQuery({
        queryKey:['sessioncart'],
        queryFn:()=>fetchSessionCartsFunc(data)
        
    })
    return {cartElement,isLoading,isError,refetch}
}

