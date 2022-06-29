import * as React from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import { About } from './pages/About.js';
import { ArticlePage } from './pages/ArticlePage';
import { ArticlesList } from './pages/ArticlesList';
import { Contact } from './pages/Contact.js';
import { Home } from './pages/Home.js';
import { ChakraProvider } from '@chakra-ui/react'


function App() {

  return (
    <ChakraProvider>
      <Router>
        <Navigation imgSrc="https://whiterabbit.group/images/white-rabbit-logo-black.jpg" alt="Logo z Królikiem" />
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/articles' element={< ArticlesList />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
          <Route exact path='articles/:slug' element={< ArticlePage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  )
}

export default App;

