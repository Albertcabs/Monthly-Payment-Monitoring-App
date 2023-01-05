import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ListContext } from '../App';
const useAxios = () => {
      const load = useContext(ListContext);
      const { data, setData } = load;
      const [header, setHeader] = useState<string[]>([]);
      const [body, setBody] = useState<string[][]>([]);
      const [daysIn, setDaysIn] = useState<string[]>([]);
      const [errMessage, setErrMessage] = useState('');
      const [loading, setLoading] = useState(true);

      const fetchData = async () => {
            try {
                  const res = await axios.get('http://localhost:5050/');
                  const { header, body, dayInMonth } = res.data;
                  setHeader(header);
                  setBody(body);
                  setDaysIn(dayInMonth);
            } catch (err: any) {
                  setErrMessage(err.message);
            } finally {
                  setLoading(false);
                  setData({ ...data, reload: false });
            }
      };

      useEffect(() => {
            //let isMounted = true;
            const controller = new AbortController();
            // call the function
            fetchData();
            // useEffect cleanup function
            return () => controller.abort();
            // eslint-disable-next-line
      }, [data.reload]);

      return { header, body, daysIn, errMessage, loading };
};

export default useAxios;
