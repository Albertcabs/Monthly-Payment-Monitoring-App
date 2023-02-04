import React, { useEffect, useState } from 'react';
import FormComp from './FormComp';
import AppHeader from './AppHeader';
import DeleteComp from './DeleteComp';
import UpdatePaymentComp from './UpdatePaymentComp';
import useAxios from '../hooks/useAxios';
import useWinSize from '../hooks/useWinSize';
import LoadingComp from './LoadingComp';
import ErrorMessage from './ErrorMessage';
import TableHead from './TableHead';
import TableBody from './TableBody';
import ListComp from './ListComp';
import copyRight from '../img/copyright.svg';

interface ActType {
   listHead: string[];
   customerName: string[];
   key: any[];
   showComp: string;
   reload: boolean;
   indexName: number;
   newCustomer: string;
   activeSearch: boolean;
}

const initState = {
   listHead: [''],
   customerName: [''],
   key: [],
   showComp: 'none',
   reload: false,
   indexName: -0,
   newCustomer: '',
   activeSearch: false,
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
   const [data, setData] = React.useState<ActType>(initState);

   const showComp = data.showComp;

   const { headH, footerH, bodyH, tRowHeight, tHeadHeight, winWidth } =
      useWinSize();

   const { errMessage, loading, resBody, resHead, names, dueDate } = useAxios(
      data.reload
   );
   const search: boolean[] = React.useMemo(() => {
      return new Array(resBody.length).fill(false);
   }, [resBody.length]);

   useEffect(() => {
      setData({ ...data, reload: false });
   }, [resBody]);

   return (
      <ListContext.Provider value={{ data, setData }}>
         <div
            className={`h-screen   bg-slate-400 @container dark:bg-slate-500 `}
         >
            <div className='width-class dark:border-border-600  relative h-full flex-row border border-slate-400 '>
               <AppHeader headH={headH} names={names} />
               <ListComp
                  listBody={resBody}
                  listHead={resHead}
                  lBodyHeight={bodyH}
                  search={search}
                  dueDate={dueDate}
               />
               <TableHead tHead={resHead} tHeadHeight={tHeadHeight} />
               <TableBody
                  tBody={resBody}
                  search={search}
                  dueDate={dueDate}
                  tBodyHeight={bodyH}
                  tRowHeight={tRowHeight}
               />
               {showComp === 'showForm' || showComp === 'showFormUpdate' ? (
                  <FormComp resHead={resHead} />
               ) : null}
               {showComp === 'showDelete' ? (
                  <DeleteComp resHead={resHead} />
               ) : null}
               {showComp === 'showUpdate' ? <UpdatePaymentComp /> : null}
               {loading ? <LoadingComp /> : null}
               {errMessage! ? <ErrorMessage /> : null}

               <footer
                  style={{ height: `${footerH + 'px'}` }}
                  className='absolute -bottom-1 z-20  flex   w-full flex-row bg-green-800 '
               >
                  <div className='my-auto ml-3 flex h-5  flex-row'>
                     <img src={copyRight} alt='copyRight' />
                     <h6 className=' my-auto ml-1 text-xs text-slate-400'>
                        2023 All Rights Reserved
                     </h6>
                  </div>
               </footer>
            </div>
         </div>
      </ListContext.Provider>
   );
}

export default App;
