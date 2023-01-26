import { useEffect, useState } from 'react';

const useWinSize = () => {
   const [headH, setHeadH] = useState<number>(0);
   const [footerH, setFooterH] = useState<number>(0);
   const [bodyH, setBodyH] = useState<number>(0);
   const [tRowHeight, setTRowHeight] = useState<number>(0);
   const [tHeadHeight, setTHeadheight] = useState<number>(0);
   const [winWidth, setWinWidth] = useState<number>(0);

   //get size window
   function getWindowSize() {
      const { innerWidth, innerHeight } = window;

      let headTmp = 0;
      let footerTmp = 0;
      let tRow = 37;
      let tHead = 40;
      let bodyTmp = 0;

      if (innerWidth < 672) {
         headTmp = Math.floor(innerHeight * 0.05);
         bodyTmp = Math.floor(innerHeight * 0.905);
         footerTmp = innerHeight - bodyTmp - headTmp;
      } else {
         headTmp = Math.floor(innerHeight * 0.054);
         bodyTmp = tRow * 22;
         footerTmp = innerHeight - bodyTmp - headTmp - tHead;
      }

      setHeadH(headTmp);
      setTHeadheight(tHead);
      setTRowHeight(tRow);
      setBodyH(bodyTmp);
      setFooterH(footerTmp);
      setWinWidth(innerWidth);
   }

   // get value during start up /refresh
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

   return { headH, footerH, bodyH, tRowHeight, tHeadHeight, winWidth };
};

export default useWinSize;
