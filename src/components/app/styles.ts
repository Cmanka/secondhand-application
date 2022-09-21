import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  & > div:nth-child(2) {
    flex: 1;
  }
`;
