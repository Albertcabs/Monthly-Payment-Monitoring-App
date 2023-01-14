import React from 'react';
import ActionComp from '../ActionComp';
import { basis } from '../../types/Customer.type';
import IconMessageComp from '../ButtonComp/IconMessageComp';

type tableBodyprops = {
      tableBody: string[][];
};
const ListBodyComp = ({ tableBody }: tableBodyprops) => {
      // const getDay = new Date().getDate();
      // const [arrNo, setArrNo] = React.useState<boolean[]>([]);

      // React.useEffect(() => {
      //       const arr = tableBody.map((val, i) => {
      //             return Number(val[3].slice(3, 6)) < getDay;
      //       });
      //       setArrNo(arr);
      //       // eslint-disable-next-line react-hooks/exhaustive-deps
      // }, []);

      //extract Data

      if (!tableBody?.length) return <h3>No Data to Disply</h3>;
      return (
            <div className=' w-full h-full text-xs  text-white allListContentClass'>
                  {tableBody.map((val, index) => {
                        return (
                              <div
                                    id={val[0]}
                                    key={index}
                                    className={`  border-b border-slate-700 bg-slate-800   items-center md:py-1.5 sm:py-1 pl-2 `}
                              >
                                    <div className='lg:hidden md:hidden sm:hidden flex-row py-3 h-36'>
                                          {Object.entries(val).map(
                                                (value, i) => {
                                                      return (
                                                            <div
                                                                  key={i}
                                                                  hidden={false}
                                                                  className={`flex justify-end  `}
                                                            >
                                                                  <div className='w-24 '>
                                                                        {
                                                                              value[0]
                                                                        }
                                                                  </div>
                                                                  <h3 className='w-2'>
                                                                        :
                                                                  </h3>
                                                                  <div className='w-24 '>
                                                                        {
                                                                              value[1]
                                                                        }
                                                                  </div>
                                                            </div>
                                                      );
                                                }
                                          )}
                                          <div
                                                className={`${basis[6]}  flex justify-center flex-grow `}
                                          >
                                                <ActionComp keys={val} />
                                          </div>
                                    </div>
                                    <div className='lg:flex md:flex sm:flex hidden'>
                                          {Object.values(val).map(
                                                (value, i) => {
                                                      return (
                                                            <div
                                                                  key={i}
                                                                  className={`text-center  border-r border-slate-700  ${basis[i]}  `}
                                                            >
                                                                  <IconMessageComp
                                                                        name={
                                                                              value
                                                                        }
                                                                        imgIndex={
                                                                              i
                                                                        }
                                                                  />
                                                            </div>
                                                      );
                                                }
                                          )}

                                          <div
                                                className={`${basis[6]}  flex justify-center flex-grow `}
                                          >
                                                <ActionComp keys={val} />
                                          </div>
                                    </div>
                              </div>
                        );
                  })}
            </div>
      );
};

export default React.memo(ListBodyComp);
