import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { useState, useEffect } from "react";

const Detail = ({
    shoes
}) => {
    const { id } = useParams();
    const item = shoes.find(v => v.id === Number(id));

    const countNumber = 5;
    const [count, setCount] = useState(countNumber);

    useEffect(() => {
        setTimeout(() => {
            count > 0 && setCount(prevCount => prevCount - 1);
        }, 1000)
    }, [count])

    if (!item) {
        return <PageNotFound />
    }

    return (
        <>
            <div className="container">
                {count > 0 && (
                    <div className="alert alert-warning">
                        {count}초 이내 구매시 할인
                    </div>
                )}
                <div className="row">
                    <div key={item.id} className="col-md-6">
                        <img src={`https://codingapple1.github.io/shop/shoes${item.id + 1}.jpg`} width="100%" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{item.title}</h4>
                        <p>{item.content}</p>
                        <p>{item.price}원</p>
                        <button className="btn btn-danger">주문하기</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;