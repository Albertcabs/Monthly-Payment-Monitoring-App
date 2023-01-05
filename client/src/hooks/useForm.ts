import React, { useState, useEffect } from 'react';
import { nextMonthFormat, thisMonthFormat } from '../function/dateFormat';

import axios from 'axios';
import { ListContext } from '../App';

// useForm functional component

export const useForm = (dateValue: number[]) => {
      const app = React.useContext(ListContext);
      const { data, setData } = app;
      const [values, setValues] = useState({});

      // Load initial value of  form
      useEffect(() => {
            // default Value Forms
            const dVal: any[] = Object.values(data.key);

            const { nextMonth, getDays } = nextMonthFormat(new Date());
            const thisMonth = thisMonthFormat(new Date());

            // default value and update value
            let tmp = data.showComp === 'showUpdateComp';
            const dValue = tmp
                  ? [dVal[0], dVal[1], dVal[4], dVal[5]]
                  : ['', '', 'Monthly', '1000'];
            const Value = tmp
                  ? [dVal[2], dVal[3], dVal[6]]
                  : [thisMonth, nextMonth, getDays];
          
            setValues({
                  ID: dValue[0],
                  customerName: dValue[1],
                  startDate: Value[0],
                  dueDate: Value[1],
                  payment: dValue[2],
                  price: dValue[3],
                  daynum: Value[2],
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      useEffect(() => {
            const getThisYear = new Date().getFullYear();
            const getThisMonth = new Date().getMonth();

            if (dateValue[0]) {
                  const { nextMonth, getDays } = nextMonthFormat(
                        new Date(
                              `${getThisYear}-${getThisMonth + 1}-${
                                    dateValue[2]
                              }`
                        )
                  );
                  setValues({
                        ...values,
                        startDate: thisMonthFormat(
                              new Date(
                                    `${dateValue[0]}-${dateValue[1] + 1}-${
                                          dateValue[2]
                                    }`
                              )
                        ),
                        dueDate: nextMonth,
                        daynum: getDays,
                  });
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [dateValue]);

      const defaultValue: string[] = Object.values(values);

      // onChange
      const onChange = async (
            event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      ) => {
            if ('startDate' === event.target.name) {
                  console.log(event.target.value);
            } else {
                  setValues({
                        ...values,
                        [event.target.name]: event.target.value,
                  });
            }
      };

      // call back function for submit
      async function loginUserCallback() {
            try {
                  if (data.showComp === 'showUpdateComp') {
                        const res = await axios.put(
                              'http://localhost:5050/update',
                              values
                        );
                        console.log(res);
                  } else {
                        const res = await axios.post(
                              'http://localhost:5050/create',
                              values
                        );
                        console.log(res);
                  }
            } catch (error: any) {
                  alert('opps!!Something went wrong');
                  console.log(error.message);
            } finally {
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
            defaultValue,
      };
};
