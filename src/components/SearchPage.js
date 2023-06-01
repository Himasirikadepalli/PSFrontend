import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
  
function SearchPage({ onSearch }) {
  const [query, setQuery] = useState('');
  const history = useHistory();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    history.push('/results');
  };
  
  return (
    <div className="d-flex justify-content-center mb-4">
      <form onSubmit={handleSubmit} className="form-inline">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
}
  
export default SearchPage;