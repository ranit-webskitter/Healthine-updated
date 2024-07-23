import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createNewTicketReq, fetchSupportTickets } from "./functions";
import { toast } from "sonner";


export const useCreateNewTicketReq = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationKey:['createNewTicket'],
        mutationFn: async (data: any) => {
            const response = await createNewTicketReq(data)
            return response
        },
        onSuccess: (response) => {
            console.log('from addtocart hook',response)
            
           response?.statusCode===200 && toast.success(response?.message)
          
         queryClient.invalidateQueries({ queryKey:['fetchMyTickets']});
          
        },
        onError: (error :any) => {
            console.log('insuraces list', error)
            toast.error(error?.response?.data?.message)
    
    
        }
    })
    return mutation
}

export const useMyTickets=(data:{page:number,per_page:number})=>{
    const {data:myTickets,isLoading,refetch}=useQuery({
        queryKey:['fetchMyTickets'],
        queryFn:()=>fetchSupportTickets(data)
    })
    return {myTickets,isLoading,refetch}
}