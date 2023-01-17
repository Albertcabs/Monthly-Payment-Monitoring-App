import React from 'react';
import { useForm } from '../hooks/useForm';
import { ListContext } from './App';
import DatePicker from './pickerDate/DatePicker';

const FormComp = () => {
      const { data, setData } = React.useContext(ListContext);
     
      const [dateValue, setDateValue] = React.useState<number[]>([]);
      const [showDatePicker, setShowDatePicker] = React.useState(false);

      // getting the event handlers from our custom hook

      const { onChange, onSubmit, dVal } = useForm(dateValue);

      // load the default Value

      // a submit function that will execute upon form submission
      return (
            <div className='absolute top-20 z-50 min-h-max  w-full '>
                  <form
                        className='mx-auto min-h-max w-[350px] flex-col rounded-xl border-2 border-green-600 px-5 py-5  dark:bg-slate-900 md:px-8 lg:px-12 '
                        onSubmit={onSubmit}
                  >
                        <h3 className='my-4 content-center font-serif text-xl  font-medium text-slate-300'>
                              {data.showComp === 'showUpdateComp'
                                    ? 'Update Customer Data'
                                    : 'Create New Cutomer Data'}
                        </h3>
                        <div className='mb-5'>
                              <label className='label'>{`${data.listHead[1]}  :`}</label>
                              <input
                                    type='text'
                                    name={'customerName'}
                                    defaultValue={dVal.customerName}
                                    maxLength={20}
                                    className='input-class'
                                    onChange={onChange}
                                    required
                              />
                        </div>

                        <div className='mb-5'>
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

                        <div className='mb-5'>
                              <label className='label'>{`${data.listHead[3]} :`}</label>
                              <h4 className='input-class'>{dVal.dueDate}</h4>
                        </div>

                        <div className='mb-5'>
                              <label className='label'>{`${data.listHead[4]} :`}</label>
                              <select
                                    name={'payment'}
                                    defaultValue={dVal.payment}
                                    className='input-class'
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
                              <label className='label'>{`${data.listHead[5]} :`}</label>
                              <input
                                    type='number'
                                    name={'price'}
                                    defaultValue={dVal.price}
                                    className='input-class'
                                    onChange={onChange}
                                    required
                              />
                        </div>
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
