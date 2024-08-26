import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../utils/constants';

export default function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const filterValue = searchParams.get('status');
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue };

  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  const sortByRaw = searchParams.get('sortBy') || 'startDate-desc';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = { field, direction };
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryFn: () => getBookings({ filter, sortBy, page }),
    queryKey: ['bookings', filter, sortBy, page],
  });
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
      queryKey: ['bookings', filter, sortBy, page + 1],
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
      queryKey: ['bookings', filter, sortBy, page - 1],
    });

  return { isLoading, bookings, error, count };
}
