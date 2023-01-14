import React from 'react';
import { ListContext } from '../App';
import ButtonImgComp from './ButtonComp/ButtonImgComp';
import closeSvg from '../img/close.svg';
import { getNextMonth } from '../function/formatDate';
import axios from 'axios';
import { dValue, dValType } from '../types/Customer.type';

const UpdatePaymentComp = () => {
      const list = React.useContext(ListContext);
      const { data, setData } = list;
      const [val, setVal] = React.useState<dValType>(dValue);
      const arr = Object.values(data.key);

      React.useEffect(() => {
            setVal({
                  IDNum: arr[0],
                  customerName: arr[1],
                  startDate: arr[2],
                  dueDate: getNextMonth(arr[3]),
                  payment: arr[4],
                  price: arr[5],
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      async function updateNextMonth() {
            let isDone = false;
            try {
                  const res = await axios.put(
                        'http://localhost:5050/update',
                        val
                  );
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
      console.log(val);
      return (
            <div className='bg-slate-200 absolute  inset-x-0 top-52 min-w-max max-w-max max-h-max mx-auto  justify-center rounded-lg shadow py-2 px-3   '>
                  <div className='flex justify-between pl-2 mt-2 pb-5 border-b border-slate-300'>
                        <h3 className='text-lg'>Monthly Payment</h3>
                        <ButtonImgComp
                              imgSrc={closeSvg}
                              name='close'
                              onclick={onclickHandler}
                              classData='w-7'
                             
                        />
                  </div>

                  <div className=' mx-auto mt-5 py-2 text-sm px-5'>
                        <section className='flex  mb-4 '>
                              <h4 className='w-24'>Name : </h4>
                              <span>{data.key[1]}</span>
                        </section>
                        <section className='flex  mb-4'>
                              <h3 className='w-24 '>Due Date :</h3>
                              <span>{data.key[3]}</span>
                        </section>
                        <section className='flex  mb-4 '>
                              <h3 className='w-24'> Next Month :</h3>
                              <span>{val.dueDate}</span>
                        </section>
                        <button
                              onClick={() => onclickHandler('update')}
                              className=' text-white text-sm  bg-blue-800 hover:bg-blue-500 focus:ring-4 rounded-lg  px-5 py-2.5 mt-5 x-auto '
                        >
                              Payed this Month
                        </button>
                  </div>
            </div>
      );
};

export default UpdatePaymentComp;
