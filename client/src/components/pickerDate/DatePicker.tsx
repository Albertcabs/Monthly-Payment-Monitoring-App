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

      // get number 28 to 31
      const getDaysOfMonth = (year: number, month: number) => {
            return new Date(year, month + 1, 0).getDate();
      };
      // get number 1 to 7
      const getDayOfWeek = (year: number, month: number) => {
            return new Date(year, month, 1).getDay();
      };
      // create array of data
      let dataBox = new Array(42).fill(0);

      const daysMapping = () => {
            let day = 1;
            const dayWeek = getDayOfWeek(year, month);
            const daysMonth = getDaysOfMonth(year, month);
            for (let i = 0; i < dataBox.length; i++) {
                  if (i >= dayWeek && i < daysMonth + dayWeek) {
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
                  setDateValue([year, month, dayNum]);
                  setShowDatePicker(false);
            } else {
                  alert('Ops!! please select month number 1 to 31');
            }
      };

      return (
            <div className='absolute z-50 top-5 -left-10'>
                  <div className='flex-col justify-center items-center h-auto w-96 my-5 bg-slate-500 py-5'>
                        <div className='flex justify-center items-center w-60 mx-auto  mb-3 '>
                              <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    height='40'
                                    width='40'
                                    viewBox='-10 -10 65 65'
                                    onClick={() => {
                                          onclickHandler('sub');
                                    }}
                                    className='py-2 px '
                              >
                                    <path d='M20 44 0 24 20 4l2.8 2.85L5.65 24 22.8 41.15Z' />
                              </svg>
                              <h3 className='py-2 px-5  text-center text-base rounded'>{`${monthMap[month]} ${day}, ${year}`}</h3>

                              <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    height='40'
                                    width='40'
                                    viewBox='-10 -10 65 65'
                                    onClick={() => {
                                          onclickHandler('add');
                                    }}
                                    className=' py-2, px '
                              >
                                    <path d='m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z' />
                              </svg>
                        </div>

                        <div className='grid grid-cols-7  text-xs text-white  bg-slate-70 mx-2 border border-yellow-600'>
                              {daysMap?.map((val, i) => {
                                    return (
                                          <div
                                                key={i}
                                                className='py-3 text-center bg-slate-900 m-px'
                                          >
                                                {val}
                                          </div>
                                    );
                              })}
                              {dataBox.map((val, i) => {
                                    return (
                                          <button
                                                key={i}
                                                className='py-2  text-center bg-slate-900 m-px'
                                                onClick={() =>
                                                      onclickHandler2(val)
                                                }
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
