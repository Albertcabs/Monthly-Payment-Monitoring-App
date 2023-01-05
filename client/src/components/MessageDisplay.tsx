import React from 'react';
import MessageIcon from '../img/messageIcon.png';
export const MessageDisplay = () => {
      return (
            <div className='invisible absolute hover:visible'>
                  <img
                        className='w-28 h-16'
                        src={MessageIcon}
                        alt='message '
                        //   width={100}
                        // height={30}
                  />
                  <h5 className='text-xs absolute top-5 left-9'>Setting</h5>
            </div>
      );
};
