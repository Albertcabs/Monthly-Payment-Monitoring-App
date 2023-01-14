import React from 'react';
import ToolTipComp from './ToolTipComp';
import paymentSvg from '../../img/payment.svg';
import priceSvg from '../../img/price.svg';
type IconProps = {
      imgIndex: number;
      name: string;
};

const IconMessageComp = ({ imgIndex, name }: IconProps) => {
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
            <>
                  {imgIndex < 4 ? (
                        <span className='inline-block lg:px-3 md:px-2.5 sm:px-1.5 py-1'>
                              {name}
                        </span>
                  ) : null}
                  {imgIndex >= 4 ? (
                        <div className=' flex justify-center'>
                              <span className='hidden lg:block md:inline-block   lg:px-3 md:px-2.5  py-1'>
                                    {name}
                              </span>
                              <div
                                    className={`hidden sm:block group relative bg-slate-700 rounded-md`}
                              >                                   
                                    <img
                                          className='w-6 h-6 p-1 '
                                          src={imgSrc}
                                          alt={name}
                                    />
                                    <ToolTipComp name={name} posClass={`-top-0.5 ${imgIndex===4?'-left-16':'-left-10'} `} />
                              </div>
                        </div>
                  ) : null}
            </>
      );
};

export default React.memo(IconMessageComp);
