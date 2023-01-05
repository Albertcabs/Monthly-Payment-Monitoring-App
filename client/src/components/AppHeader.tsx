import React from 'react';
import AddListIcon from '../img/addListIcon.png';
import RefreshDataIcon from '../img/refreshDataIcon.png';
import SettingIcon from '../img/settingIcon.png';
import { ListContext } from '../App';
import SearchComp from './SearchComp';

import ButtonImgComp from './ButtonImgComp';
import IconIsp from './IconIspComp';

const AppHeader = () => {
      const show = React.useContext(ListContext);
      const { data, setData } = show;
      const onclickHandler = (name: string) => {
            switch (name) {
                  case 'addList': {
                        setData({ ...data, showComp: 'showFormComp' });
                        break;
                  }
                  case 'refrech': {
                        console.log('refrech button');
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
            <header className='flex flex-row items-center text-center bg-slate-800 w-auto  rounded-t-xl border-b border-slate-700 py-4 '>
                  <div className='basis-5/6  flex items-center'>
                        <IconIsp />
                        <h2 className='hidden lg:block flex-none   my-2 mr-4 text-lg text-yellow-50 '>
                              Internet Provider Master List
                        </h2>
                        <SearchComp />
                  </div>

                  <div className='flex justify-end my-3'>
                        <ButtonImgComp
                              imgSrc={AddListIcon}
                              name='addList'
                              onclick={onclickHandler}
                              wide={12}
                        />
                        <ButtonImgComp
                              imgSrc={RefreshDataIcon}
                              name='refrech'
                              onclick={onclickHandler}
                              wide={12}
                        />
                        <ButtonImgComp
                              imgSrc={SettingIcon}
                              name='setting'
                              onclick={onclickHandler}
                              wide={12}
                        />
                  </div>
            </header>
      );
};

export default React.memo(AppHeader);
