import React from 'react';

const RefreshIcon = () => {
      return (
            <svg
                  // className='border'

                  xmlns='http://www.w3.org/2000/svg'
                  height='40'
                  width='40'
                  viewBox='-10 -10 65 65'
            >
                  <path
                        fill='orange'
                        d='M24 40q-6.65 0-11.325-4.675Q8 30.65 8 24q0-6.65 4.675-11.325Q17.35 8 24 8q4.25 0 7.45 1.725T37 14.45V8h3v12.7H27.3v-3h8.4q-1.9-3-4.85-4.85Q27.9 11 24 11q-5.45 0-9.225 3.775Q11 18.55 11 24q0 5.45 3.775 9.225Q18.55 37 24 37q4.15 0 7.6-2.375 3.45-2.375 4.8-6.275h3.1q-1.45 5.25-5.75 8.45Q29.45 40 24 40Z'
                  />
            </svg>
      );
};

export default React.memo(RefreshIcon);