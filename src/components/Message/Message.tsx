import { Variants } from 'framer-motion';

import { MessageContainer, MessageWrapper, RecommendBtn, RecommendImg } from './Message.styled';

import { Category } from '@/components/Category';

import { MessageValue } from '@/types/message';

import RecommendIcon from '@/assets/icons/icon-recommend.svg';

interface MessageComponentValue extends MessageValue {
  variants?: Variants;
  onClick?: () => void;
  layout?: boolean;
  selected?: boolean;
}

const Message = ({
  variants,
  title,
  content,
  onClick,
  layout = false,
  selected = false,
}: MessageComponentValue) => {
  return (
    <MessageContainer
      variants={variants}
      layout={layout}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
    >
      <Category category={title} />
      <MessageWrapper>{content}</MessageWrapper>
      <RecommendBtn className='recommend-btn' selected={selected}>
        <RecommendImg src={RecommendIcon} />
      </RecommendBtn>
    </MessageContainer>
  );
};

export default Message;
