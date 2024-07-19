import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchCategories, fetchInsuranceDetails, fetchInsuranceList } from "./functions";

export const useInsuranceDetails = (id:any) => {
    const { data: insuranceDetails, isLoading, isError,refetch } = useQuery({
        queryKey: ['insuranceDetails',id],
        queryFn:()=> fetchInsuranceDetails(id),
        // cacheTime: 0
        
      });

      return {insuranceDetails , isLoading,isError,refetch}
  
}


export const useInsurance=(data:any)=>{
        const {data:insurance,isLoading,isError}=useQuery({
            queryKey:["insuranceFetch",data],
            queryFn:()=>fetchInsuranceList(data)
        })
        return {insurance,isLoading}
}


export const useCategories = () => {
    const { data: categories, isLoading, isError } = useQuery({
        queryKey: ['category'],
        queryFn: fetchCategories
      });

      return {categories , isLoading,isError}
  
}