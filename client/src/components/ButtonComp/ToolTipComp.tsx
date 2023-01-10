type Props = {
      name: string;
      top: string;
      left: string;
      width: string;
};
const ToolTipComp = ({ name, top, left, width }: Props) => {
      const divStyle =
            'absolute block pointer-events-none rounded-md opacity-0 transition-opacity group-hover:opacity-100 h-7 ';
      return (
            <div
                  className={`${divStyle} ${top} ${left} ${width} bg-violet-600 text-xs text-center text-white py-1.5 z-50  `}
            >
                 {name}
                  <div className='pointer-events-none bg-violet-600 w-3 h-3 rotate-45 mx-auto z-50'></div>
            </div>
      );
};

export default ToolTipComp;
