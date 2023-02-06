import React from 'react';
import { ListContext } from './App';
import ButtonImgComp from './ButtonImgComp';
import closeSvg from '../img/close.svg';
import axios from 'axios';
import getNextMonth from '../function/getNextMonth';

import dateFormat from '../function/dateFormat';

const UpdatePaymentComp = () => {
   const { data, setData } = React.useContext(ListContext);

   const [val, setVal] = React.useState<[string, number[]]>(['', [0, 0, 0]]);

   React.useEffect(() => {
      setVal([data.key[0], getNextMonth(data.key[3])]);
   }, []);

   async function updateNextMonth() {
      let isDone = false;
      try {
         const res = await axios.put('http://localhost:5050/paid', val);
         isDone = res.data.length !== 0 ? true : false;
      } catch (error: any) {
         alert('opps!!Something went wrong');
         console.log(error.message);
      }
      if (isDone) {
         setData({ ...data, key: [], showComp: 'none', reload: true });
      }
   }

   const onclickHandler = (name: string) => {
      switch (name) {
         case 'close': {
            setData({
               ...data,
               showComp: 'none',
               key: [''],
            });
            break;
         }
         case 'update': {
            updateNextMonth();
            break;
         }

         default: {
            break;
         }
      }
   };

   return (
      <div className='absolute inset-x-0  top-52 mx-auto max-h-max min-w-max max-w-max justify-center  rounded-lg border-2 border-green-600 bg-slate-800 py-2  px-3 font-serif text-sm   text-white shadow'>
         <div className='mt-2 flex justify-between border-b border-slate-600 pl-2 pb-3'>
            <h3 className='text-lg'>Monthly Payment</h3>
            <ButtonImgComp
               imgSrc={closeSvg}
               name='close'
               onclick={onclickHandler}
               classData='w-6 h-6 bg-slate-900'
            />
         </div>

         <div className='mx-auto mt-4 py-2 px-5 text-sm'>
            <section className='mb-4  flex '>
               <h4 className='w-24'>Name : </h4>
               <span>{data.key[1]}</span>
            </section>
            <section className='mb-4  flex'>
               <h3 className='w-24 '>Due Date :</h3>
               <span>{data.key[3]}</span>
            </section>
            <section className='mb-4  flex '>
               <h3 className='w-24'> Next Month :</h3>
               <span>{dateFormat(val[1])}</span>
            </section>
            <button
               onClick={() => onclickHandler('update')}
               className=' ml-3 mt-5  rounded-lg bg-blue-800 px-6 py-2.5  text-sm  hover:bg-blue-500 focus:ring-4 '
            >
               Paid this Month
            </button>
         </div>
      </div>
   );
};

export default UpdatePaymentComp;
