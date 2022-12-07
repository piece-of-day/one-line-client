import GlobalStyle from './styles/global';

import Router from '@/routes';

import '@/styles/font.css';

const App = () => {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
};

export default App;
