import React from 'react';
import searchSvg from '../img/search.svg'
const SearchComp = () => {
      return (
            <form className=' flex-grow '>
                  <label className='text-sm pl-5 text-gray-900 sr-only dark:text-white '>
                        Search
                  </label>
                  <div className='relative'>
                        <div className='absolute inset-y-0 left-0 flex items-center p-1 '>
                              <img
                              
                                    src={searchSvg}
                                    alt='Add List'
                                   
                              />
                        </div>
                        <input
                              type='search'
                              id='default-search'
                              className='block w-full md:h-9 sm:h-8 h-7 pl-10 py-1 text-sm text-slate-900 border border-yellow-500 rounded-lg bg-slate-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-500 dark:hover:bg-slate-700 dark:border-yellow-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                              placeholder='Search Customer Names...'
                              required
                        />
                      
                  </div>
            </form>
      );
};

export default SearchComp;
