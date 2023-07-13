import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [backendData, setBackendData] = useState('')

  useEffect(() => {
    axios.get(`/api`)
      .then(response => {
        setBackendData(response.data);
      })
  })

  return (
    <div>
      {(typeof backendData === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        <p>{backendData}</p>
      )}
    </div>
  )
}

export default App
