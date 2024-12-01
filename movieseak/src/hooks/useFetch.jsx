import { useEffect, useState } from 'react';

export const useFetch = (apipath, queryterm = "") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const key = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/${apipath}?api_key=${key}&query=${queryterm}`;

    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Error: ${res.status} - ${res.statusText}`);
        }
        const jsonData = await res.json();
        setData(jsonData.results || []);
        setError(null); 
      } catch (err) {
        setError(err.message);
        setData([]); 
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [apipath, queryterm]);

  return { data, loading, error };
};
