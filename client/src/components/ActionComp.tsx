import React from 'react';
import { ListContext } from '../App';

import ButtonImgComp from './ButtonComp/ButtonImgComp';
import deleteSvg from '../img/delete.svg';
import updateSvg from '../img/update.svg';
import checkboxSvg from '../img/checkbox.svg';
type ButtonProps = {
      keys: string[];
};
const ActionComp = ({ keys }: ButtonProps) => {
      const act = React.useContext(ListContext);
      const { data, setData } = act;
      const buttonStyle = 'w-6  bg-teal-600 mr-3 rounded-md hover:border-2 border-x-lime-600 '

      const onclickHandler = (name: string) => {
            switch (name) {
                  case 'Delete List': {
                        setData({
                              ...data,
                              key: keys,
                              showComp: 'showDeleteComp',
                        });
                        break;
                  }
                  case 'Update List': {
                        setData({
                              ...data,
                              key: keys,
                              showComp: 'showUpdateComp',
                        });
                        break;
                  }
                  case 'Update Pay': {
                       
                        setData({
                              ...data,
                              key: keys,
                              showComp: 'showUpdatePayComp',
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
            <div className='flex py-1 '>
                  {/* delete Icon as Button*/}
                  <ButtonImgComp
                        imgSrc={deleteSvg}
                        name='Delete List'
                        onclick={onclickHandler}
                        classData={buttonStyle}
                  />
                  <ButtonImgComp
                        imgSrc={updateSvg}
                        name='Update List'
                        onclick={onclickHandler}
                        classData={buttonStyle}
                  />

                  <ButtonImgComp
                        imgSrc={checkboxSvg}
                        name='Update Pay'
                        onclick={onclickHandler}
                        classData={buttonStyle}
                  />

                  {/* update Icon as Button*/}
            </div>
      );
};

export default ActionComp;
