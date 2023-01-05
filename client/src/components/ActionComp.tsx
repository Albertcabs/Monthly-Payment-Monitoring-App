import React from 'react';
import { ListContext } from '../App';
import checkIcon from '../img/checkIcon.png';
import boxIcon from '../img/boxIcon.png';
type ButtonProps = {
      keys: string[];
};
const ActionComp = ({ keys }: ButtonProps) => {
      const act = React.useContext(ListContext);
      const { data, setData } = act;
      const tmp = false;

      return (
            <div className='flex py-1'>
                  {/* delete Icon as Button*/}
                  <div
                        className='hover:bg-teal-600 rounded-md w-10 h-10   mr-1'
                        onClick={() => {
                              setData({
                                    ...data,
                                    key: keys,
                                    showComp: 'showDeleteComp',
                              });
                        }}
                  >
                        <svg
                              className='p-1 pointer-events-none'
                              xmlns='http://www.w3.org/2000/svg'
                              //   height='35'
                              // width='35'
                              viewBox='-10 -10 65 65'
                        >
                              <path
                                    fill='white'
                                    d='M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z'
                              />
                        </svg>
                  </div>
                  <div
                        className='hover:bg-teal-600 rounded-md w-10 h-10   mr-1'
                        onClick={() => {
                              setData({
                                    ...data,
                                    key: keys,
                                    showComp: 'showUpdateComp',
                              });
                        }}
                  >
                        <svg
                              className='p-1 pointer-events-none'
                              xmlns='http://www.w3.org/2000/svg'
                              // height='35'
                              // width='35'
                              viewBox='-10 -10 65 65'
                        >
                              <path
                                    fill='white'
                                    d='M24.15 42q-3.75 0-7.05-1.425T11.325 36.7q-2.475-2.45-3.9-5.75Q6 27.65 6 23.9t1.425-7q1.425-3.25 3.9-5.675Q13.8 8.8 17.1 7.4 20.4 6 24.15 6q4 0 7.575 1.75t6.175 4.8v-5.3h3v10.4H30.45v-3h5.25q-2.2-2.55-5.175-4.1Q27.55 9 24.15 9q-6.25 0-10.7 4.275Q9 17.55 9 23.75q0 6.35 4.4 10.8Q17.8 39 24.15 39q6.25 0 10.55-4.4Q39 30.2 39 23.95h3q0 7.5-5.2 12.775T24.15 42Zm6.1-9.85-7.7-7.6v-10.7h3v9.45L32.4 30Z'
                              />
                        </svg>
                  </div>

                  <div
                        className='relative w-10 h-10 hover:bg-teal-600 rounded-md'
                        onClick={() => {
                              console.log('checkBox');
                        }}
                  >
                        {tmp ? (
                              <img
                                    src={boxIcon}
                                    alt='box'
                                    className='absolute p-2 pointer-events-none'
                              />
                        ) : (
                              <img
                                    src={checkIcon}
                                    alt='box'
                                    className='absolute p-2 pointer-events-none'
                              />
                        )}
                  </div>

                  {/* update Icon as Button*/}
            </div>
      );
};

export default ActionComp;
