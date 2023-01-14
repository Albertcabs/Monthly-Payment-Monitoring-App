import React from 'react';
import { ListContext } from '../App';
import SearchComp from './SearchComp';

import ButtonImgComp from './ButtonComp/ButtonImgComp';
import IconIsp from './IconIspComp';
import ListHeadComp from './tableComp/ListHeadComp';
import refreshSvg from '../img/refresh.svg';
import settingSvg from '../img/setting.svg';
import addListSvg from '../img/addList.svg';

const AppHeader = () => {
      const show = React.useContext(ListContext);
      const { data, setData } = show;

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
            <div className='w-full h-full  bg-green-900 flex-row '>
                  <div className='flex items-center mr-2 py-1.5 '>
                        <IconIsp />
                        <h2 className='hidden lg:inline-block flex-none   mr-4 text-lg text-yellow-50 '>
                              Internet Provider Master List
                        </h2>
                        <SearchComp />
                        <section className='flex justify-evenly py-1 w-32 bg-green-900 '>
                              <ButtonImgComp
                                    imgSrc={addListSvg}
                                    name='AddList'
                                    onclick={onclickHandler}
                                    classData=' bg-blue-800 h-7'
                              />
                              <ButtonImgComp
                                    imgSrc={refreshSvg}
                                    name='Refrech'
                                    onclick={onclickHandler}
                                    classData=' bg-blue-800 h-7'
                              />
                              <ButtonImgComp
                                    imgSrc={settingSvg}
                                    name='Setting'
                                    onclick={onclickHandler}
                                    classData=' bg-blue-800  h-7'
                              />
                        </section>
                  </div>
                  <ListHeadComp head={data.listHead} />
            </div>
      );
};

export default React.memo(AppHeader);
