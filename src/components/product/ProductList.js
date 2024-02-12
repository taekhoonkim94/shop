import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useState } from "react";

const ProductList = ({
    shoes,
    setShoes
}) => {
    const initialUrlNumber = 2;
    const maxUrlNumber = 3;
    const [urlNumber, setUrlNumber] = useState(initialUrlNumber);

    const addProductList = () => {
        if (urlNumber <= maxUrlNumber) {
            axios.get(`https://codingapple1.github.io/shop/data${urlNumber}.json`)
            .then((res) => {
                let list = [...shoes, ...res.data];
                setShoes(list);
                setUrlNumber(urlNumber + 1);
            })
            .catch(() => {
                console.log('Error fetching product list');
            })
        }
    }

    return (
        <>
            {shoes.map(item => (
                <div key={item.id} className="col-md-4">
                    <Link to={`/detail/${item.id}`}>
                        <img
                            alt={item.title}
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
            <Button variant="dark" onClick={addProductList}>Dark</Button>
        </>
    )
}

export default ProductList;