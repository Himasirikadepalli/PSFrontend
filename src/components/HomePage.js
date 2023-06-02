import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';

const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles data from the backend API
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://localhost:7230/api/Auth/homepage'); // Replace with your backend API endpoint
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
          <Card key={article.id} className="article">
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>{article.authors.join(', ')}</Card.Text>
              <Card.Text>{article.abstract}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
