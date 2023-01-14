import React, { useState } from 'react';
import FormComp from './FormComp';
import ShowAllList from './tableComp/ShowAllList';
import AppHeader from './AppHeader';
import DeleteComp from './DeleteComp';
import UpdatePaymentComp from './UpdatePaymentComp';

interface ActType {
      listHead: string[];
      listBody: any[];
      key: string[];
      showComp: string;
      reload: boolean;
      check: boolean;
}
const initState = {
      listHead: [''],
      listBody: [],
      key: [''],
      showComp: 'none',
      reload: false,
      check: false,
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
      return (
            <ListContext.Provider
                  value={{
                        data,
                        setData,
                  }}
            >
                  <div className='  h-full w-full bg-slate-900'>
                        <div className='h-full bg-slate-800 lg:w-[950px] md:w-[750px] sm:w-[650px] mx-auto '>
                              <AppHeader />

                              <ShowAllList />

                              {data.showComp === 'showFormComp' ||
                              data.showComp === 'showUpdateComp' ? (
                                    <FormComp />
                              ) : null}
                              {data.showComp === 'showDeleteComp' ? (
                                    <DeleteComp />
                              ) : null}
                              {data.showComp === 'showUpdatePayComp' ? (
                                    <UpdatePaymentComp />
                              ) : null}

                              <div className='sticky bottom-0 h-10 w-full bg-green-800 z-30  '>
                                    <h3> Footer</h3>
                              </div>
                        </div>
                  </div>
            </ListContext.Provider>
      );
}

export default App;
