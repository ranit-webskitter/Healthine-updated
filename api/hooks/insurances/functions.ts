import axiosInstance from "@/api/axiosInstance";
import { endpoints } from "@/api/endpoints";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const  fetchInsuranceList = async (data:any) => {
    try {
      const res = await axiosInstance.post(
          endpoints.cms.insurances,
          data
        );
        return res.data.data;
    } catch (error : any) {
      if(error instanceof AxiosError){
          console.log(error)
          if(error && error.response && error.response.data){
              toast.error(error?.response?.data?.message)
          }
      }
      
    }
  };

  export const  fetchInsuranceDetails = async (id:any) => {
    try {
      const res = await axiosInstance.get(
          `${endpoints.cms.insuranceDetails}/${id}`
        );
        return res?.data?.data;
    } catch (error : any) {
      if(error instanceof AxiosError){
          console.log(error)
          if(error && error.response && error.response.data){
              toast.error(error?.response?.data?.message)
          }
      }
      
    }
  };
 

export const  fetchCategories = async () => {
  try {
    const res = await axiosInstance.get(
        endpoints.cms.categories
      );
      return res.data.data;
  } catch (error : any) {
    if(error instanceof AxiosError){
        console.log(error)
        if(error && error.response && error.response.data){
            toast.error(error?.response?.data?.message)
        }
    }
    
  }
};