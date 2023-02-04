import React from 'react';
import ToolTipComp from './ToolTipComp';
import paymentSvg from '../img/payment.svg';
import priceSvg from '../img/price.svg';
type IconProps = {
   imgIndex: number;
   name: string;
   dueDate: number;
};

const IconMessageComp = ({ imgIndex, name, dueDate }: IconProps) => {
   const [imgSrc, setImgSrc] = React.useState('');

   React.useEffect(() => {
      if (imgIndex === 4) {
         setImgSrc(paymentSvg);
      } else if (imgIndex === 5) {
         setImgSrc(priceSvg);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <div>
         {imgIndex < 4 ? (
            <div
               className={`text-size-class inline-block rounded-full py-1 sm:px-1.5 md:px-2.5 lg:px-3  ${
                  imgIndex === 3
                     ? (dueDate === 1 && 'border border-red-500 text-white') ||
                       (dueDate === 2 && 'border border-green-500 text-white')
                     : ''
               }`}
            >
               {name}
            </div>
         ) : null}
         {imgIndex >= 4 ? (
            <div className='flex justify-center'>
               <div className='hidden py-1 md:inline-block   md:px-2.5 lg:block  lg:px-3  '>
                  {name}
               </div>
               <div
                  className={`group relative rounded-md bg-slate-500 sm:block md:hidden lg:hidden `}
               >
                  <img className='h-6 w-6 p-1' src={imgSrc} alt={name} />
                  <ToolTipComp
                     name={name}
                     posClass={`-top-0.5 ${
                        imgIndex === 4 ? '-left-16' : '-left-10'
                     } `}
                  />
               </div>
            </div>
         ) : null}
      </div>
   );
};

export default IconMessageComp;
