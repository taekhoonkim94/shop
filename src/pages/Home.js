import ProductList from '../components/product/ProductList';

const Home = ({
    shoes,
    setShoes
}) => {

    return (
        <>
            <div className="main-bg"></div>

            <div className="container">
                <div className="row">
                    <ProductList shoes={shoes} setShoes={setShoes} />
                </div>
            </div>
        </>
    )
}

export default Home;