import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateSetting as updateSettingAPI } from '../../services/apiSettings';

export default function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
    mutationFn: updateSettingAPI,
    onSuccess: () => {
      toast.success('Settings successfully updating');
      queryClient.invalidateQueries({ queryKey: ['settings'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateSetting };
}
