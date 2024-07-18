import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addToCartFunc, emptyCartFunc, fetchCartsFunc } from "./functions"
import { toast } from "sonner"

// export const useAddToCartMutation = () => {

//     const mutation = useMutation({
//         mutationKey:['addToCart'],
//         mutationFn: async (data: any) => {
//             const response = await addToCartFunc(data)
//             return response
//         },
//         onSuccess: (response) => {
//             console.log('from addtocart hook',response)
            
//            response?.statusCode===200 && toast.success(response?.message)
          
//            response?.statusCode===200 && fetchCartsFunc()
//         },
//         onError: (error :any) => {
//             console.log('insuraces list', error)
//             toast.error(error?.response?.data?.message)
    
    
//         }
//     })
//     return mutation
// }
export const useAddToCartMutation = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['addToCart'],
        mutationFn: (body) => addToCartFunc(body),
        onSuccess: (res) => {
            console.log('abcdef',res);
            toast.success(res?.message);
            queryClient.invalidateQueries({
                queryKey: ['fetchCart'],
            })
            
        },
        onError: (err) => {
            // console.log(err?.response?.data?.message);
            // toast.error(err?.response?.data?.message)
        }
    })
}

export const useViewCart=()=>{
    const {data: cartElement,isLoading,isError,refetch}=useQuery({
        queryKey:['cart'],
        queryFn:fetchCartsFunc
        // queryFn:()=>fetchCartsFunc()
        
    })
    console.log('from cart folder hooks page',cartElement?.userCarts?.length)
    return {cartElement,isLoading,isError,refetch}
}

export const useEmptyCartMutation = () => {

    const mutation = useMutation({
        mutationKey:['emptyCart'],
        mutationFn: async (data: any) => {
            const response = await emptyCartFunc({})
           return response
        },
        onSuccess: (response) => {
            response?.data.statusCode===200 &&  console.log('from emptycart hook',response)
           response?.data.statusCode===200 && toast.success(response?.data.message)
           response?.data.statusCode===200  && fetchCartsFunc()
          
            
        },
        onError: (error :any) => {
            console.log('emptycart list', error)
            // toast.error(error?.response?.data?.message)
    
    
        }
    })
    return mutation
}
