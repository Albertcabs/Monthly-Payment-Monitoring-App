import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListContext } from '../components/App';

const useAxios = () => {
   const { data, setData } = React.useContext(ListContext);

   const [resHead, setResHead] = useState<any[]>([]);
   const [resBody, setResBody] = useState<any[]>([]);
   const [errMessage, setErrMessage] = useState('');
   const [loading, setLoading] = useState(true);

   const fetchData = async () => {
      try {
         const res = await axios.get('http://localhost:5050/');
         const { head, body } = res.data;

         setResHead(head);
         setResBody(body);
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

   return { errMessage, loading, resHead, resBody };
};

export default useAxios;
