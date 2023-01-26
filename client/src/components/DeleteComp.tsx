import React from 'react';
import { ListContext } from './App';
import axios from 'axios';
type Props = {
   resHead: string[];
};
const DeleteComp = ({ resHead }: Props) => {
   const { data, setData } = React.useContext(ListContext);

   const deleteHandler = async () => {
      try {
         const res = await axios.delete('http://localhost:5050/delete', {
            data: data.key,
         });
      } catch (err: any) {
         console.log('Error Message: ', err.message);
         // setError(err.message);
      } finally {
         setData({
            ...data,
            key: ['none'],
            showComp: 'none',
            reload: true,
         });
      }
   };
   return (
      <div className='absolute top-20 z-50 min-h-max  w-full '>
         <div className='mx-auto min-h-max w-[350px] flex-col rounded-xl border-2 border-green-600 px-6 py-2  dark:bg-slate-900 '>
            <svg
               aria-hidden='true'
               className='mx-auto mb-4 h-12 w-12 text-white dark:text-gray-200'
               fill='none'
               stroke='orange'
               viewBox='0 0 24 24'
               xmlns='http://www.w3.org/2000/svg'
            >
               <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
               ></path>
            </svg>
            <h3 className='mx-auto mb-5 text-center font-mono text-base font-medium text-white'>
               Are you sure you want to delete this Customer?
            </h3>
            <div className='py4  mx-auto my-3 min-h-max flex-row text-sm text-slate-900  '>
               {data.key.map((value, i) => {
                  return (
                     <div
                        key={i}
                        className='flex justify-center py-2  odd:bg-slate-400 even:bg-slate-500'
                     >
                        <section className='w-[38%] pl-5 '>
                           {resHead[i]}
                        </section>
                        <section className='w-[1%] px-2  '>:</section>

                        <section className='ml-10 w-[60%] font-semibold '>
                           {value}
                        </section>
                     </div>
                  );
               })}
               <div className='mt-5 flex text-center '>
                  <button
                     onClick={deleteHandler}
                     className=' mr-2 w-5/6 rounded-lg  bg-red-500 px-5 py-2.5 text-sm  text-white hover:bg-red-800  focus:ring-4'
                  >
                     Yes, I'm sure
                  </button>

                  <button
                     onClick={() => {
                        setData({
                           ...data,
                           key: [''],
                           showComp: 'none',
                        });

                        console.log('delete cancel');
                     }}
                     className='  w-5/6 rounded-lg  border border-gray-200 bg-slate-600 px-5 py-2.5 text-sm  text-white hover:bg-slate-800  '
                  >
                     No, cancel
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default DeleteComp;
