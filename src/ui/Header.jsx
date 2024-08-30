import React from 'react';
import styled from 'styled-components';
import Logout from '../features/authentication/Logout';
import HeaderMenu from './HeaderMenu';
import UserAvatar from '../features/authentication/UserAvatar';

const StyledHearder = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 4rem;
  justify-content: flex-end;
`;

export default function Header() {
  return (
    <StyledHearder>
      <UserAvatar />
      <HeaderMenu />
    </StyledHearder>
  );
}
