import React from 'react';
import { ListContext } from '../App';
import axios from 'axios';

const DeleteComp = () => {
      const act = React.useContext(ListContext);
      const { data, setData } = act;
      console.log(data.key);

      const deleteHandler = async () => {
            try {
                  const res = await axios.delete(
                        'http://localhost:5050/delete',
                        {
                              data: data.key,
                        }
                  );
                  console.log('delete comp', res);
            } catch (err: any) {
                  console.log('Error Message: ', err.message);
                  // setError(err.message);
            } finally {
                  setData({
                        ...data,
                        key: ['none'],
                        showComp: 'none',
                        reload: true,
                  });
            }
      };
      return (
            <div className='absolute  inset-x-0 top-52 max-w-max  min-h-max  mx-auto  justify-center rounded-lg shadow bg-slate-200 py-5 px-5  '>
                  <div className='bg-green-600 rounded-lg mb-5 px-5 py-4'>
                        <svg
                              aria-hidden='true'
                              className='mx-auto mb-4 text-white w-14 h-14 dark:text-gray-200'
                              fill='none'
                              stroke='orange'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                        >
                              <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                              ></path>
                        </svg>
                        <h3 className='mb-5 mx-auto text-lg font-medium font-sans text-slate-900 text-center'>
                              Are you sure you want to delete this Customer?
                        </h3>
                  </div>

                  <div
                        id='delete-UL'
                        className='flex-row  mx-auto my-3 border-2 border-slate-900'
                  >
                        {data.key.map((val: any, i) => {
                              return (
                                    <div
                                          key={i}
                                          className='w-auto flex text-lg font-normal bg-slate-600 text-white '
                                    >
                                          <h2 className=' py-1 pl-5 w-44 '>
                                                {data.head[i]}
                                          </h2>
                                          <h2 className={`py-1 pl-2 `}>
                                                {val}
                                          </h2>
                                    </div>
                              );
                        })}
                  </div>
                  <div className='text-center flex mt-5'>
                        <button
                              onClick={deleteHandler}
                              className=' w-5/6 text-white text-sm  bg-red-500 hover:bg-red-800 focus:ring-4 rounded-lg  px-5 py-2.5  mr-2'
                        >
                              Yes, I'm sure
                        </button>

                        <button
                              onClick={() => {
                                    setData({
                                          ...data,
                                          key: [''],
                                          showComp: 'none',
                                    });

                                    console.log('delete cancel');
                              }}
                              className='  w-5/6 text-white  text-sm bg-slate-600 hover:bg-slate-800 rounded-lg border border-gray-200  px-5 py-2.5  '
                        >
                              No, cancel
                        </button>
                  </div>
            </div>
      );
};

export default DeleteComp;
