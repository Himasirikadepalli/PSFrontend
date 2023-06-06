import React, { useEffect, useState } from 'react';
import axios from 'axios';
  
function ResultPage({ searchQuery }) {
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(
          `https://your-backend-url.com/search?q=${searchQuery}`
        );
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    };
  
    if (searchQuery) {
      fetchResults();
    }
  }, [searchQuery]);
  
  return (
 <div className="mb-4">
      <h1 className="text-center">Search Results</h1>
      {results.map((result) => (
        <div className="result" key={result.id}>
          <h2>{result.title}</h2>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
}
  
export default ResultPage;
