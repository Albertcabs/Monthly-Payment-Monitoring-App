import ToolTipComp from './ToolTipComp';

type ButtonProps = {
      imgSrc: string;
      name: string;
      onclick: (name: string) => void;
      classData: string;
     
};
const ButtonImgComp = ({ imgSrc, onclick, name ,classData}: ButtonProps) => {
      return (
            <div
                  className={`group relative block ${classData}   item-center`}
                  onClick={() => {
                        onclick(name);
                  }}
            >
                  <img
                        className=' mx-auto my-auto p-1 '
                        src={imgSrc}
                        alt={name}
                  />

                  <ToolTipComp
                        name={name}
                        top='-top-8'
                        left='-left-6'
                        width='w-20'
                  />
            </div>
      );
};

export default ButtonImgComp;
