import { useEffect, useState } from "react";
import axios from 'axios';

const useFetchRecords = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    setLoading(true);
    axios.get('records/').then((resp) => {
      setData(resp);
      setLoading(false);
    });
  }, []);

  return { data, loading, error };
};

export default useFetchRecords;
