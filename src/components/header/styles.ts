import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 120px;
  font-size: 1.5rem;
`;

export const Link = styled(RouterLink)`
  color: black;
`;

export const Logo = styled(RouterLink)`
  font-weight: 600;
  color: #7db386;
`;
