import './App.css';
import CatsList from './components/catsList/CatsList';
import Header from './components/header/Header';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import About from './components/about/About';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/about' element={<About />} />
                    <Route path='/cats' element={<CatsList />} />
                    <Route path='*' element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

