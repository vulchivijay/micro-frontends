import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

// Mount function to start up the app
const marketing = (ele) => {
  ReactDom.render(
    <App />,
    ele
  )
};

// if we are in development and in isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    marketing(devRoot);
  }
}

// we are running through container and we should export the mount function
export default marketing;