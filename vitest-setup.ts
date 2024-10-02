import '@testing-library/jest-dom/vitest';
import {JSDOM} from 'jsdom';

const {window} = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost:3000',
});

Object.assign(global, {
  window,
  document: window.document,
});
