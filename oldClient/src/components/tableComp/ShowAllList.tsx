import React from 'react';
import ListBodyComp from './ListBodyComp';
import LoadingComp from '../LoadingComp';
import useAxios from '../../hooks/useAxios';
import { ListContext } from '../../App';


const ShowAllList = () => {
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

      return (
            <div className='w-full overflow-y-scroll overflow-x-hidden '>
                  {!loading && !errMessage && resBody.length ? (
                        <DisplayData />
                  ) : null}

                  {loading && <LoadingComp />}

                  {!loading && errMessage && (
                        <p className='massegeClass '>{errMessage}</p>
                  )}

                  {!loading && !errMessage && !resBody.length && (
                        <h1 className='massegeClass '>No List to display </h1>
                  )}
            </div>
      );
};

export default ShowAllList;
