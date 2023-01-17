import React from 'react';
import ActionComp from '../ActionComp';

type ListProps = {
      listBody: string[][];
      listHead: string[];
      listDue: boolean[];
};
const ListBodyComp = ({ listBody, listHead, listDue }: ListProps) => {
      if (!listBody?.length) return <h3>No Data to Disply</h3>;
      return (
            <div className='ltr-content h-full  w-full py-3 text-sm text-slate-500'>
                  {listBody.map((val, index) => {
                        return (
                              <div
                                    id={val[0]}
                                    key={index}
                                    className={`mb-3 flex justify-center`}
                              >
                                    <div
                                          className={`mx-auto w-64 rounded-2xl bg-slate-900 ${
                                                listDue[index]
                                                      ? ' border border-yellow-500  '
                                                      : ' border-4 border-red-800 text-white '
                                          }  px-4 pt-2.5 pb-1 sm:hidden md:hidden lg:hidden  `}
                                    >
                                          <div className='  '>
                                                {val.map((value, i) => {
                                                      return (
                                                            <div
                                                                  key={i}
                                                                  className={`
                                                                        flex py-1.5 ${
                                                                              i !==
                                                                              0
                                                                                    ? 'justify-center'
                                                                                    : 'justify-start'
                                                                        }
                                                                  `}
                                                            >
                                                                  <section
                                                                        className={`${
                                                                              i !==
                                                                              0
                                                                                    ? 'w-16'
                                                                                    : 'w-10'
                                                                        } `}
                                                                  >
                                                                        {
                                                                              listHead[
                                                                                    i
                                                                              ]
                                                                        }
                                                                  </section>
                                                                  <section
                                                                        className={`${
                                                                              i ===
                                                                              0
                                                                                    ? 'hidden'
                                                                                    : 'block pr-3  '
                                                                        }`}
                                                                  >
                                                                        :
                                                                  </section>

                                                                  <section
                                                                        className={`inline-flex w-24 content-center `}
                                                                  >
                                                                        {value}
                                                                  </section>
                                                            </div>
                                                      );
                                                })}
                                                <div className='float-right w-24 pt-2'>
                                                      <ActionComp keys={val} />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        );
                  })}
            </div>
      );
};

export default React.memo(ListBodyComp);
