/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { AnimatePresence, useScroll, useTransform } from 'framer-motion';

import SelectSection from '@/components/Sections/SelectSection';
import EmptySection from '@/components/Sections/EmptySection';
import Curtain from '@/components/Curtain';

import useScrollLock from '@/hooks/useScrollLock';

import { MessageValue } from '@/types/message';

const dummy: MessageValue[] = [
  { category: '위로', message: '맘껏 울어라 억지로 버텨라 내일은 내일의 해가 뜰테니' },
  { category: '사랑', message: '나의 하얀 옷에 너의 잉크가 묻어 닦아낼 수 없을만큼 번졌네' },
  { category: '공부', message: '들은 것은 잊어버리고, 본 것은 기억하고 직접 해본 것은 이해한다' },
];

const MainPage = () => {
  const scrollTopRef = useRef<HTMLDivElement>(null);
  const scrollBottomRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const { innerWidth } = window;
  const progress = useTransform(scrollYProgress, [0, 1], [0, innerWidth]);

  const { isLock, lockScroll } = useScrollLock();

  const scrollToTop = () => {
    if (scrollTopRef.current) {
      scrollTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  };

  const scrollToBottom = () => {
    if (scrollBottomRef.current) {
      scrollBottomRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  };

  const handleScroll = () => {
    if (window.scrollY === 0) {
      scrollToTop();
      lockScroll();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // clean up
    };
  }, []);

  useEffect(() => {
    lockScroll();
  }, []);

  useEffect(() => {
    if (!isLock) {
      scrollToBottom();
    } else {
      scrollToTop();
    }
  }, [isLock]);

  return (
    <div>
      <div ref={scrollTopRef} />
      <EmptySection />
      <EmptySection />
      <EmptySection />
      <Curtain progress={progress} />
      <AnimatePresence mode='wait'>
        {isLock ? <SelectSection messageList={dummy} /> : null}
      </AnimatePresence>
      <div ref={scrollBottomRef} />
    </div>
  );
};

export default MainPage;
