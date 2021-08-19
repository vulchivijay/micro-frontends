import React, {useRef, useEffect} from 'react';
import { marketing } from 'marketing/MarketingApp';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log('useEffect: ', marketing);
    // marketing(ref.current);
  });

  return (<div ref={ref} />);
};