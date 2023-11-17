import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import { Article } from './components/Article';
import { AboutSection, HomeSection } from './components/Section';
import Footer from './components/Footer';

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
        <Route path="/" element={<HomeSection articles={articles} setArticles={setArticles} />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/article/:id" element={<Article articles={articles} setArticles={setArticles}/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
