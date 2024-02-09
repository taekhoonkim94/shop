import { Routes, Route } from 'react-router-dom';
import ROUTE from './routes/routes';
import Header from './components/common/Header';
import Home from './pages/Home';
import About from './pages/About';
import Member from './components/about/Member';
import Location from './components/about/Location';
import Detail from './pages/Detail';
import PageNotFound from './pages/PageNotFound';

import { useState } from 'react';
import data from './data/data';

function App() {
    const [shoes] = useState(data);
    
    return (
        <div className="App">
            <Header shoes={shoes} />
            <Routes>
                <Route path={ROUTE.HOME} element={<Home shoes={shoes} />} />
                <Route path={ROUTE.ABOUT} element={<About />}>
                    <Route path={ROUTE.MEMBER} element={<Member />} />
                    <Route path={ROUTE.LOCATION} element={<Location />} />
                </Route>
                <Route path={ROUTE.DETAIL} element={<Detail shoes={shoes} />} />
                <Route path={`*`} element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default App;
