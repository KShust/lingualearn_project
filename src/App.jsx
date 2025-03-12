import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Minigames from './pages/Minigames';
import Wordlist from './pages/Wordlist';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

// Layout component to wrap the content
const Layout = ({ children }) => {
  return (
    <div className="h-dvh bg-yellow-50">
      <Header className="relative z-10" /> {/* Added relative and z-10 */}
      <div className="flex">
        <Sidebar />
        <main className="flex-1 relative z-0"> {/* Added relative and z-0 */}
          {children}
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="dictionary" element={<Wordlist />} />
              <Route path="favorites" element={<div>Favorites Page</div>} />
              <Route path="games" element={<Minigames />} />
              <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;