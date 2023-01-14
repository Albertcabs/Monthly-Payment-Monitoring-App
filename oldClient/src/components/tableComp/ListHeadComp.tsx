import React from 'react';
import { basis } from '../../types/Customer.type';
type HeadProps = {
      head: string[];
};
const ListHeadComp = ({ head }: HeadProps) => {
      return (
            <div className='hidden sm:flex justify-center lg:py-3 md:py-2.5 sm:py-1.5   text-white   text-xs border-t border-green-700 mx-auto pl-2 '>
                  {head.map((val, i) => {
                        return (
                              <section
                                    key={i}
                                    className={`${basis[i]} text-center border-r border-green-700 flex-none lg:px-3 md:px-2 sm:px-1 `}
                              >
                                    {val}
                              </section>
                        );
                  })}
                  <section className={`${basis[6]} flex flex-grow justify-center`}>
                        <span>Action</span>
                  </section>
            </div>
      );
};

export default React.memo(ListHeadComp);
