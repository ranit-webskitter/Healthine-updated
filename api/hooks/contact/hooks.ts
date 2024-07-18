import { ContactDataData } from '@/typescript/interface/other-types'
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'sonner'
import { contactMutation } from './functions'

export const useContact = () => {

    const mutation = useMutation({
        mutationFn: async (data: ContactDataData) => {
            const response = await contactMutation(data)
            return response
        },
        onSuccess: (response) => {
            console.log(response)
            toast.success(response?.data?.message)
          
            
        },
        onError: (error) => {
            console.log('from register', error)
    
    
        }
    })
    return mutation
}

