import React, { useState, useEffect } from 'react';
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
      const [getHeight, setGetHeight] = useState<number[]>([]);

      useEffect(() => {
            const { innerHeight } = window;
            const headerH = Math.floor(innerHeight * 0.08);
            const bodyH = Math.floor(innerHeight * 0.92);
            const footH = Math.floor(innerHeight * 0.04);
            setGetHeight([headerH, bodyH, footH]);
      }, []);

      return (
            <ListContext.Provider
                  value={{
                        data,
                        setData,
                  }}
            >
                  <div className='widthClass relative  flex-col  h-full my-auto '>
                        <header
                              style={{ height: getHeight[0] }}
                              className='widthClass absolute '
                        >
                              <AppHeader />
                        </header>
                        <main
                              style={{ height: getHeight[1], top:`${getHeight[0]}px`}}
                              className='widthClass absolute bg-slate-800'
                        >
                              <ShowAllList tableH={getHeight[1]} />
                        </main>

                        <footer
                              style={{ height: getHeight[2] }}
                              id='footer'
                              className='widthClass h-[500] fixed bottom-0 bg-green-800  '
                        >
                              Footer
                        </footer>

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
                  </div>
            </ListContext.Provider>
      );
}

export default App;
