import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';
import { updateCurrentUser as updateCurrentUserApi } from '../../services/apiAuth';

export default function useUpdateUser() {
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutate: updateUser } = useMutation({
    mutationFn: updateCurrentUserApi,
    onSuccess: () => {
      toast.success('User account sucessfully updated');
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },

    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateUser };
}
