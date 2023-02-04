import React from 'react';
import { useForm } from '../hooks/useForm';
import { ListContext } from './App';
import DatePicker from './DatePicker';
import dateFormat from '../function/dateFormat';
type Props = {
   resHead: string[];
};
const FormComp = ({ resHead }: Props) => {
   const { data, setData } = React.useContext(ListContext);
   const [dateValue, setDateValue] = React.useState<number[]>([]);
   const [showDatePicker, setShowDatePicker] = React.useState(false);

   // getting the event handlers from our custom hook
   const { onChange, onSubmit, dVal, setDVal } = useForm(dateValue);

   // a submit function that will execute upon form submission
   return (
      <div className='absolute top-12 z-50 min-h-max  w-full '>
         <form
            className='form-width mx-auto min-h-max flex-col rounded-xl border-2 border-green-600 px-8 py-3  dark:bg-slate-900 '
            onSubmit={onSubmit}
         >
            {/* {show action title} */}
            <h3 className='my-3 content-center font-serif text-xl   font-medium text-slate-300 '>
               {data.showComp === 'showFormUpdate'
                  ? 'Update Customer Data'
                  : 'Create New Cutomer Data'}
            </h3>
            {/* {set Name } */}
            <div className='mb-5'>
               <label className='label'>{`${resHead[1]}  :`}</label>
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
                  className='input-class size-btn'
                  onChange={onChange}
                  required
               />
            </div>
            {/* {set start Date} */}
            <div className='relative mb-5'>
               <label className='label'>{`${resHead[2]} :`}</label>
               <div
                  onClick={() => {
                     setShowDatePicker(true);
                  }}
                  className='input-class  size-btn'
               >
                  <h4 className='h-full pt-1 text-sm'>{dVal.startDate}</h4>
               </div>
               {showDatePicker ? (
                  <DatePicker
                     setDateValue={setDateValue}
                     setShowDatePicker={setShowDatePicker}
                  />
               ) : null}
            </div>{' '}
            {/* {monitor due Date after setiing the start date} */}
            <div className='mb-5'>
               <label className='label'>{`${resHead[3]} :`}</label>
               <div className='input-class  size-btn '>
                  <h4 className='h-full pt-1 text-sm'>
                     {dateFormat(dVal.dueDate)}
                  </h4>
               </div>
            </div>
            {/* {Set Payment type} */}
            <div className='mb-5'>
               <label className='label'>{`${resHead[4]} :`}</label>
               <select
                  name={'payment'}
                  value={dVal.payment}
                  onFocus={() => {
                     setDVal({ ...dVal, payment: '' });
                  }}
                  className='input-class  size-btn'
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
               <label className='label'>{`${resHead[5]} :`}</label>
               <input
                  type='number'
                  name={'price'}
                  value={dVal.price}
                  className='input-class size-btn'
                  onFocus={() => {
                     setDVal({ ...dVal, price: '' });
                  }}
                  onChange={onChange}
                  required
               />
            </div>
            {/* {submit and canscel button} */}
            <div className='mb-5 mt-5 flex justify-between '>
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
