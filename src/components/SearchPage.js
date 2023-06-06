import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../Images/Logo.jpg';
  
function SearchPage({ onSearch }) {
  const [query, setQuery] = useState('');
  const history = useHistory();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    history.push('/results');
  };
  
  return (
    <div className="d-flex justify-content-center mb-4 align-items-center vh-100" >
      <form onSubmit={handleSubmit} className="form-inline">
      <div className='Logo' style={{ width: '100%' }}>
        <img src= {Logo} alt="Logo" style={{maxwidth: '100%', height:'400px',marginTop:'80px', marginBottom:'100px'}} />
      </div>
        <div className="input-group">
          <input
            type="text"
            className="form-control form-control-lg"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            style={{ height: '60px' ,width: '600px', fontSize: '20px', marginBottom:'100px' }} 
           
          />
          <div className="input-group-append" >
            <button type="submit" className="btn btn-primary btn-lg " >Search </button>
          </div>
        </div>
      </form>
    </div>
  );
}
  
export default SearchPage;
