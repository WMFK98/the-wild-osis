import styled from 'styled-components';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

import React from 'react';

export default function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <div>Stattistics</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </StyledDashboardLayout>
  );
}
