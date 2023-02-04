import React, { useEffect } from 'react';
import axios from 'axios';
import { ListContext } from '../components/App';
import newDateFormat from '../function/newDateFormat';
import dateFormat from '../function/dateFormat';
import { dValue, dValType } from '../types/Customer.type';
import getNextMonthNum from '../function/getNextMonthNum';
import getNextMonth from '../function/getNextMonth';

// useForm functional component

export const useForm = (dateValue: number[]) => {
   const { data, setData } = React.useContext(ListContext);

   const { thisMonth, nextMonth } = newDateFormat();
   const [dVal, setDVal] = React.useState<dValType>(dValue);

   // load default value

   // load default Values
   React.useEffect(() => {
      if (data.key.length > 1) {
         setDVal({
            IDNum: data.key[0],
            customerName: data.key[1],
            startDate: data.key[2],
            dueDate: getNextMonth(data.key[2]),
            payment: data.key[4],
            price: data.key[5],
         });
      } else {
         const ID =
            'A' +
            data.customerName.length +
            Math.floor(Math.random() * 10000 + 100000);
         setData({ ...data, newCustomer: ID.slice(0, 7) });

         setDVal({
            IDNum: ID.slice(0, 7),
            customerName: '',
            startDate: dateFormat(thisMonth),
            dueDate: nextMonth,
            payment: 'Monthly',
            price: '1200',
         });
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   // Load initial value of  form

   useEffect(() => {
      if (dateValue.length !== 0) {
         setDVal({
            ...dVal,
            startDate: dateFormat(dateValue),
            dueDate: getNextMonthNum(dateValue),
         });
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [dateValue]);

   function toTitleCase(str: string) {
      return str
         .split(/\s+/)
         .map((s) => s.charAt(0).toUpperCase() + s.substring(1).toLowerCase())
         .join(' ');
   }

   // onChange
   const onChange = async (
      event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
   ) => {
      // check input Customer name and Capital the first Letter
      if ('customerName' === event.target.name) {
         let str = toTitleCase(event.target.value);
         setDVal({
            ...dVal,
            [event.target.name]: str,
         });
      } else {
         setDVal({
            ...dVal,
            [event.target.name]: event.target.value,
         });
      }
   };

   // call back function for submit
   async function loginUserCallback() {
      // create id

      let isDone = false;
      try {
         if (data.key.length > 1) {
            const res = await axios.put('http://localhost:5050/update', dVal);
            isDone = res.status === 200 ? true : false;
         } else {
            const res = await axios.post('http://localhost:5050/create', dVal);

            isDone = res.status === 200 ? true : false;
         }
      } catch (error: any) {
         alert('opps!!Something went wrong');
         console.log(error.message);
      }
      if (isDone) {
         setData({ ...data, key: [], showComp: 'none', reload: true });
      }
   }

   // onSubmit
   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      await loginUserCallback();
   };

   // return values
   return {
      onChange,
      onSubmit,
      dVal,
      setDVal,
   };
};
