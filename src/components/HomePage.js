import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles data from the backend API
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://localhost:7230/api/Home'); // Replace with your backend API endpoint
        setArticles(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="homepage">
      <h1>Project Showcase</h1>
      <div className="articles">
        {articles.map((article) => (
          <div key={article.id} className="article">
            <h2>{article.title}</h2>
            <p>{article.authors.join(', ')}</p>
            <p>{article.abstract}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;