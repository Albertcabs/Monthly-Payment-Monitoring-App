import React, { useContext } from 'react';
import { ListContext } from './App';
type ArrowProps = {
      topP: number;
};
const ArrowIndicator = ({ topP }: ArrowProps) => {
      const { data } = useContext(ListContext);
      const topPos = React.useMemo(() => {
            let indexRow = 0;
            if (data.indexName > 0) indexRow = 38 * data.indexName;
            return topP - 76 - indexRow;
      }, [topP, data.indexName]);
      return (
            <div
                  style={{ bottom: `${topPos + 'px'}` }}
                  className={`absolute -left-4 h-10 w-10`}
            >
                  <svg
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
