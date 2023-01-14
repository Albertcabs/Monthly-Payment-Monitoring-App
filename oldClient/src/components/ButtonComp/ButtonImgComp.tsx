import ToolTipComp from './ToolTipComp';

type ButtonProps = {
      imgSrc: string;
      name: string;
      onclick: (name: string) => void;
      classData: string;
};
const ButtonImgComp = ({ imgSrc, onclick, name, classData }: ButtonProps) => {
      return (
            <div
                  className={`group relative block ${classData}   item-center rounded-md  hover:border-2 border-x-lime-600 p-0.5 `}
                  onClick={() => {
                        onclick(name);
                  }}
            >
                  <img
                       
                        src={imgSrc}
                        alt={name}
                  />

                  <ToolTipComp name={name} posClass='-top-1 -left-20' />
            </div>
      );
};

export default ButtonImgComp;
