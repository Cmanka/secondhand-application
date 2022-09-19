import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 60px;
  background-color: red;
  display: flex;
  gap: 40px;
`;

export const Link = styled(RouterLink)`
  color: black;
  font-size: 18px;
`;
