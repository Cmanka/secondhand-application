import React, { FC } from 'react';
import { Footer } from '../footer';
import { Header } from '../header';
import { Router } from '../router';
import { Layout } from './styles';

const App: FC = () => {
  return (
    <Layout>
      <Header />
      <Router />
      <Footer />
    </Layout>
  );
};

export { App };
