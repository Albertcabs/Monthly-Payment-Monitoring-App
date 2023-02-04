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
      const screenW = window.innerWidth;
      const screenH = window.innerHeight;

      let headTmp = 45;
      let footerTmp = 38;
      let tRow = 35;
      let tHead = 40;
      let bodyTmp = 0;
      if (screenW < 672) {
         bodyTmp = screenH - footerTmp - headTmp;
      } else {
         bodyTmp = screenH - footerTmp - headTmp - tHead;
      }

      setHeadH(headTmp);
      setTHeadheight(tHead);
      setTRowHeight(tRow);
      setBodyH(bodyTmp);
      setFooterH(footerTmp);
      setWinWidth(screenW);
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
