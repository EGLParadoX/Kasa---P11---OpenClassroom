import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { AboutSection, HomeSection } from './components/Section';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<AboutSection />} />
        <Route path="/" element={<HomeSection />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
