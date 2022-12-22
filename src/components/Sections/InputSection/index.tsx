import React, { useState } from 'react';

import {
  SectionTitle,
  SectionContainer,
  TitleImg,
  InputContainer,
  Input,
  InputImg,
  SendButton,
  SendButtonImg,
  SendButtonText,
} from './style';

import WaiterImg from '@/assets/images/waiter.png';
import SendIcon from '@/assets/icons/icon-send.svg';
import PencilIcon from '@/assets/icons/icon-pen-signature.svg';

const motionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.25,
      delay: 0,
    },
  },
};

const motionChild = {
  hidden: { opacity: 0, y: -25, transition: { ease: 'easeInOut', duration: 0.7 } },
  show: { opacity: 1, y: 0, transition: { ease: 'easeInOut', duration: 0.7 } },
};

const motionButton = {
  hidden: { opacity: 0, x: -25, transition: { ease: 'easeOut', duration: 0.5 } },
  show: { opacity: 1, x: 0, transition: { ease: 'easeOut', duration: 0.5 } },
};

const InputSection = () => {
  const [text, setText] = useState('');

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };
  return (
    <SectionContainer variants={motionContainer} initial='hidden' animate='show' exit='hidden'>
      <TitleImg src={WaiterImg} variants={motionChild} layout />
      <SectionTitle variants={motionChild} layout>
        손님의 오늘의 한 줄은 무엇이었나요?
      </SectionTitle>

      <InputContainer variants={motionChild} layout>
        <InputImg src={PencilIcon} />
        <Input value={text} onChange={inputTextHandler} />
      </InputContainer>

      {text !== '' ? (
        <SendButton variants={motionButton}>
          <SendButtonImg src={SendIcon} />
          <SendButtonText>한 줄 전송</SendButtonText>
        </SendButton>
      ) : null}
    </SectionContainer>
  );
};

export default InputSection;
