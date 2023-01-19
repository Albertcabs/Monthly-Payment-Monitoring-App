type ArrowProps = {
   topP: number;
};
const ArrowIndicator = ({ topP }: ArrowProps) => {
   let topPos = 0;
   if (topP === 0) {
      topPos = 45;
   } else {
      topPos = topP + 60;
   }

   return (
      <div
         style={{ top: `${topPos + 'px'}` }}
         className={`absolute flex h-8 border-b border-green-500 sm:left-[26px] sm:w-[500px]  md:left-[30px]  md:w-[615px] lg:left-[38px] lg:w-[740px]`}
      >
         <svg
            className='absolute -top-2 sm:-left-5 md:-left-5 lg:-left-5'
            fill='yellow'
            xmlns='http://www.w3.org/2000/svg'
            height='48'
            width='48'
         >
            <path d='M20 34V14l10 10Z' />
         </svg>
      </div>
   );
};

export default ArrowIndicator;
