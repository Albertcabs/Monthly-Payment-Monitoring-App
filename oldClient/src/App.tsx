import React, { useState} from 'react';
import FormComp from './components/FormComp';
import ShowAllList from './components/tableComp/ShowAllList';
import AppHeader from './components/AppHeader';
import DeleteComp from './components/DeleteComp';
import UpdatePaymentComp from './components/UpdatePaymentComp';

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
                  <div className='flex-row bg-slate-800 lg:w-950 md:w-740 sm:w-650 mx-auto '>
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

                        <div className=' botton-0 h-12 w-full bg-green-800  '>
                              <h3> Footer</h3>
                        </div>
                  </div>
            </ListContext.Provider>
      );
}

export default App;
