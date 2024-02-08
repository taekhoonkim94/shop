import { useState } from 'react';
import data from '../data/data';
import Header from '../components/common/Header';
import ProductList from '../components/product/ProductList';

const Exhibition = () => {
    const [shoes] = useState(data);

    return (
        <>
            <Header />

            <div className="main-bg"></div>

            <div className="container">
                <div className="row">
                    <ProductList shoes={shoes} />
                </div>
            </div>
        </>
    )
}

export default Exhibition;