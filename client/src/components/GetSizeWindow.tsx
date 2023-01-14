import {useEffect, useState} from 'react';

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

export default function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div>
      <h2>Width: {windowSize.innerWidth}</h2>

      <h2>Height: {windowSize.innerHeight}</h2>
    </div>
  );
}

