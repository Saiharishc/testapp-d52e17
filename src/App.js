import React, { useState } from 'react';

function App() {
  const [getResponse, setGetResponse] = useState(null);
  const [postResponse, setPostResponse] = useState(null);

  const handleGetTest = async () => {
    const response = await fetch('/test');
    const data = await response.json();
    setGetResponse(data);
  };

  const handlePostTest = async () => {
    const response = await fetch('/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}), // Empty body for simplicity
    });
    const data = await response.json();
    setPostResponse(data);
  };

  return (
    <div className="App">
      <h1>TestApp</h1>
      <button onClick={handleGetTest}>Test GET /test</button>
      {getResponse && <p>GET Response: {JSON.stringify(getResponse)}</p>}

      <button onClick={handlePostTest}>Test POST /test</button>
      {postResponse && <p>POST Response: {JSON.stringify(postResponse)}</p>}
    </div>
  );
}

export default App;
