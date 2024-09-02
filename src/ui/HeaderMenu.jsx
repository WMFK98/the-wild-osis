import React from 'react';
import ButtonIcon from './ButtonIcon';
import { HiOutlineUser } from 'react-icons/hi2';
import Logout from '../features/authentication/Logout';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DarkModeToogle from './DarkModeToogle';

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 4rem;
`;

export default function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate('/account')}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToogle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}
