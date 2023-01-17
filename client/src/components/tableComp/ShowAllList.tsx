import React from 'react';
import TableComp from './TableComp';
import LoadingComp from '../LoadingComp';
import useAxios from '../../hooks/useAxios';
import { ListContext } from '../App';
import ListComp from './ListComp';

const ShowAllList = () => {
      const list = React.useContext(ListContext);
      const { data, setData } = list;

      // custome hook useAxios and read data from server
      const { errMessage, loading, resBody, resHead } = useAxios();

      // read and copy the customer name
      const { names, dueDate } = React.useMemo(() => {
            const getDay = new Date().getDate();
            const names: any[] = [];
            const dueDate: boolean[] = [];

            resBody.forEach((val) => {
                  names.push(val[1]);
                  dueDate.push(
                        Number(val[3].slice(3, 6) < getDay) ? false : true
                  );
            });
            return { names, dueDate };
      }, [resBody]);

      // load Head
      React.useEffect(() => {
            setData({ ...data, listHead: resHead, customerName: names });
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [resBody, names]);

      const DisplayData = React.useCallback(() => {
            return (
                  <div>
                        <div className='block sm:hidden md:hidden lg:hidden '>
                              <ListComp
                                    listBody={resBody}
                                    listHead={resHead}
                                    listDue={dueDate}
                              />
                        </div>
                        <div className='hidden sm:block md:block lg:block'>
                              <TableComp
                                    tableBody={resBody}
                                    tableHead={resHead}
                                    listDue={dueDate}
                              />
                        </div>
                  </div>
            );
      }, [resBody, resHead]);

      return (
            <div className='rtl-content z-0 h-full w-full overflow-y-auto overflow-x-hidden'>
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
