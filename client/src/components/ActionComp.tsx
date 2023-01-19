import React from 'react';
import { ListContext } from './App';
import ButtonImgComp from './ButtonComp/ButtonImgComp';
import deleteSvg from '../img/delete.svg';
import updateSvg from '../img/update.svg';
import paidSvg from '../img/paid.svg';

type ButtonProps = {
   keys: string[];
};
const ActionComp = ({ keys }: ButtonProps) => {
   const act = React.useContext(ListContext);
   const { data, setData } = act;

   const onclickHandler = (name: string) => {
      switch (name) {
         case 'Delete List': {
            setData({
               ...data,
               key: keys,
               showComp: 'showDelete',
            });
            break;
         }
         case 'Update List': {
            setData({
               ...data,
               key: keys,
               showComp: 'showForm',
            });
            break;
         }
         case 'Update Pay': {
            setData({
               ...data,
               key: keys,
               showComp: 'showUpdate',
            });
            break;
         }

         default: {
            console.log('no butto click');
            break;
         }
      }
   };

   return (
      <>
         <div className='flex flex-grow justify-evenly'>
            {/* delete Icon as Button*/}
            <ButtonImgComp
               imgSrc={deleteSvg}
               name='Delete List'
               onclick={onclickHandler}
               classData='w-6 h-6 '
            />

            <ButtonImgComp
               imgSrc={updateSvg}
               name='Update List'
               onclick={onclickHandler}
               classData='w-6 h-6 '
            />

            <ButtonImgComp
               imgSrc={paidSvg}
               name='Update Pay'
               onclick={onclickHandler}
               classData='w-6 h-6 '
            />

            {/* update Icon as Button*/}
         </div>
      </>
   );
};

export default ActionComp;
