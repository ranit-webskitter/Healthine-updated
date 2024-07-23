
import { logout, setLoginData } from '@/rdux-toolkit/slices/userSlice'; 
import { setCookie } from 'nookies';
import { IFormInput } from '@/typescript/interface/common.interface'; 
import {  MutationKey, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { toast } from 'sonner';
import { changePasswordMutation, fetchDashboard, forgotPasswordMutation, loginMutation, resetPasswordMutation, signUpMutation, updateProfileMutation } from './functions';
import { useDispatch } from 'react-redux';

interface LoginResponse {
  data?: {
    data: any; 
    statusCode: number; 
    message: string; 
    token: string; 
  };
}

export const useRegisterMutation = () => {
    const router=useRouter()
  const mutation = useMutation({
    mutationKey:['register'],
    mutationFn:async (data:IFormInput) => {
        const response = await signUpMutation(data);
        return response;
      },
    onSuccess: (response) => {
      console.log(response);
      if (response?.data) {
        router.push('/login')
        toast.success(response.data.message); 
       
      }
    },
    onError: (error) => {
      console.error('Login mutation error:', error);
     
     
    },
  });

  return mutation;
};



interface LoginResponse {
  data?: {
    data: any; 
    statusCode: number; 
    message: string; 
    token: string; 
  };
}

export const useLoginMutation = () => {
    const router=useRouter()
    const dispatch=useDispatch()
   
   
  const mutationFn = async (data:IFormInput) => {
    const response = await loginMutation(data);
    return response;
  };

  const mutationKey: MutationKey = ['login']; 

  const mutation = useMutation({
    mutationKey,
    mutationFn,
    onSuccess: (response) => {
      console.log(response);
      if (response?.data) {
        
        router.push('/')
        dispatch(setLoginData(response.data.data))
        toast.success(response.data.message); 
        setCookie(null, 'token', response.data.token, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        }); 
      }
    },
    onError: (error ) => {
   
      
      
      console.error('Login mutation error:', error);
     
     
    },
  });

  return {mutation};
};




export const useChangePasswordMutation = () => {
    const dispatch=useDispatch()
    const router=useRouter()
    const mutation = useMutation({
        mutationFn: async (data: IFormInput) => {
            const response = await changePasswordMutation(data)
            return response
        },
        onSuccess: (response) => {
            console.log(response)
            response?.data && dispatch(setLoginData(response?.data?.data))
            response?.data.statusCode === 200 && toast.success(response?.data?.message)
            response?.data?.statusCode===200 && dispatch(logout());
            response?.data?.statusCode===200 && router.push('/login')
            
        },
        onError: (error) => {
            console.log('from register', error)


        }
    })
    return mutation
}


export const useForgotPasswordMutation = () => {
    const router=useRouter()
    const mutation = useMutation({
        mutationFn: async (data: IFormInput) => {
            const response = await forgotPasswordMutation(data)
            return response
        },
        onSuccess: (response) => {
            console.log(response)
            response?.data.statusCode === 200 && toast.success(response?.data?.message)
            response?.data.statusCode === 200 && router.push('/login')

        },
        onError: (error) => {
            console.log('from register', error)


        }
    })
    return mutation
}

export const useResetPassMutation=()=>{
    const router=useRouter()
    const dispatch=useDispatch()
    const mutation = useMutation({
        mutationKey:['resetPass'],
        mutationFn: async (data: IFormInput) => {
            console.log(data)
            const response = await resetPasswordMutation(data)
            return response
        },
        onSuccess: (response) => {
            console.log(response)
            response?.data && dispatch(setLoginData(response?.data?.data))
            response?.data.statusCode === 200 && toast.success(response?.data?.message)
       
            response?.data.statusCode === 200 && router.push('/login')
    
        },
        onError: (error) => {
            console.log('from register', error)
    
    
        }
    })
    
    return mutation
}

export const useProfileQuery = () => {
  
    const { data: userdashboard, isLoading } = useQuery({
        queryKey: ["dashboard"],
        queryFn: () => {
            const response =fetchDashboard()
            return response
        
        }
    });

    return {userdashboard,isLoading}
}

export const useUpdateProfileMutation = () => {
  const queryClient = useQueryClient();
    const router=useRouter()
    const mutation = useMutation({
        mutationFn: async(data:IFormInput)=>{
            const response= await updateProfileMutation(data)
            return response
        },
        onSuccess: (response) => {
            // console.log(response)
          response?.data.statusCode===200 && toast.success(response?.data?.message)
          response?.data.statusCode===200 && router.push('/dashboard')
          queryClient.invalidateQueries({ queryKey: ["dashboard"]});
        },
        onError:(error)=>{
            console.log('from register',error)
            
        
        }
      })
      return mutation
}
