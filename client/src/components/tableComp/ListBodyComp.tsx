import React from 'react';
import ActionComp from '../ActionComp';
import { basis } from '../../types/Customer.type';

type tableBodyprops = {
      tableBody: string[][];
      dayIn: string[];
};
const ListBodyComp = ({ tableBody, dayIn }: tableBodyprops) => {
      const dayToday = new Date().getDate();

      if (!tableBody?.length) return <h3>No Data to Disply</h3>;
      return (
            <div id='tbody' className=''>
                  {tableBody.map((val, index) => {
                        return (
                              <div
                                    id={val[0]}
                                    key={index}
                                    className={`relative  items-center flex border-b border-green-500 bg-slate-800 text-white  `}
                              >
                                    {val.map((value, i) => {
                                          return (
                                                <section
                                                      key={i}
                                                      hidden={false}
                                                      className={`text-center py-1  border-r border-cyan-300  ${basis[i]}    `}
                                                >
                                                      <span
                                                            className={`${
                                                                  dayToday >=
                                                                        Number(
                                                                              dayIn[
                                                                                    index
                                                                              ]
                                                                        ) &&
                                                                  i === 3 &&
                                                                  'bg-red-700 text-white rounded-3xl px-3 py-1.5 '
                                                            }`}
                                                      >
                                                            {value}
                                                      </span>
                                                </section>
                                          );
                                    })}
                                    <section className='flex place-content-evenly flex-grow '>
                                          <ActionComp keys={val} />
                                    </section>
                              </div>
                        );
                  })}
            </div>
      );
};

export default React.memo(ListBodyComp);
