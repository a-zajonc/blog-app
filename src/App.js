import * as React from 'react'
import styles from './App.module.css';
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

function App() {

  return (
    <Router>
      <div className={styles.App}>
        <Navigation imgSrc="https://iconarchive.com/download/i86440/martin-berube/flat-animal/rabbit.ico" alt="Logo z Królikiem" />
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/articles' element={< ArticlesList />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
          <Route exact path='articles/:slug' element={< ArticlePage />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;


// {data ? <Article imgSrc={data.imgSrc} alt={data.alt} title={data.title} author={data.author} content={data.content} /> : <Spinner animation="border" variant="primary" className={styles.spinner} />
// }