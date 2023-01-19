import React from 'react';
import { monthMap } from '../../types/Customer.type';
type MyDateProps = {
   setDateValue: React.Dispatch<React.SetStateAction<number[]>>;
   setShowDatePicker: React.Dispatch<React.SetStateAction<boolean>>;
};
const DatePicker = ({ setDateValue, setShowDatePicker }: MyDateProps) => {
   const daysMap = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   const newDate = new Date();
   const [day] = React.useState(newDate.getDate());
   const [month, setMonth] = React.useState(newDate.getMonth());
   const [year, setYear] = React.useState(newDate.getFullYear());

   //=========================================================
   //      mapping the days in calendar date picker
   //=========================================================
   function getLastWeeksDate() {
      const now = new Date();

      return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
   }

   let dataBox = new Array(42).fill(0);
   const daysMapping = () => {
      let day = 1;
      // get the first day in of the month
      const firsDay = new Date(year, month, 1).getDay();
      // get the last of days in month
      const lastDay = new Date(year, month + 1, 0).getDate();

      for (let i = 0; i < dataBox.length; i++) {
         if (i >= firsDay && i < lastDay + firsDay) {
            dataBox[i] = day;
            day++;
         }
      }
   };
   //////////////////?????????????????????????????????????????????????????????

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

      // daysMapping();
   };

   daysMapping();

   const onclickHandler2 = (dayNum: number) => {
      if (dayNum !== 0) {
         setDateValue([month, dayNum, year]);
         setShowDatePicker(false);
      } else {
         alert('Ops!! please select number from 1 to 31');
      }
   };

   return (
      <div className='absolute top-14 -left-7 z-50'>
         <div className='my-2 h-auto w-[300px] flex-col items-center justify-center rounded-lg  bg-slate-500 pb-3'>
            <div className='mx-auto flex h-[20px] w-60 items-center justify-center  py-6 '>
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
               <h3 className='rounded py-px  px-5 text-center text-base'>{`${monthMap[month]} ${day}, ${year}`}</h3>

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

            <div className='bg-slate-70 mx-2 grid grid-cols-7 rounded-md border border-yellow-600 text-xs '>
               {daysMap?.map((val, i) => {
                  return (
                     <div
                        key={i}
                        className=' border-b border-r border-slate-800 bg-slate-900 py-2.5 text-center text-xs text-white'
                     >
                        {val}
                     </div>
                  );
               })}
               {dataBox.map((val, i) => {
                  return (
                     <button
                        key={i}
                        className='border-b border-r border-slate-800 bg-slate-900 py-2 text-center text-xs text-slate-400 hover:bg-slate-700'
                        onClick={() => onclickHandler2(val)}
                     >
                        {val}
                     </button>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default DatePicker;
