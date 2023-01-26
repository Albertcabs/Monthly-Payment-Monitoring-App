import React from 'react';
import { ListContext } from '../components/App';

const useSearchNames = (search: boolean[]) => {
   const { data, setData } = React.useContext(ListContext);
   const tRef = React.useRef<HTMLHeadingElement>(null);
   const [prvPos, setPrvPos] = React.useState<number>(0);
   React.useEffect(() => {
      if (data.activeSearch) {
         const index = data.indexName;
         const divRef = tRef.current;

         divRef?.children[index].scrollIntoView({ behavior: 'smooth' });
         search[index] = true;

         setPrvPos(index);
      }
      setData({ ...data, activeSearch: false });
   }, [data.activeSearch]);
   //..........................................................................................................

   //-------------------------------
   // onscroll Data
   const onscrollHandler = () => {
      if (!data.activeSearch) {
         // divRef?.children[prvPos].classList.remove(setClass);
         search[prvPos] = false;
         setData({ ...data, activeSearch: false });
         setPrvPos(0);
      }
   };

   return { tRef, onscrollHandler };
};

export default useSearchNames;
