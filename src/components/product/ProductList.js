import { Link } from "react-router-dom";

const ProductList = ({
    shoes
}) => {

    return (
        <>
            {shoes.map(item => (
                <div key={item.id} className="col-md-4">
                    <Link to={`/detail/${item.id}`}>
                        <img
                            src={`https://codingapple1.github.io/shop/shoes${item.id + 1}.jpg`}
                            width="80%"
                            className="img-detail"
                        />
                    </Link>
                    <h4>{item.title}</h4>
                    <p>
                        <Link to={`/detail/${item.id}`} className="text-detail">
                            {item.content}
                        </Link>
                    </p>
                </div>
            ))}
        </>
    )
}

export default ProductList;