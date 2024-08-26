import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { updateBooking } from '../../services/apiBookings';
import toast from 'react-hot-toast';

export default function useCheckout() {
  const queryClient = useQueryClient();

  const {
    mutate: checkout,
    isLoading: isCheckingOut,
    error,
  } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: 'checked-out',
      }),
    onSuccess: (booking) => {
      toast.success(`Booking #${booking.id} successfully checked out`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error('There was an error while checking out'),
  });
  return { checkout, isCheckingOut, error };
}
