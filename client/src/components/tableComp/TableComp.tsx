import React from 'react';
import ActionComp from '../ActionComp';
import { basis } from '../../types/Customer.type';
import IconMessageComp from '../ButtonComp/IconMessageComp';


type tableProps = {
      tableBody: string[][];
      tableHead: string[];
};

const TableComp = ({ tableBody, tableHead }: tableProps) => {
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
            <table className=' w-full  text-slate-400 '>
                  <thead className='sticky top-[65px] h-12 bg-slate-700 z-20 '>
                        <tr>
                              {tableHead.map((val, i) => {
                                    return (
                                          <th
                                                key={i}
                                                className=' border-r border-slate-600'
                                          >
                                                {val}
                                          </th>
                                    );
                              })}
                              <th className=''>Action</th>
                        </tr>
                  </thead>
                  <tbody className=' sticky top-[120px] bottom-10 text-center text-sm bg-slate-900'>
                        {tableBody.map((val, index) => {
                              return (
                                    <tr
                                          key={index}
                                          className='border-b border-green-700 '
                                    >
                                          {Object.values(val).map(
                                                (value, i) => {
                                                      return (
                                                            <td
                                                                  key={i}
                                                                  className={`border-r border-slate-500 py-2  `}
                                                            >
                                                                 

                                                                  <IconMessageComp
                                                                        imgIndex={
                                                                              i
                                                                        }
                                                                        name={
                                                                              value
                                                                        }
                                                                  />
                                                            </td>
                                                      );
                                                }
                                          )}
                                          <td className={`px-2`}>
                                                <ActionComp keys={val} />
                                          </td>
                                    </tr>
                              );
                        })}
                  </tbody>
            </table>
      );
};

export default TableComp;
