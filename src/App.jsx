import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import { useState, useEffect } from 'react';
import Home from './components/pages/Home'; 
import About from './components/pages/About'; 
import Error404 from './components/pages/Error404';
import Article from './components/pages/Article';
import Footer from './components/layout/Footer';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home articles={articles} />} />
        <Route path="/about" element={<About />} />
        <Route path="/article/:id" element={<Article articles={articles} />} />
        <Route path="*" element={<Error404 />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
