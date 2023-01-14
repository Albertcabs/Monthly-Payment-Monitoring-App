type Props = {
      name: string;
      posClass?: string;
};
const ToolTipComp = ({ name, posClass }: Props) => {
      return (
            <div
                  className={`${posClass}  bg-violet-600 text-xs text-center text-white py-1.5 pr-3 pl-2 z-50 absolute content-center pointer-events-none rounded-md opacity-0 transition-opacity group-hover:opacity-100 min-h-fit min-w-fit max-h-fit max-w-fit   `}
            >
                  {name}

                  <div className='absolute top-2 -right-1 pointer-events-none bg-violet-600  w-3 h-3 rotate-45 z-50  '></div>
            </div>
      );
};

export default ToolTipComp;
