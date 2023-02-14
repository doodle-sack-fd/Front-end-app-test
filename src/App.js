import './App.css';
import CatsList from './components/catsList/CatsList';
import Header from './components/header/Header';

import { Routes, Route } from 'react-router-dom'
import About from './components/about/About';


function App() {
    return (
        <div className="App">
                <Header />
                <Routes>
                    <Route path='/about' element={<About />} />
                    <Route path='/cats' element={<CatsList />} />
                    <Route path='*' element={<About />} />
                </Routes>
        </div>
    );
}

export default App;

