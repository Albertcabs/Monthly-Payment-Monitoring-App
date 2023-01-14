import React from 'react';
import ActionComp from '../ActionComp';


type ListProps = {
     listBody: string[][];
     listHead: string[];
};
const ListBodyComp = ({ listBody, listHead }: ListProps) => {
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

      if (!listBody?.length) return <h3>No Data to Disply</h3>;
      return (
            <div className='w-full h-full  text-xs text-white py-6 '>
                  {listBody.map((val, index) => {
                        return (
                              <div
                                    id={val[0]}
                                    key={index}
                                    className={`flex justify-center mb-6`}
                              >
                                    <div className='lg:hidden md:hidden sm:hidden   w-64  mx-auto border border-yellow-500  bg-green-800 rounded-2xl pt-3 pb-1 px-4 '>
                                          <div className='  '>
                                                {Object.entries(val).map(
                                                      (value, i) => {
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
                                                                                    value[0]
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

                                                                        <section className='inline-flex w-24 '>
                                                                              {
                                                                                    value[1]
                                                                              }
                                                                        </section>
                                                                  </div>
                                                            );
                                                      }
                                                )}
                                                <div className='w-24 pt-2 float-right'>
                                                      
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
