import ProductList from '../components/product/ProductList';

const Home = ({
    shoes
}) => {

    return (
        <>
            <div className="main-bg"></div>

            <div className="container">
                <div className="row">
                    <ProductList shoes={shoes} />
                </div>
            </div>
        </>
    )
}

export default Home;