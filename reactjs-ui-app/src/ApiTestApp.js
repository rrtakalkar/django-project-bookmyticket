import React from 'react';
import React, { useState, useEffect } from 'react'
import './App.css';


function ApiTestApp() {
  const [data, setData] = useState(null);
  const[error, setError] = useState(null);
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/v1/countries/',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token 3e42df3a32afd3c0b8161a69275ee20b04eaa5c2',
          },
        });
        const data = await response.json();
        setData(data);
      } catch(error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <div>
      {data['results'].map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default ApiTestApp;
