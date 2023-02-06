import ActionComp from './ActionComp';
import IconMessageComp from './IconMessageComp';
import { widT } from '../types/Customer.type';
import useSearchNames from '../hooks/useSearchNames';
import React from 'react';

type tableProps = {
   tBody: string[][];
   search: boolean[];
   dueDate: number[];
   tBodyHeight: number;
   tRowHeight: number;
};

const TableBody = ({
   tBody,
   search,
   dueDate,
   tRowHeight,
   tBodyHeight,
}: tableProps) => {
   //---------------------------------
   // searching the names in the list
   const [clearSearch, setClearSearch] = React.useState(false);
   const { tRef, clickScrollHandler } = useSearchNames(
      search,
      clearSearch,
      setClearSearch
   );

   return (
      <div
         style={{ height: `${tBodyHeight + 'px'}` }}
         className='hide-SmScr text-size-class min-h-max w-full bg-slate-800'
      >
         {tBody.length > 0 ? (
            <div
               id='tableBody'
               ref={tRef}
               style={{ height: `${tBodyHeight + 'px'}` }}
               className='w-full overflow-y-scroll  text-slate-400'
               onScroll={() => {
                  setClearSearch(true);
                  clickScrollHandler();
               }}
            >
               {tBody.map((val, index) => {
                  return (
                     <div
                        key={val[0]}
                        id={val[0]}
                        style={{ height: `${tRowHeight + 'px'}` }}
                        className={`flex  hover:text-slate-300 ${
                           search[index]
                              ? 'border-b-2 border-green-600 text-white'
                              : 'border-b border-slate-700'
                        } `}
                     >
                        <div
                           style={{
                              width: `${widT[0]}`,
                           }}
                           className='m-auto border-r border-slate-700 text-center'
                        >
                           {index + 1}
                        </div>

                        {val.map((value, i) => {
                           return (
                              <div
                                 key={i}
                                 style={{
                                    width: `${widT[i + 1]}`,
                                 }}
                                 onClick={() => {
                                    setClearSearch(true);
                                    clickScrollHandler();
                                 }}
                                 className='m-auto border-r border-slate-700  text-center text-sm'
                              >
                                 <IconMessageComp
                                    imgIndex={i}
                                    name={value}
                                    dueDate={dueDate[index]}
                                 />
                              </div>
                           );
                        })}

                        <div
                           style={{
                              width: `${widT[7]}`,
                           }}
                           className={`m-auto`}
                        >
                           <ActionComp keys={val} />
                        </div>
                     </div>
                  );
               })}
            </div>
         ) : null}
      </div>
   );
};

export default TableBody;
