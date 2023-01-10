import React from 'react';

import ListBodyComp from './ListBodyComp';
import LoadingComp from '../LoadingComp';
import useAxios from '../../hooks/useAxios';
import { ListContext } from '../../App';
import ListHeadComp from './ListHeadComp';
type Props = {
      tableH: number;
};
const ShowAllList = ({ tableH }: Props) => {
      const list = React.useContext(ListContext);
      const { data, setData } = list;

      // costume hook useAxios
      const { errMessage, loading, resBody, resHead } = useAxios();
      // load Head
      React.useEffect(() => {
            setData({ ...data, listHead: resHead });
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [resBody]);

      const DisplayData = React.useCallback(() => {
            // const newArr = resBody.sort((a, b) => {
            //       return Number(a[3].slice(3, 6)) - Number(b[3].slice(3, 6));
            // });
         
            return <ListBodyComp tableBody={resBody} />;
      }, [resBody]);

      const message =
            'bg-slate-600 rounded-full text-center py-2 mt-5 text-red-500 border-emerald-500 border w-60 mx-auto';

      return (
            <div id='body' className='withClass relative block '>
                  <ListHeadComp head={resHead} />

                  {!loading && !errMessage && resBody.length ? (
                        <DisplayData />
                  ) : null}

                  {loading && <LoadingComp />}

                  {!loading && errMessage && (
                        <p className={message}>{errMessage}</p>
                  )}

                  {!loading && !errMessage && !resBody.length && (
                        <h1 className={message}>No List to display </h1>
                  )}
            </div>
      );
};

export default ShowAllList;
