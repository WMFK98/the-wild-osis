import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { updateBooking } from '../../services/apiBookings';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function useCheckin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    mutate: checkin,
    isLoading: isCheckingIn,
    error,
  } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, { status: 'checked-in', isPaid: true }),
    onSuccess: () => {
      toast.success(`Booking #${bookingId} successfully checked in`);
      queryClient.invalidateQueries({ active: true });
      navigate('/');
    },

    onError: () => toast.error('There was an error while checking in'),
  });
  return { checkin, isCheckingIn, error };
}
