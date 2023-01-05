import React from 'react';
import {basis} from '../../types/Customer.type'
type HeadProps = {
      head: string[];
};
const ListHeadComp = ({ head }: HeadProps) => {
    
      return (
            <div className='text-white  bg-green-800 flex py-4 '>
                  {head.map((val, i) => {
                        return (
                              <span key={i} className={`${basis[i]} text-center border-r border-cyan-300 `}>
                                    {val}
                              </span>
                        );
                  })}
                  <span className=' px-6 text-center   flex-grow'>Action</span>
            </div>
      );
};

export default React.memo(ListHeadComp);
