import React from 'react';
import { ListContext } from './App';
import ButtonImgComp from './ButtonComp/ButtonImgComp';
import closeSvg from '../img/close.svg';
import getNextMonth from '../function/getNextMonth';
import axios from 'axios';
import dateFormat from '../function/dateFormat';

const UpdatePaymentComp = () => {
   const { data, setData } = React.useContext(ListContext);

   const [val, setVal] = React.useState<any[]>([[0, 0, 0], '']);

   React.useEffect(() => {
      setVal([getNextMonth(data.key[3]), data.key[0]]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   async function updateNextMonth() {
      let isDone = false;
      try {
         const res = await axios.put('http://localhost:5050/update', val);
         isDone = res.status === 200 ? true : false;
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
      <div className='absolute inset-x-0  top-52 mx-auto max-h-max min-w-max max-w-max justify-center  rounded-lg bg-slate-200 py-2 px-3 shadow   '>
         <div className='mt-2 flex justify-between border-b border-slate-300 pl-2 pb-5'>
            <h3 className='text-lg'>Monthly Payment</h3>
            <ButtonImgComp
               imgSrc={closeSvg}
               name='close'
               onclick={onclickHandler}
               classData='w-7'
            />
         </div>

         <div className='hi mx-auto mt-5 py-2 px-5 text-sm'>
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
               <span>{dateFormat(val[0])}</span>
            </section>
            <button
               onClick={() => onclickHandler('update')}
               className=' x-auto mt-5  rounded-lg bg-blue-800 px-5 py-2.5  text-sm text-white hover:bg-blue-500 focus:ring-4 '
            >
               Payed this Month
            </button>
         </div>
      </div>
   );
};

export default UpdatePaymentComp;
