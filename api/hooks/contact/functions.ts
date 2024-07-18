import { AxiosError } from "axios";

import { toast } from "react-toastify";
import { ContactDataData } from "@/typescript/interface/other-types";
import axiosInstance from "@/api/axiosInstance";
import { endpoints } from "@/api/endpoints";

export const  fetchStateLists = async () => {
    try {
      const res = await axiosInstance.get(
          endpoints.cms.stateLists
        );
        return res?.data?.data?.states;
    } catch (error) {
      if(error instanceof AxiosError){
          console.log(error)
        //   if(error && error.response && error.response.data){
        //       toast.error(error?.response?.data?.message)
        //   }
      }
      
    }
  };

  export const callbackMutation = async (body: ContactDataData) => {
    try {
      const res = await axiosInstance.post<ContactDataData>(
          endpoints.cms.callback,
          body
        );
       
        return res;
    } catch (error : any) {
      if(error instanceof AxiosError){
          console.log(error)
          if(error && error.response && error.response.data){
              toast.error(error?.response?.data?.message)
          }
         
      }
      
    }
  }

  export const contactMutation = async (body: ContactDataData) => {
    try {
      const res = await axiosInstance.post<ContactDataData>(
          endpoints.cms.contactUs,
          body
        );
       
        return res;
    } catch (error : any) {
      if(error instanceof AxiosError){
          console.log(error)
          if(error && error.response && error.response.data){
              toast.error(error?.response?.data?.message)
          }
         
      }
      
    }
  }