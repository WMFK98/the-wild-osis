import toast from 'react-hot-toast';
import { singup as singupApi } from '../../services/apiAuth';
import { useMutation } from '@tanstack/react-query';

export default function useSingup() {
  const { mutate: singup, isLoading } = useMutation({
    mutationFn: singupApi,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address"
      );
    },
  });
  return { singup, isLoading };
}
