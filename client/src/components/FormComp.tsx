import React from 'react';
import { useForm } from '../hooks/useForm';
import { ListContext } from '../App';
import DatePicker from './pickerDate/DatePicker';

const FormComp = () => {
      const show = React.useContext(ListContext);
      const { data, setData } = show;
      const [dateValue, setDateValue] = React.useState<number[]>([]);
      const [showDatePicker, setShowDatePicker] = React.useState(false);

      // getting the event handlers from our custom hook

      const { onChange, onSubmit, dVal } = useForm(dateValue);

      // load the default Value

      // a submit function that will execute upon form submission
      return (
            <div className='absolute  inset-x-0 top-52 w-100 min-h-max  mx-auto bg-slate-700 border boder-slate-300 text-slate-900'>
                  <form className='py-16 px-10 flex-col' onSubmit={onSubmit}>
                        <div className='mb-5'>
                              <label className='label'>{`${data.listHead[1]}  :`}</label>
                              <input
                                    type='text'
                                    name={'customerName'}
                                    defaultValue={dVal.customerName}
                                    className='input'
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
                                    className='input'
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
                              <h4 className='input'>{dVal.dueDate}</h4>
                        </div>

                        <div className='mb-5'>
                              <label className='label'>{`${data.listHead[4]} :`}</label>
                              <select
                                    name={'payment'}
                                    defaultValue={dVal.payment}
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
                              <label className='label'>{`${data.listHead[5]} :`}</label>
                              <input
                                    type='number'
                                    name={'price'}
                                    defaultValue={dVal.price}
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
