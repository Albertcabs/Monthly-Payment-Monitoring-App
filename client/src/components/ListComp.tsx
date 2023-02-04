import React from 'react';
import ActionComp from './ActionComp';
import useSearchNames from '../hooks/useSearchNames';

type ListProps = {
   listBody: string[][];
   listHead: string[];
   lBodyHeight: number;
   search: boolean[];
   dueDate: number[];
};
const ListBodyComp = ({
   listBody,
   listHead,
   lBodyHeight,
   search,
   dueDate,
}: ListProps) => {
   const [clearSearch, setClearSearch] = React.useState(false);
   const { tRef, clickScrollHandler } = useSearchNames(
      search,
      clearSearch,
      setClearSearch
   );

   return (
      <div
         style={{ height: `${lBodyHeight + 'px'}` }}
         ref={tRef}
         className='hide-listBigScreen  w-full overflow-y-scroll text-sm text-slate-400'
         onScroll={() => {
            setClearSearch(true);
            clickScrollHandler();
         }}
      >
         {listBody.map((val, index) => {
            return (
               <div
                  id={val[0]}
                  key={index}
                  className={`mt-3`}
                  onClick={() => {
                     setClearSearch(true);
                     clickScrollHandler();
                  }}
               >
                  <div
                     className={`mx-auto flex max-h-max w-[260px] flex-col rounded-2xl bg-slate-900  px-4 py-1 pt-2  ${
                        search[index]
                           ? 'border-2 border-green-500 text-white'
                           : 'border border-yellow-400 text-slate-400'
                     } `}
                  >
                     {val.map((value, i) => {
                        return (
                           <div
                              key={i}
                              className={`flex py-1 pl-2 ${
                                 i !== 0 ? 'justify-center' : 'justify-start'
                              } `}
                           >
                              <section
                                 className={`${i !== 0 ? 'w-16' : 'w-10'}`}
                              >
                                 {listHead[i]}
                              </section>
                              <section
                                 className={`${
                                    i === 0 ? 'hidden' : 'block pr-1.5 '
                                 }`}
                              >
                                 :
                              </section>

                              <section
                                 className={`inline-flex w-[100px] content-center ${
                                    i === 3
                                       ? (dueDate[index] === 1 &&
                                            'rounded-full border border-red-500 px-2 py-px text-white') ||
                                         (dueDate[index] === 2 &&
                                            'rounded-full border border-green-500 px-2 py-px text-white')
                                       : ''
                                 }`}
                              >
                                 {value}
                              </section>
                           </div>
                        );
                     })}
                     <div className='mb-2 ml-10  flex flex-row justify-items-end pt-1.5'>
                        <ActionComp keys={val} />
                     </div>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default React.memo(ListBodyComp);
