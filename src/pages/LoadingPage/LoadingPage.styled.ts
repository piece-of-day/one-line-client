import styled from 'styled-components';

import { ColorCode } from '@/constants/color';

export const LoadingPageContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  align-items: center;
  justify-content: center;

  background-color: ${ColorCode.BLACK};
  color: ${ColorCode.WHITE};
`;
