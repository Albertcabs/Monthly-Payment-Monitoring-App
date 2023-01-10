import React from 'react';
import ActionComp from '../ActionComp';
import { basis } from '../../types/Customer.type';

type tableBodyprops = {
      tableBody: string[][];
};
const ListBodyComp = ({ tableBody }: tableBodyprops) => {
      const getDay = new Date().getDate();
      const [arrNo, setArrNo] = React.useState<boolean[]>([]);

      React.useEffect(() => {
            const arr = tableBody.map((val, i) => {
                  return Number(val[3].slice(3, 6)) < getDay;
            });
            setArrNo(arr);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      //extract Data

      if (!tableBody?.length) return <h3>No Data to Disply</h3>;
      return (
            <div className='widthClass block text-xs '>
                  {tableBody.map((val, index) => {
                        return (
                              <div
                                    id={val[0]}
                                    key={index}
                                    className={`flex border-b border-slate-700 bg-slate-800 text-white  items-center py-1
                                    `}
                              >
                                    {val.map((value, i) => {
                                          return (
                                                <section
                                                      key={i}
                                                      hidden={false}
                                                      className={`text-center border-r border-slate-700  ${basis[i]} `}
                                                >
                                                      <span
                                                            className={`text-white rounded-3xl px-3 py-1 ${
                                                                  i === 3 &&
                                                                  arrNo[index]
                                                                        ? 'bg-red-700'
                                                                        : null
                                                            }`}
                                                      >
                                                            {value}
                                                      </span>
                                                </section>
                                          );
                                    })}
                                    <div className='flex justify-center items-center flex-grow '>
                                          <ActionComp keys={val} />
                                    </div>
                              </div>
                        );
                  })}
            </div>
      );
};

export default React.memo(ListBodyComp);
