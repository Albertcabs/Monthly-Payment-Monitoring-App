import { useEffect, useState } from 'react';

const useWinSize = () => {
   const [headH, setHeadH] = useState<number>(0);
   const [footerH, setFooterH] = useState<number>(0);
   const [tBodyHeight, setTBodyHeight] = useState<number>(0);
   const [tRowHeight, setTRowHeight] = useState<number>(0);
   const [tHeadHeight, setTHeadheight] = useState<number>(0);
   const [winWidth, setWinWidth] = useState<number>(0);

   //get size window
   function getWindowSize() {
      const { innerWidth, innerHeight } = window;

      let headTmp = 0.1;
      let tRow = 37;
      let tHead = 40;

      if (innerWidth < 640) {
         headTmp = 0.04;
      } else {
         headTmp = 0.054;
      }
      const tmp1 = Math.floor(innerHeight * headTmp);

      setHeadH(tmp1);
      setTHeadheight(tHead);
      setTRowHeight(tRow);
      let tbody = tRow * 22;
      setTBodyHeight(tbody);

      setFooterH(innerHeight - tbody - tmp1 - tHead);

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

   return { headH, footerH, tBodyHeight, tRowHeight, tHeadHeight, winWidth };
};

export default useWinSize;
