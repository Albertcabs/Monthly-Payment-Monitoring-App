import React from 'react';

const ToolTipComp = () => {
      return (
            <div className='p-20'>
                  <div className='p-10 bg-green-600'>
                        <div className='group relative'>
                              <button>Click me!</button>
                              <span className='pointer-events-none absolute -top-7 left-0 opacity-0 transition-opacity group-hover:opacity-100'>
                                    This is a button.
                              </span>
                        </div>
                  </div>
                
            </div>
      );
};

export default ToolTipComp;
