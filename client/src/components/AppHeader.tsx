import React from 'react';
import { ListContext } from '../App';
import SearchComp from './SearchComp';

import ButtonImgComp from './ButtonComp/ButtonImgComp';
import IconIsp from './IconIspComp';


import refreshSvg from '../img/refresh.svg'
import settingSvg from '../img/setting.svg'
import addListSvg from '../img/addList.svg'

const AppHeader = () => {
      const show = React.useContext(ListContext);
      const { data, setData } = show;
      const buttonStyle = 'w-9 bg-blue-600 mr-3 rounded-md hover:border-2 border-x-lime-600 '
      const onclickHandler = (name: string) => {
            switch (name) {
                  case 'AddList': {
                        setData({ ...data, showComp: 'showFormComp' });
                        break;
                  }
                  case 'refrech': {
                        console.log('refrech button');
                        setData({ ...data, reload: true });
                        break;
                  }
                  case 'setting': {
                        console.log('setting button');
                        break;
                  }

                  default: {
                        console.log('no click button at header');
                        break;
                  }
            }
      };

      return (
            <div
                  id='header'
                  className='widthClass absolute  bg-green-800 '
            >
                  <section className='flex flex-row items-center text-center py-4 '>
                        <div className='basis-5/6  flex items-center '>
                              <div className='flex items-center bg-slate-500 rounded-lg ml-5 py-0.5'>
                                    <IconIsp />
                                    <h2 className='hidden lg:block flex-none   mr-4 text-lg text-yellow-50 '>
                                          Internet Provider Master List
                                    </h2>
                              </div>

                              <SearchComp />
                        </div>

                        <div className='flex justify-end'>
                              <ButtonImgComp
                                    imgSrc={addListSvg}
                                    name='AddList'
                                    onclick={onclickHandler}
                                    classData={buttonStyle}
                                 
                              />
                              <ButtonImgComp
                                    imgSrc={refreshSvg}
                                    name='Refrech'
                                    onclick={onclickHandler}
                                    classData={buttonStyle}
                              />
                              <ButtonImgComp
                                    imgSrc={settingSvg}
                                    name='Setting'
                                    onclick={onclickHandler}
                                    classData={buttonStyle}
                              />
                        </div>
                  </section>
                 
            </div>
      );
};

export default React.memo(AppHeader);
