import axios from 'axios';
import { useState, useEffect } from 'react';

export const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsPending(true);
        const { data, status } = await axios.get(url);
        if (status === 200) {
          setData(data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsPending(false);
      }
    })();
  }, [url]);

  return { data, isPending, error };
};
