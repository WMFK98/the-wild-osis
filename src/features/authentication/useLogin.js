import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import Login from '../../pages/Login';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: (auth) => loginApi(auth),

    onSuccess: (user) => {
      queryClient.setQueriesData(['user'], user.user);
      navigate('/dashboard');
    },

    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Provided email or password are incorrect');
    },
  });
  return { login, isLoading };
}
