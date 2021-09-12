import { createAction } from '@reduxjs/toolkit';

// getStocks
export const getStocksRequest = createAction('stocks/GET-Request');
export const getStocksSuccess = createAction('stocks/GET-Success');
export const getStocksError = createAction('stocks/GET-Error');

// startStocks
export const startStocksRequest = createAction('stocks/START-Request');
export const startStocksSuccess = createAction('stocks/START-Success');
export const startStocksError = createAction('stocks/START-Error');

// stopStocks
export const stopStocksRequest = createAction('stocks/STOP-Request');
export const stopStocksSuccess = createAction('stocks/STOP-Success');
export const stopStocksError = createAction('stocks/STOP-Error');
