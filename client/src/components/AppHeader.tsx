import React from 'react';
import { ListContext } from './App';
import SearchComp from './search/SearchComp';
import ButtonImgComp from './ButtonComp/ButtonImgComp';
import IconIsp from './IconIspComp';
import refreshSvg from '../img/refresh.svg';
import addListSvg from '../img/addList.svg';

type AppProps = {
   headH: number;
};
const AppHeader = ({ headH }: AppProps) => {
   const { data, setData } = React.useContext(ListContext);

   const onclickHandler = (name: string) => {
      switch (name) {
         case 'AddList': {
            setData({ ...data, showComp: 'showForm' });
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
         style={{ height: `${headH + 'px'}` }}
         className=' flex h-full  w-full  items-center justify-between bg-green-700'
      >
         <div className='flex items-center '>
            <IconIsp />
            <h2 className='mr-5 hidden flex-none  text-yellow-50 sm:inline-block sm:text-sm md:mr-10 md:inline-block md:text-base  lg:inline-block lg:text-lg  '>
               Internet Provider Master List
            </h2>
         </div>

         <div className='float-right mr-px flex items-center gap-2 py-2 sm:gap-3 md:mr-3 md:gap-4 lg:mr-4  lg:gap-5 '>
            <SearchComp />
            <ButtonImgComp
               imgSrc={addListSvg}
               name='AddList'
               onclick={onclickHandler}
               classData='size-btn'
            />
            <ButtonImgComp
               imgSrc={refreshSvg}
               name='Refrech'
               onclick={onclickHandler}
               classData='size-btn'
            />
         </div>
      </div>
   );
};

export default React.memo(AppHeader);
