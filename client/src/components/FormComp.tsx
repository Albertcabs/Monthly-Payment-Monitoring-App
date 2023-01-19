import React from 'react';
import { useForm } from '../hooks/useForm';
import { ListContext } from './App';
import DatePicker from './pickerDate/DatePicker';

const FormComp = () => {
   const { data, setData } = React.useContext(ListContext);
   const [dateValue, setDateValue] = React.useState<number[]>([]);
   const [showDatePicker, setShowDatePicker] = React.useState(false);

   // getting the event handlers from our custom hook
   const { onChange, onSubmit, dVal, setDVal } = useForm(dateValue);

   // a submit function that will execute upon form submission
   return (
      <div className='absolute top-20 z-50 min-h-max  w-full '>
         <form
            className='mx-auto min-h-max w-[350px] flex-col rounded-xl border-2 border-green-600 px-5 py-5  dark:bg-slate-900 md:px-8 lg:px-12 '
            onSubmit={onSubmit}
         >
            {/* {show action title} */}
            <h3 className='my-5 content-center font-serif text-xl  font-medium text-slate-300'>
               {data.showComp === 'showUpdateComp'
                  ? 'Update Customer Data'
                  : 'Create New Cutomer Data'}
            </h3>

            {/* {set Name } */}
            <div className='mb-5'>
               <label className='label'>{`${data.listHead[1]}  :`}</label>
               <input
                  type='text'
                  name={'customerName'}
                  value={dVal.customerName}
                  onFocus={() => {
                     setDVal({
                        ...dVal,
                        customerName: '',
                     });
                  }}
                  maxLength={20}
                  className='input-class'
                  onChange={onChange}
                  required
               />
            </div>

            {/* {set start Date} */}
            <div className='relative mb-5'>
               <label className='label'>{`${data.listHead[2]} :`}</label>
               <div
                  onClick={() => {
                     setShowDatePicker(true);
                  }}
                  className='input-class'
               >
                  <h4>{dVal.startDate}</h4>
               </div>
               {showDatePicker ? (
                  <DatePicker
                     setDateValue={setDateValue}
                     setShowDatePicker={setShowDatePicker}
                  />
               ) : null}
            </div>

            {/* {monitor due Date after setiing the start date} */}
            <div className='mb-5'>
               <label className='label'>{`${data.listHead[3]} :`}</label>
               <h4 className='input-class'>{dVal.dueDate}</h4>
            </div>

            {/* {Set Payment type} */}
            <div className='mb-5'>
               <label className='label'>{`${data.listHead[4]} :`}</label>
               <select
                  name={'payment'}
                  value={dVal.payment}
                  onFocus={() => {
                     setDVal({ ...dVal, payment: '' });
                  }}
                  className='input-class'
                  onChange={onChange}
                  required
               >
                  <option value='Monthly'>Monthly</option>
                  <option value='weekly'>Weekly</option>
                  <option value='Querterly'>Quarterly</option>
                  <option value='Yearly'>Yearly</option>
               </select>
            </div>

            {/* {set Price of Service} */}
            <div className='mb-5'>
               <label className='label'>{`${data.listHead[5]} :`}</label>
               <input
                  type='number'
                  name={'price'}
                  value={dVal.price}
                  className='input-class'
                  onFocus={() => {
                     setDVal({ ...dVal, price: '' });
                  }}
                  onChange={onChange}
                  required
               />
            </div>

            {/* {submit and canscel button} */}
            <div className='mb-5 mt-10 flex justify-between '>
               <button className='submit' type='submit'>
                  Submit
               </button>

               <button
                  className='cancel'
                  type='reset'
                  onClick={() => {
                     setData({
                        ...data,
                        key: [],
                        showComp: 'None',
                        newCustomer: '',
                     });
                  }}
               >
                  Cancel
               </button>
            </div>
         </form>
      </div>
   );
};

export default FormComp;
