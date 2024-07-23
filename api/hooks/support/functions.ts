import axiosInstance from "@/api/axiosInstance";
import { endpoints } from "@/api/endpoints";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { supportSchema } from "./schema";

export const  createNewTicketReq = async (data:supportSchema) => {
    try {
      const res = await axiosInstance.post(
          endpoints.cms.createNewTicket,
          data
        );
        return res.data;
    } catch (error : any) {
      if(error instanceof AxiosError){
          console.log(error)
          if(error && error.response && error.response.data){
              toast.error(error?.response?.data?.message)
          }
      }
      
    }
  };

  export const  fetchSupportTickets = async (data:{page:number,per_page:number}) => {
    try {
      const res = await axiosInstance.post(
          endpoints.cms.myTicket,
          data
        );
        return res.data?.data;
    } catch (error : any) {
      if(error instanceof AxiosError){
          console.log(error)
          if(error && error.response && error.response.data){
              toast.error(error?.response?.data?.message)
          }
      }
      
    }
  };
