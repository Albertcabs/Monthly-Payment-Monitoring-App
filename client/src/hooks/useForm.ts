import React, { useEffect } from 'react';

import axios from 'axios';
import { ListContext } from '../components/App';
import getNextMonth from '../function/getNextMonth';

import newDateFormat from '../function/newDateFormat';
import dateFormat from '../function/dateFormat';
import { dValue,dValType } from '../types/Customer.type';

// useForm functional component


export const useForm = (dateValue: number[]) => {
      const app = React.useContext(ListContext);
      const { data, setData } = app;
      const dataKey = Object.values(data.key);

      const { thisMonth, nextMonth } = newDateFormat();
      // load default value

      const [dVal, setDVal] = React.useState<dValType>( dValue);

      // load default Values
      React.useEffect(() => {
            if (data.showComp === 'showUpdateComp') {
                  setDVal({
                        IDNum: dataKey[0],
                        customerName: dataKey[1],
                        startDate: dataKey[2],
                        dueDate: dataKey[3],
                        payment: dataKey[4],
                        price: dataKey[5],
                  });
            } else {
                  const ID = 'A' + Math.round(Math.random() * 9000 + 1000);
                  setDVal({
                        IDNum: ID,
                        customerName: '',
                        startDate: dateFormat(thisMonth),
                        dueDate: dateFormat(nextMonth),
                        payment: 'MonthLy',
                        price: '1200',
                  });
            }

            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      // Load initial value of  form

      useEffect(() => {
            if (dateValue.length !== 0) {
                  const nwDate = dateFormat(dateValue);
                  const nxtDate = dateFormat(getNextMonth(dateValue));
                  setDVal({
                        ...dVal,
                        startDate: nwDate,
                        dueDate: nxtDate,
                  });
            }

            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [dateValue]);

      // onChange
      const onChange = async (
            event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      ) => {
            setDVal({
                  ...dVal,
                  [event.target.name]: event.target.value,
            });
      };

      // call back function for submit
      async function loginUserCallback() {
            let isDone = false;
            try {
                  if (data.showComp === 'showUpdateComp') {
                        const res = await axios.put(
                              'http://localhost:5050/update',
                              dVal
                        );
                        isDone = res.status === 200 ? true : false;
                  } else {
                        const res = await axios.post(
                              'http://localhost:5050/create',
                              dVal
                        );

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
      };
};
