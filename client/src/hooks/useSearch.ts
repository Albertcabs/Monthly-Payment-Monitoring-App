import React from 'react';

export const useSearch = (
   setShowSearch: React.Dispatch<React.SetStateAction<boolean>>,
   names: string[]
) => {
   const [searchValue, setSearchValue] = React.useState<string[]>(['']);
   const [indexName, setIndexName] = React.useState<number[]>([0]);

   const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
      // enter the first Name of input search
      const enterData = event.target.value.toUpperCase();
      let arrTmp: number[] = [];
      // check the first letter of Costumer Name
      const tmp = names.filter((val, i) => {
         // val[0] is first letter of Name to search

         if (val[0] === enterData) {
            arrTmp.push(i);
            return val;
         }
      });

      if (tmp.length !== 0) {
         setSearchValue(tmp);
         setIndexName(arrTmp);
      } else {
         setSearchValue(['No Name on the list']);
      }

      setShowSearch(true);
   };

   return { onchange, searchValue, indexName };
};
