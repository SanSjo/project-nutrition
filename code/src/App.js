import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { ui } from './reducers/ui';
import { barcodes } from './reducers/barcodes';

import { LoadingIndicator } from 'components/LoadingIndicator';
import { ScanBarcode } from './components/ScanBarcode';
import { Header } from './components/Header';
import { Product } from 'components/Product';
import { Footer } from 'components/Footer';

const reducer = combineReducers({
  ui: ui.reducer,
  barcodes: barcodes.reducer
});

export const store = configureStore({
  reducer
});

export const App = () => {
  return (
    <Provider store={store}>
      <Header title="food tracer" />
      <LoadingIndicator />
      <Product />

      <ScanBarcode />
      <Footer />
    </Provider>
  );
};
