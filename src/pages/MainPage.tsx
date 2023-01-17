/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from 'react-query';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, useScroll, useTransform } from 'framer-motion';

import { MainPageContainer } from './MainPage.styled';

import { EmptySection, InputSection, SelectSection } from '@/components/Sections';
import { Curtain } from '@/components/Curtain';

import useScrollLock from '@/hooks/useScrollLock';
import useMainPageState from '@/hooks/useMainPageState';

import { scrollTo } from '@/utils/scroll';
import { getCookie } from '@/utils/cookie';

import { PAGE_STATE } from '@/constants/state';
import { API_KEYS } from '@/constants/apiKey';
import { fetchGetThreeLines } from '@/apis/line';

const EMPTY_SECTIONS = 6;

const MainPage = () => {
  const scrollTopRef = useRef<HTMLDivElement>(null);
  const scrollBottomRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const { innerWidth } = window;
  const progress = useTransform(scrollYProgress, [0, 1], [0, innerWidth]);

  const { isLock, lockScroll, openScroll } = useScrollLock();
  const { getMainPageState, setMainPageState } = useMainPageState();

  const { pageState } = getMainPageState();
  const [pageOffset, setPageOffset] = useState(0);

  const { status, data: msgList } = useQuery(API_KEYS.GET_THREE_LINES, fetchGetThreeLines);

  if (getCookie('session_id')) {
    openScroll();
    scrollTo(scrollBottomRef);
  }

  const handleScroll = () => {
    const offset = window.scrollY / window.innerHeight;
    if (offset === 0) {
      scrollTo(scrollTopRef);
      lockScroll();
    }
    setPageOffset(Math.floor(offset));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    lockScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isLock) {
      scrollTo(scrollBottomRef);
    } else {
      scrollTo(scrollTopRef);
    }
  }, [isLock]);

  useEffect(() => {
    if (pageOffset === EMPTY_SECTIONS - 1 && pageState === PAGE_STATE.AFTER_SELECT) {
      setMainPageState(PAGE_STATE.INPUT);
    }
    if (pageOffset !== EMPTY_SECTIONS - 1 && pageState === PAGE_STATE.INPUT) {
      setMainPageState(PAGE_STATE.AFTER_SELECT);
    }
  }, [pageOffset]);

  return (
    <MainPageContainer>
      <div ref={scrollTopRef} />
      {new Array(EMPTY_SECTIONS).fill(false).map((_, idx) => (
        <EmptySection key={idx} />
      ))}
      <Curtain progress={progress} />
      {status !== 'success' ? (
        <>Loading...</>
      ) : (
        <AnimatePresence mode='wait'>
          {pageState <= PAGE_STATE.AFTER_SELECT ? (
            <SelectSection key='section-select' messageList={msgList} />
          ) : null}
          {pageState === PAGE_STATE.INPUT ? <InputSection key='section-input' /> : null}
        </AnimatePresence>
      )}
      <div ref={scrollBottomRef} />
    </MainPageContainer>
  );
};

export default MainPage;
