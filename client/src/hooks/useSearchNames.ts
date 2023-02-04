import React from 'react';
import { ListContext } from '../components/App';

const useSearchNames = (
   search: boolean[],
   clearSearch: boolean,
   setClearSearch: React.Dispatch<React.SetStateAction<boolean>>
) => {
   const { data, setData } = React.useContext(ListContext);
   const tRef = React.useRef<HTMLHeadingElement>(null);
   const [prvPos, setPrvPos] = React.useState<number>(0);

   const clickScrollHandler = () => {
      if (!data.activeSearch && clearSearch) {
         // divRef?.children[prvPos].classList.remove(setClass);
         search[prvPos] = false;
         setData({ ...data, activeSearch: false });
         setPrvPos(0);
         setClearSearch(false);
      }
   };

   React.useEffect(() => {
      if (data.activeSearch) {
         const index = data.indexName;
         const divRef = tRef.current;
         search[prvPos] = false;

         divRef?.children[index].scrollIntoView({ behavior: 'smooth' });
         search[index] = true;

         setPrvPos(index);
      }
      setData({ ...data, activeSearch: false });
   }, [data.activeSearch]);
   //..........................................................................................................

   //-------------------------------
   // onscroll Data

   return { tRef, clickScrollHandler };
};

export default useSearchNames;
