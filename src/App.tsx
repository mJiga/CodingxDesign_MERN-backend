import './index.css'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './layouts/Layout';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout></Layout>} />
        <Route path="/search" element={<>Search Page</>} />
        <Route path="*" element={<Navigate to='/' /> } />
      </Routes>
    </Router>
  );
};

export default App
