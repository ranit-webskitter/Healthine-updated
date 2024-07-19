import axiosInstance from "@/api/axiosInstance";
import { endpoints } from "@/api/endpoints";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const  addToCartFunc = async (data: any) => {
    try {
      const res = await axiosInstance.post(
          endpoints.cms.addToCart,
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

  export const  fetchCartsFunc = async () => {
    try {
      const res = await axiosInstance.get(
          endpoints.cms.viewCart
        );
        return res.data.data || [];
    } catch (error : any) {
      if(error instanceof AxiosError){
          console.log(error)
        
      }
      
    }
  };

  export const  emptyCartFunc = async ({}) => {
    try {
      const res = await axiosInstance.post(
          endpoints.cms.emptyCart,
          {}
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
  };

  export const  removeCartItemFunc = async (data:{
    cartId: string
  }
  ) => {
    try {
      const res = await axiosInstance.post(
          endpoints.cms.removeFromCart,
          data
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
  };

  export const  addToCartSessionFunc = async (data: any) => {
    try {
      const res = await axiosInstance.post(
          endpoints.cms.addToCartSession,
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


  export const  fetchSessionCartsFunc = async (id:any) => {
    try {
      const res = await axiosInstance.get(
          `${endpoints.cms.viewSessionCarts}?uuid=${id}`
        );
        return res.data.data || [];
    } catch (error : any) {
      if(error instanceof AxiosError){
          console.log(error)
        
      }
      
    }
  };