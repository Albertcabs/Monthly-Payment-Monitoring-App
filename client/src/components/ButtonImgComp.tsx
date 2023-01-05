import React from 'react';


type ButtonProps = {
      imgSrc: string;
      name: string;
      onclick: (name: string) => void;
      wide: number;
};
const ButtonImgComp = ({ imgSrc, onclick, name, wide }: ButtonProps) => {
      return (
            <div
                  className={`group relative w-${wide} h-${wide} mr-3 bg-slate-500 w-12 h-11 rounded-md hover:border-2 border-x-lime-600 `}
                  onClick={() => {
                        onclick(name);
                  }}
            >
                  <img
                        className='block mx-auto my-auto p-2 '
                        src={imgSrc}
                        alt={name}
                  />

                  <span className='pointer-events-none absolute -top-7 -left-3 w-16 text-center  text-xs py-1 items-center border border-slate-500 bg-slate-100 rounded-md  opacity-0 transition-opacity group-hover:opacity-100'>
                        {name}
                  </span>
            </div>
      );
};

export default ButtonImgComp;
