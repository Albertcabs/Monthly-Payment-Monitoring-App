import React, { useState } from 'react';
import FormComp from './FormComp';
import ShowAllList from './tableComp/ShowAllList';
import AppHeader from './AppHeader';
import DeleteComp from './DeleteComp';
import UpdatePaymentComp from './UpdatePaymentComp';
import ArrowIndicator from './ArrowIndicator';
import useWinSize from '../hooks/useWinSize';

interface ActType {
      listHead: string[];
      listBody: any[];
      customerName: string[];
      key: string[];
      showComp: string;
      reload: boolean;
      check: boolean;
      indexName: number;
}
const initState = {
      listHead: [''],
      listBody: [],
      customerName: [''],
      key: [''],
      showComp: 'none',
      reload: false,
      check: false,
      indexName: 0,
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
      const { headH, footerH, bodyH, winWidth } = useWinSize();

      return (
            <ListContext.Provider
                  value={{
                        data,
                        setData,
                  }}
            >
                  <div
                        className={`width-class relative mx-auto h-screen flex-row `}
                  >
                        <header
                              style={{ height: `${headH + 'px'}` }}
                              className=' dark:bg-green-800'
                        >
                              <AppHeader />
                        </header>

                        <main
                              style={{ height: `${bodyH + 'px'}` }}
                              className=' relative dark:bg-slate-900 '
                        >
                              <ShowAllList />
                              <ArrowIndicator topP={bodyH} />
                              {data.showComp === 'showForm' ? (
                                    <FormComp />
                              ) : null}
                              {data.showComp === 'showDelete' ? (
                                    <DeleteComp />
                              ) : null}
                              {data.showComp === 'showUpdate' ? (
                                    <UpdatePaymentComp />
                              ) : null}
                        </main>

                        <footer
                              style={{ height: `${footerH + 'px'}` }}
                              className=' dark:bg-green-800    '
                        >
                              <h3> Footer</h3>
                        </footer>
                  </div>
            </ListContext.Provider>
      );
}

export default App;
