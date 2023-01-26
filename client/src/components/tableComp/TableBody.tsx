import ActionComp from '../ActionComp';

import IconMessageComp from '../ButtonComp/IconMessageComp';

import { widT } from '../../types/Customer.type';
import useSearchNames from '../../hooks/useSearchNames';

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
   const { tRef, onscrollHandler } = useSearchNames(search);

   return (
      <div
         style={{ height: `${tBodyHeight + 'px'}` }}
         className='hide-SmScr text-size-class min-h-max w-full bg-slate-900'
      >
         {tBody.length > 0 ? (
            <div
               id='tableBody'
               ref={tRef}
               style={{ height: `${tBodyHeight + 'px'}` }}
               className='w-full overflow-y-scroll  text-slate-500'
               onScroll={onscrollHandler}
            >
               {tBody.map((val, index) => {
                  return (
                     <div
                        key={val[0]}
                        id={val[0]}
                        style={{ height: `${tRowHeight + 'px'}` }}
                        className={`flex  hover:text-slate-400 ${
                           search[index]
                              ? 'border-b border-green-600 text-white'
                              : 'border-b border-slate-800'
                        } `}
                     >
                        <div
                           style={{
                              width: `${widT[0]}`,
                           }}
                           className='m-auto border-r border-slate-800 text-center'
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
                                 className='m-auto border-r border-slate-800  text-center text-sm'
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
         ) : (
            <h3 className='pl-5 pt-8 font-serif text-lg text-gray-50'>
               No Data to Display
            </h3>
         )}
      </div>
   );
};

export default TableBody;
