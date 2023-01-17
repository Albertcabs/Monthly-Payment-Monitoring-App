import React from 'react';
import ActionComp from '../ActionComp';

import IconMessageComp from '../ButtonComp/IconMessageComp';

type tableProps = {
      tableBody: string[][];
      tableHead: string[];
      listDue: boolean[];
};

const TableComp = ({ tableBody, tableHead, listDue }: tableProps) => {
      if (!tableBody?.length) return <h3>No Data to Disply</h3>;
      return (
            <table className='ltr-content z-0 h-full w-full text-slate-200 '>
                  <thead className='sticky top-0 z-20 h-[42px]  w-full  bg-slate-700   '>
                        <tr>
                              {tableHead.map((val, i) => {
                                    return (
                                          <th
                                                key={i}
                                                className='border-r border-slate-600 sm:text-xs md:text-sm lg:text-sm '
                                          >
                                                {val}
                                          </th>
                                    );
                              })}
                              <th className='sm:text-xs md:text-sm lg:text-sm '>
                                    Action
                              </th>
                        </tr>
                  </thead>
                  <tbody className='h-full w-full text-center text-xs'>
                        {tableBody.map((val, index) => {
                              return (
                                    <tr
                                          key={val[0]}
                                          id={val[0]}
                                          className={`h-[38px] border-b border-slate-800 ${
                                                listDue[index]
                                                      ? 'text-slate-200'
                                                      : 'text-red-400 '
                                          }`}
                                    >
                                          {val.map((value, i) => {
                                                return (
                                                      <td
                                                            key={i}
                                                            className={` border-r border-slate-800 py-px `}
                                                      >
                                                            <IconMessageComp
                                                                  imgIndex={i}
                                                                  name={value}
                                                            />
                                                      </td>
                                                );
                                          })}
                                          <td className={`py-1 px-2.5 `}>
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
