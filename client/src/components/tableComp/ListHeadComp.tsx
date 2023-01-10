import React from 'react';
import {basis} from '../../types/Customer.type'
type HeadProps = {
      head: string[];
};
const ListHeadComp = ({ head }: HeadProps) => {     
    
      return (
            <section className='widthClass  text-white bg-green-800  flex py-3.5 text-xs border-t border-green-700 '>
                  {head.map((val, i) => {
                        return (
                              <span key={i} className={`${basis[i]} text-center border-r border-green-700 `}>
                                    {val}
                              </span>
                        );
                  })}
                  <span className=' px-6 text-center   flex-grow '>Action</span>
            </section>
      );
};

export default React.memo(ListHeadComp);
