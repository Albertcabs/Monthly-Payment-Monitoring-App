import React from 'react';
import ActionComp from '../ActionComp';
import dataExtractor from '../../function/dataExtractor';
import IconMessageComp from '../ButtonComp/IconMessageComp';
import { ListContext } from '../App';
import { widT } from '../../types/Customer.type';
import ArrowIndicator from '../ArrowIndicator';

type tableProps = {
   tBody: string[][];
   tBodyHeight: number;
   tRowHeight: number;
};

const TableBody = ({ tBody, tRowHeight, tBodyHeight }: tableProps) => {
   const { data, setData } = React.useContext(ListContext);
   const tRef = React.useRef<HTMLHeadingElement>(null);
   //-------------------------------------------------------------------------------------
   // extract data
   const { names, dueDate, arrPos, IdData } = React.useMemo(() => {
      return dataExtractor(tBody, tRowHeight);
   }, [tBody, tRowHeight]);

   React.useEffect(() => {
      setData({ ...data, customerName: names });
   }, [names]);

   //-------------------------------------------------------------------------------------
   // searching the names in the list
   const [arrowPos, setArrowPos] = React.useState<number>(arrPos[0]);
   const [prvPos, setPrvPos] = React.useState<number>(0);
   const setClass = 'text-slate-100';

   React.useEffect(() => {
      if (data.activeSearch) {
         const index = data.indexName;
         const divRef = tRef.current;

         const element = document.getElementById(IdData[data.indexName]);
         const e = document.getElementById('tableBody');

         // scroll to top or to down
         element?.scrollIntoView({ behavior: 'smooth' });

         // get the number of row to move
         let rowMoveVal = 0;
         if (e?.scrollTop !== undefined) rowMoveVal = e?.scrollTop / 37;

         // clear prvPost and active;
         divRef?.children[prvPos].classList.remove(setClass);
         setPrvPos(data.indexName);

         // set Arrow position
         let posI = index === 0 ? 35 : index - rowMoveVal;

         setArrowPos(arrPos[posI]);
         divRef?.children[index].classList.add(setClass);
      }
      setData({ ...data, activeSearch: false });
   }, [data.activeSearch]);
   //..........................................................................................................

   //-------------------------------
   // onscroll Data
   const onscrollHandler = () => {
      const divRef = tRef.current;
      if (!data.activeSearch) {
         divRef?.children[prvPos].classList.remove(setClass);
         setData({ ...data, activeSearch: false, showIndicator: false });
         setPrvPos(0);
      }
   };
   return (
      <div className='hide-tableSmScr min-h-max w-full bg-slate-900'>
         {tBody.length > 0 ? (
            <div
               id='tableBody'
               ref={tRef}
               style={{ height: `${tBodyHeight + 'px'}` }}
               className='w-full overflow-y-auto overscroll-none text-sm  text-slate-500'
               onScroll={onscrollHandler}
            >
               {tBody.map((val, index) => {
                  return (
                     <div
                        key={val[0]}
                        id={val[0]}
                        style={{ height: `${tRowHeight + 'px'}` }}
                        className='flex border-b border-slate-800 hover:text-slate-300'
                     >
                        <div
                           style={{
                              width: `${widT[0]}`,
                           }}
                           className='m-auto border-r border-slate-800 text-center text-sm'
                        >
                           <span>{index + 1}</span>
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
                                 <IconMessageComp imgIndex={i} name={value} />
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

         {data.showIndicator ? <ArrowIndicator topP={arrowPos} /> : null}
      </div>
   );
};

export default TableBody;
