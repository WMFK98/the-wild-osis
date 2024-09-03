import styled from 'styled-components';
import Spinner from './../../ui/Spinner';
import Stats from './Stats';
import React from 'react';
import useRecentBooking from './useRecentBooking';
import useRecentStays from './useRecentStays';
import useCabin from './../cabins/useCabins';
import SalesChart from './SalesChart';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default function DashboardLayout() {
  const { bookings, isLoading: isLoadingBooking } = useRecentBooking();
  const {
    stays,
    isLoading: isLoadingStays,
    confirmedStays,
    numDays,
  } = useRecentStays();
  const { cabins, isLoading: isLoadingCabin } = useCabin();
  if (isLoadingBooking || isLoadingStays || isLoadingCabin) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        cabinCount={cabins.length}
        numOfDays={numDays}
      />
      <div>1</div>
      <div>2</div>
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}
