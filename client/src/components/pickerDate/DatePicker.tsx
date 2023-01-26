import React from 'react';
import { monthMap } from '../../types/Customer.type';
import createDataDay from './createDataDay';
type MyDateProps = {
   setDateValue: React.Dispatch<React.SetStateAction<number[]>>;
   setShowDatePicker: React.Dispatch<React.SetStateAction<boolean>>;
};
const DatePicker = ({ setDateValue, setShowDatePicker }: MyDateProps) => {
   const daysMap = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
   const newDate = new Date();
   const [day] = React.useState(newDate.getDate());
   const [month, setMonth] = React.useState(newDate.getMonth());
   const [year, setYear] = React.useState(newDate.getFullYear());

   //=========================================================
   //      mapping the days in calendar date picker
   //=========================================================

   const onclickHandler = (action: string) => {
      switch (action) {
         case 'add': {
            if (month >= 11) {
               setMonth(0);
               setYear(year + 1);
            } else {
               setMonth(month + 1);
            }
            break;
         }

         case 'sub': {
            if (month <= 0) {
               setMonth(11);
               setYear(year - 1);
            } else {
               setMonth(month - 1);
            }
            break;
         }

         default: {
            console.log('no action selected');
            break;
         }
      }
   };

   const DaysData = React.useCallback(() => {
      let { dataBox, firsDay, endDayMonth } = createDataDay(year, month);
      const elemBnt = firsDay + endDayMonth;

      const nowYear = newDate.getFullYear();
      const nowMonth = newDate.getMonth();
      const mDay = newDate.getDate();

      return (
         <>
            {dataBox.map((val, i) => {
               return (
                  <div
                     key={i + 'as'}
                     className=' h-full w-full border-r border-b border-slate-800 bg-slate-900  text-center text-xs'
                  >
                     {nowYear > year ||
                     (nowYear === year && nowMonth > month) ||
                     (nowYear >= year &&
                        nowMonth === month &&
                        mDay >= val &&
                        elemBnt > i) ? (
                        <div
                           className={`m-1 cursor-pointer py-1.5 text-white hover:bg-green-600 ${
                              val === mDay && year === nowYear
                                 ? 'bg-green-600'
                                 : 'bg-slate-600'
                           }`}
                           onClick={() => onclickHandler2(val)}
                        >
                           {val}
                        </div>
                     ) : null}
                     {nowYear < year ||
                     (nowYear === year && nowMonth < month) ||
                     (nowYear <= year &&
                        nowMonth === month &&
                        (mDay < val || elemBnt <= i)) ? (
                        <div key={i + 'a'} className={`dateBtn-class`}>
                           {val}
                        </div>
                     ) : null}
                  </div>
               );
            })}
         </>
      );
   }, [year, month]);

   const onclickHandler2 = (dayNum: number) => {
      if (dayNum !== 0) {
         setDateValue([month, dayNum, year]);
         setShowDatePicker(false);
      } else {
         alert('Ops!! please select number from 1 to 31');
      }
   };

   const MapDate = React.useCallback(() => {}, []);

   return (
      <div className='absolute top-[50px] -left-0 z-50'>
         <div className='my-2 max-h-max max-w-max flex-col items-center justify-center rounded-lg  bg-slate-500 pb-2'>
            <div className='mx-auto flex h-[20px] w-full items-center justify-center  pt-7 pb-3 '>
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='48'
                  width='48'
                  viewBox='-10 -10 65 65'
                  onClick={() => {
                     onclickHandler('sub');
                  }}
                  className='p-2 '
               >
                  <path d='M20 44 0 24 20 4l2.8 2.85L5.65 24 22.8 41.15Z' />
               </svg>
               <h3 className='rounded-full bg-slate-600 py-1 px-5 text-center text-base text-white @xs:text-xs @sm:text-xs @md:text-sm @lg:text-sm'>{`${monthMap[month]} ${day}, ${year}`}</h3>

               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='48'
                  width='48'
                  viewBox='-10 -10 65 65'
                  onClick={() => {
                     onclickHandler('add');
                  }}
                  className=' p-1'
               >
                  <path d='m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z' />
               </svg>
            </div>

            <div className='mx-1 my-3 grid  grid-cols-7   bg-slate-700 text-xs '>
               {daysMap?.map((val, i) => {
                  return (
                     <div
                        key={i + 's'}
                        className=' border-r border-green-500 bg-green-600 px-2.5 py-2 text-center text-white'
                     >
                        {val}
                     </div>
                  );
               })}
               <DaysData />
            </div>
         </div>
      </div>
   );
};

export default DatePicker;
