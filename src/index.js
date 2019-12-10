import React from 'react';

import { StatusBar } from 'react-native';

import Routes from './routes';

import './config/ReactotronConfig';

export default function App() {
  console.tron.log('oi');
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
