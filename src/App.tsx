import type { Component } from 'solid-js';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Route, Router, Routes } from '@solidjs/router';
import Cursor from './components/Cursor';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Upload from './pages/Upload';

const App: Component = () => {
  return (
    <>
      <Cursor />

      <Router>
        <Routes>
          <Route path="/" component={Navbar}>
            <Route path="/" component={Home} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/about" component={About} />
          </Route>
          <Route path="/upload" component={Upload} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
