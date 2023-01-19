import React, { useContext } from 'react';
import searchSvg from '../../img/search.svg';
import { useSearch } from '../../hooks/useSearch';
import { ListContext } from '../App';

const SearchComp = () => {
   const { data, setData } = useContext(ListContext);
   const [showSearch, setShowSearch] = React.useState(false);
   const [selectVal, setSelectVal] = React.useState('Search Customer Names...');
   const { onchange, searchValue, indexName } = useSearch(setShowSearch);
   const onclickHandler = (val: string, i: number) => {
      // close the tooltip
      setShowSearch(false);

      // input value
      setSelectVal(val);

      /// set index value for searching the names of customer
      setData({
         ...data,
         indexName: indexName[i],
         activeSearch: true,
         showIndicator: true,
      });
   };

   return (
      <div className='float-right block'>
         <form className='w-60 sm:w-[290px] md:w-[300px] lg:w-[340px]'>
            <label className='sr-only pl-5 text-sm text-gray-900 dark:text-white '>
               Search
            </label>
            <div className='relative'>
               <div className='absolute inset-y-0 right-0 flex items-center p-1  '>
                  <img src={searchSvg} alt='Add List' />
               </div>
               <input
                  type='text'
                  className='input-class '
                  onChange={onchange}
                  onFocus={() => setSelectVal('')}
                  value={selectVal}
                  required
               />
            </div>
         </form>
         {showSearch ? (
            <div
               onMouseLeave={() => setShowSearch(false)}
               className='absolute  z-30 mt-1 max-h-max w-80 flex-row  border border-yellow-600 bg-slate-600 py-1 px-2 text-sm text-white'
            >
               {searchValue.map((val, i) => {
                  return (
                     <div
                        key={i}
                        onClick={() => onclickHandler(val, i)}
                        className='z-30 w-full rounded-md bg-slate-600 py-1.5 pl-4 hover:bg-green-500 '
                     >
                        {val}
                     </div>
                  );
               })}
            </div>
         ) : null}
      </div>
   );
};

export default SearchComp;
