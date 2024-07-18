import { HomePageContent } from "@/typescript/interface/other-types";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories, fetchHomePageContent, fetchTestimonial } from "./functions";

 

  export const useHomePageContent=()=>{
    const { data: homePageContent, isLoading, isError,refetch } = useQuery<HomePageContent>({
        queryKey: ['homePageContent'],
        queryFn: fetchHomePageContent
      });

      return {homePageContent , isLoading,isError,refetch}
  }


  export const useTestimonial = () => {
    const {data: testimonials,isLoading}=useQuery({
        queryKey:['testimonials'],
        queryFn:async()=>{
            const response=await fetchTestimonial()
            return response
        }
    })
    return {testimonials,isLoading}
}


export const useCategories = () => {
    const { data: categories, isLoading, isError } = useQuery({
        queryKey: ['category'],
        queryFn: fetchCategories
      });

      return {categories , isLoading,isError}
  
}

