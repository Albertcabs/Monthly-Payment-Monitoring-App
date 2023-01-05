import React, { useState } from 'react';
import FormComp from './components/FormComp';
import ShowAllList from './components/tableComp/ShowAllList';
import AppHeader from './components/AppHeader';
import DeleteComp from './components/DeleteComp';

interface ActType {
      head: string[];
      key: string[];
      showComp: string;
      reload: boolean;
      check: boolean;
}
const initState = {
      head: [''],
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
                  <div className='relative min-w-max lg:w-960 md:w-860 min-h-screen mx-auto my-5 border border-blue-700 mt-5 rounded-t-xl'>
                        <AppHeader />

                        <ShowAllList />

                        {data.showComp === 'showFormComp'|| data.showComp === 'showUpdateComp' ? <FormComp /> : null}

                        {data.showComp === 'showDeleteComp' ? (
                              <DeleteComp />
                        ) : null}

                     
                  </div>
            </ListContext.Provider>
      );
}

export default App;
