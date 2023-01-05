import React from 'react';
import { useForm } from '../hooks/useForm';
import { ListContext } from '../App';

import DatePicker from './pickerDate/DatePicker';

const FormComp = () => {
      const show = React.useContext(ListContext);
      const { data, setData } = show;

      const [dateValue, setDateValue] = React.useState<number[]>([0, 0, 0]);
      const [showDatePicker, setShowDatePicker] = React.useState(false);

      // getting the event handlers from our custom hook
      const { onChange, onSubmit, defaultValue } = useForm(dateValue);

      // a submit function that will execute upon form submission
      return (
            <div className='absolute  inset-x-0 top-52 w-100 min-h-max  mx-auto bg-slate-700 border boder-slate-300 text-slate-900'>
                  <form className='py-16 px-10 flex-col' onSubmit={onSubmit}>
                        <div className='mb-5'>
                              <label className='label'>{`${data.head[1]}  :`}</label>
                              <input
                                    type='text'
                                    name={'customerName'}
                                    defaultValue={defaultValue[1]}
                                    className='input'
                                    onChange={onChange}
                                    required
                              />
                        </div>

                        <div className='mb-5'>
                              <label className='label'>{`${data.head[2]} :`}</label>
                              <div
                                    onClick={() => {
                                          setShowDatePicker(true);
                                    }}
                                    className='input'
                              >
                                    <h4>{defaultValue[2]}</h4>
                              </div>
                              {showDatePicker ? (
                                    <DatePicker
                                          setDateValue={setDateValue}
                                          setShowDatePicker={setShowDatePicker}
                                    />
                              ) : null}
                        </div>

                        <div className='mb-5'>
                              <label className='label'>{`${data.head[3]} :`}</label>
                              <h4 className='input'>{defaultValue[3]}</h4>
                        </div>

                        <div className='mb-5'>
                              <label className='label'>{`${data.head[4]} :`}</label>
                              <select
                                    name={'payment'}
                                    defaultValue={defaultValue[4]}
                                    className='input'
                                    onChange={onChange}
                                    required
                              >
                                    <option value='Monthly'>Monthly</option>
                                    <option value='weekly'>Weekly</option>
                                    <option value='QuerterLy'>Quarterly</option>
                                    <option value='Yearly'>Yearly</option>
                              </select>
                        </div>

                        <div className='mb-5'>
                              <label className='label'>{`${data.head[5]} :`}</label>
                              <input
                                    type='number'
                                    name={'price'}
                                    defaultValue={defaultValue[5]}
                                    className='input'
                                    onChange={onChange}
                                    required
                              />
                        </div>
                        <div className='flex justify-between mt-5 '>
                              <button className='submit' type='submit'>
                                    submit
                              </button>

                              <button
                                    className='cancel'
                                    type='reset'
                                    onClick={() => {
                                          setData({
                                                ...data,
                                                key: [],
                                                showComp: 'None',
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
