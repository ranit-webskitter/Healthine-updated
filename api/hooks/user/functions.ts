import { IFormInput } from "@/typescript/interface/common.interface";

import { IgetSignUpQuery } from "@/typescript/interface/apiresp.interfaces";

import { AxiosError } from 'axios' 
import axiosInstance from "@/api/axiosInstance";
import { endpoints } from "@/api/endpoints";
import { toast } from "sonner";

export const signUpMutation = async (body: IFormInput) => {
  try {
    const res = await axiosInstance.post<IgetSignUpQuery>(
        endpoints.auth.register,
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
};
export const loginMutation = async (body: IFormInput) => {
  try {
    const res = await axiosInstance.post<IgetSignUpQuery>(
        endpoints.auth.login,
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
};


export const forgotPasswordMutation = async (body: IFormInput) => {
  try {
    const res = await axiosInstance.post<IgetSignUpQuery>(
        endpoints.auth.forgotPassword,
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
};


export const  resetPasswordMutation = async (body: IFormInput) => {
  try {
    const res = await axiosInstance.post<IgetSignUpQuery>(
        endpoints.auth.resetPassword,
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
};


export const  changePasswordMutation = async (body: IFormInput) => {
  try {
    const res = await axiosInstance.post<IgetSignUpQuery>(
        endpoints.auth.changePassword,
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
};

export const  fetchDashboard = async () => {
  try {
    const res = await axiosInstance.get(
        endpoints.cms.dashboard
      );
      return res?.data?.data?.user;
  } catch (error : any) {
    if(error instanceof AxiosError){
        console.log(error)
        if(error && error.response && error.response.data){
            toast.error(error?.response?.data?.message)
        }
    }
    
  }
};


export const updateProfileMutation = async (body: IFormInput) => {
  try {
    const res = await axiosInstance.post<IgetSignUpQuery>(
        endpoints.cms.updateProfile,
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
};