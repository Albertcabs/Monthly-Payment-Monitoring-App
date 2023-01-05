import React from 'react';
import SearchIcon from '../img/searchIcon.png';
const SearchComp = () => {
      return (
            <form className='mx-5 w-120 flex-grow'>
                  <label className='text-sm pl-5 text-gray-900 sr-only dark:text-white '>
                        Search
                  </label>
                  <div className='relative'>
                        <div className='absolute inset-y-0 left-0 flex items-center pl-3 '>
                              <img
                                    src={SearchIcon}
                                    alt='Add List'
                                    width='28'
                                    height='25'
                              />
                        </div>
                        <input
                              type='search'
                              id='default-search'
                              className='block w-full py-3.5 pl-10 text-sm text-slate-900 border border-slate-500 rounded-lg bg-slate-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                              placeholder='Search Customer Names...'
                              required
                        />
                        <button
                              type='submit'
                              className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        >
                              Search
                        </button>
                  </div>
            </form>
      );
};

export default SearchComp;
