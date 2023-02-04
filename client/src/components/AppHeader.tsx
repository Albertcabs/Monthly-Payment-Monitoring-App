import React from 'react';
import { ListContext } from './App';
import SearchComp from './SearchComp';
import ButtonImgComp from './ButtonImgComp';
import refreshSvg from '../img/refresh.svg';
import addListSvg from '../img/addList.svg';
import ISPIcon from '../img/ISPIcon.png';

type AppProps = {
   headH: number;
   names: string[];
};
const AppHeader = ({ headH, names }: AppProps) => {
   const { data, setData } = React.useContext(ListContext);

   const onclickHandler = (name: string) => {
      switch (name) {
         case 'AddList': {
            setData({ ...data, showComp: 'showForm' });
            break;
         }
         case 'refrech': {
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
         style={{ height: `${headH + 'px'}` }}
         className=' flex h-full w-full  flex-row  items-center  justify-center bg-green-700 text-white  @2xl:justify-between  @3xl:justify-between  @4xl:justify-between  @5xl:justify-between  @6xl:justify-between  @7xl:justify-between '
      >
         <div className='ml-4 flex flex-row items-center  '>
            <div className='h-7 w-8'>
               <img src={ISPIcon} alt='logo' />
            </div>
            <h2 className='hide-SmScr  mx-5  flex-none  text-base  md:mr-10 lg:text-lg '>
               Internet Provider Master List
            </h2>
         </div>

         <div className='float-right mr-3 flex min-w-max items-center gap-4 py-2 '>
            <SearchComp names={names} />
            <ButtonImgComp
               imgSrc={addListSvg}
               name='AddList'
               onclick={onclickHandler}
               classData='w-7 h-7  bg-blue-700 '
            />
            <ButtonImgComp
               imgSrc={refreshSvg}
               name='Refrech'
               onclick={onclickHandler}
               classData='w-7 h-7  bg-blue-700 '
            />
         </div>
      </div>
   );
};

export default React.memo(AppHeader);
