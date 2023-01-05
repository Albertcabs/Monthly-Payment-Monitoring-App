import React from 'react';
import ListHeadComp from './ListHeadComp';
import TableBodyComp from './ListBodyComp';
import LoadingComp from '../LoadingComp';
import { ListContext } from '../../App';
import useAxios from '../../hooks/useAxios';

const ShowAllList = () => {
      const load = React.useContext(ListContext);
      const { data, setData } = load;

      // costume hook useAxios
      const { header, body, daysIn, errMessage, loading } = useAxios();
      React.useEffect(() => {
            setData({ ...data, head: header });
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [header]);

      const DisplayData = React.useCallback(() => {
            return <TableBodyComp tableBody={body} dayIn={daysIn} />;
      }, [body, daysIn]);

      const message =
            'bg-slate-600 rounded-full text-center py-2 mt-5 text-red-500 border-emerald-500 border w-60 mx-auto';

      return (
            <div className='relative my-3 mx-2 border-2 border-slate-500 '>
                  <div className='w-full text-sm text-left text-gray-500 dark:text-gray-400 border-separate border-spacing-px '>
                        <ListHeadComp head={header} />
                        {!loading && !errMessage && body.length ? (
                              <DisplayData />
                        ) : null}
                  </div>

                  {loading && <LoadingComp />}

                  {!loading && errMessage && (
                        <p className={message}>{errMessage}</p>
                  )}

                  {!loading && !errMessage && !body.length && (
                        <h1 className={message}>No List to display </h1>
                  )}

                
                 
            </div>
      );
};

export default ShowAllList;
