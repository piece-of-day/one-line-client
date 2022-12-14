import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const SelectContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 4rem;
`;

export const SectionTitle = styled(motion.span)`
  font-size: ${FontSize.XXL};
  font-weight: ${FontWeight.REGULAR};
  color: ${ColorCode.WHITE};
  text-align: center;
  line-height: 1.5;
`;

export const TitleImg = styled(motion.img)`
  width: 20rem;
`;

export const MessageListContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 4rem;
`;

export const GoBottomBtn = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  height: 7rem;
  width: 17rem;

  background: ${ColorCode.OFFWHITE};
  border: 4px solid ${ColorCode.CURTAIN};
  box-shadow: 5px 15px 10px rgba(0, 0, 0, 0.35);
  border-radius: 3.5rem;

  font-size: ${FontSize.L};

  margin-top: 4rem;
`;

export const GoBottomBtnImg = styled.img`
  width: 2rem;
`;
