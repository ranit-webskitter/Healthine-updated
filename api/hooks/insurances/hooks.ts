import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchCategories, fetchInsuranceDetails, fetchInsuranceList } from "./functions";

export const useInsuranceDetails = (id:any) => {
    const { data: insuranceDetails, isLoading, isError,refetch } = useQuery({
        queryKey: ['insuranceDetails'],
        queryFn:()=> fetchInsuranceDetails(id)
      });

      return {insuranceDetails , isLoading,isError,refetch}
  
}


export const useInsurancesMutation = () => {

    const mutation = useMutation({
        mutationKey:['insuranceslist'],
        mutationFn: async (data: any) => {
            const response = await fetchInsuranceList(data)
            return response
        },
        onSuccess: (response) => {
            console.log(response)
          
            
        },
        onError: (error) => {
            console.log('insuraces list', error)
    
    
        }
    })
    return mutation
}


export const useCategories = () => {
    const { data: categories, isLoading, isError } = useQuery({
        queryKey: ['category'],
        queryFn: fetchCategories
      });

      return {categories , isLoading,isError}
  
}