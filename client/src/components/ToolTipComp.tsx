type Props = {
   name: string;
   posClass?: string;
};
const ToolTipComp = ({ name, posClass }: Props) => {
   return (
      <div
         className={`${posClass}  pointer-events-none absolute z-50 max-h-fit min-h-fit min-w-fit max-w-fit content-center rounded-md bg-violet-600 py-1.5 pr-3 pl-2 text-center text-xs text-white opacity-0 transition-opacity group-hover:opacity-100   `}
      >
         {name}

         <div className='pointer-events-none absolute top-2 -right-1 z-50  h-3 w-3 rotate-45 bg-violet-600  '></div>
      </div>
   );
};

export default ToolTipComp;
