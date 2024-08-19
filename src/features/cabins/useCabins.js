import { useQuery } from '@tanstack/react-query';
import { getCatbins } from '../../services/apiCabins';

export default function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCatbins,
  });
  return { isLoading, cabins, error };
}
