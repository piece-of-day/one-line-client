import { Variants } from 'framer-motion';

import { MessageContainer, MessageWrapper, RecommendBtn, RecommendImg } from './style';

import Category from '@/components/Category';

import { MessageValue } from '@/types/message';

import RecommendIcon from '@/assets/icons/icon-recommend.svg';

interface MessageComponentValue extends MessageValue {
  variants?: Variants;
  onClick?: () => void;
  layout?: boolean;
}

const Message = ({
  variants,
  category,
  message,
  onClick,
  layout = false,
}: MessageComponentValue) => {
  return (
    <MessageContainer variants={variants} layout={layout}>
      <Category category={category} />
      <MessageWrapper>{message}</MessageWrapper>
      <RecommendBtn onClick={onClick}>
        <RecommendImg src={RecommendIcon} />
      </RecommendBtn>
    </MessageContainer>
  );
};

export default Message;
