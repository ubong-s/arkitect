import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const ContainerRoot = styled.div`
  width: 90%;
  margin: auto;
  max-width: 1600px;
`;

const Container: FC<{ children: ReactNode }> = () => {
  return <ContainerRoot>Container</ContainerRoot>;
};

export default Container;
