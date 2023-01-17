import { useEffect, useState } from 'react';

const useWinSize = () => {
      const [headH, setHeadH] = useState<number>(0);
      const [footerH, setFooterH] = useState<number>(0);
      const [bodyH, setBodyH] = useState<number>(0);
      const [winWidth, setWinWidth] = useState<number>(0);

      //get size window
      function getWindowSize() {
            const { innerWidth, innerHeight } = window;

            let headTmp = 0.1;

            if (innerWidth < 640) {
                  headTmp = 0.04;
            } else {
                  headTmp = 0.055;
            }
            const tmp1 = Math.floor(innerHeight * headTmp);
            const tmp2 = Math.floor(innerHeight * 0.04);
            setHeadH(tmp1);
            setFooterH(tmp2);
            setBodyH(innerHeight - tmp1 - tmp2);
            setWinWidth(innerWidth);
           
      }

      // get value ist screen type
      useEffect(() => {
            getWindowSize();
      }, []);

      //get size during resize
      useEffect(() => {
            function handleWindowResize() {
                  getWindowSize();
            }

            window.addEventListener('resize', handleWindowResize);

            return () => {
                  window.removeEventListener('resize', handleWindowResize);
            };
      }, []);

    

      return { headH, footerH, bodyH, winWidth };
};

export default useWinSize;
