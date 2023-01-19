import React, { useState } from 'react';
import FormComp from './FormComp';

import AppHeader from './AppHeader';
import DeleteComp from './DeleteComp';
import UpdatePaymentComp from './UpdatePaymentComp';
import useAxios from '../hooks/useAxios';
import useWinSize from '../hooks/useWinSize';
import LoadingComp from './LoadingComp';
import ErrorMessage from './ErrorMessage';
import TableHead from './tableComp/TableHead';
import TableBody from './tableComp/TableBody';

interface ActType {
   listHead: string[];
   customerName: string[];
   key: string[];
   showComp: string;
   reload: boolean;
   indexName: number;
   newCustomer: string;
   activeSearch: boolean;
   showIndicator: boolean;
}

const initState = {
   listHead: [''],
   customerName: [''],
   key: [''],
   showComp: 'none',
   reload: false,
   indexName: -0,
   newCustomer: '',
   activeSearch: false,
   showIndicator: false,
};

type ContextType = {
   data: ActType;
   setData: React.Dispatch<React.SetStateAction<ActType>>;
};

export const ListContext = React.createContext<ContextType>({
   data: initState,
   setData: () => undefined,
});

function App() {
   const [data, setData] = useState<ActType>(initState);
   const showComp = data.showComp;
   const { headH, footerH, tBodyHeight, tRowHeight, tHeadHeight, winWidth } =
      useWinSize();
   const { errMessage, loading, resBody, resHead } = useAxios();

   return (
      <ListContext.Provider
         value={{
            data,
            setData,
         }}
      >
         <div className={`width-class relative  mx-auto h-screen flex-row `}>
            <AppHeader headH={headH} />

            <TableHead tHead={resHead} tHeadHeight={tHeadHeight} />
            <TableBody
               tBody={resBody}
               tBodyHeight={tBodyHeight}
               tRowHeight={tRowHeight}
            />
            {showComp === 'showForm' ? <FormComp /> : null}
            {showComp === 'showDelete' ? <DeleteComp /> : null}
            {showComp === 'showUpdate' ? <UpdatePaymentComp /> : null}
            {loading ? <LoadingComp /> : null}
            {errMessage! ? <ErrorMessage /> : null}

            <footer
               style={{ height: `${footerH + 'px'}` }}
               className=' z-20 w-full dark:bg-green-800   '
            >
               <h3> Footer</h3>
            </footer>
         </div>
      </ListContext.Provider>
   );
}

export default App;
