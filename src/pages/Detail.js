import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";

const Detail = ({
    shoes
}) => {
    const { id } = useParams();
    const item = shoes.find(v => v.id === Number(id));

    if (!item) {
        return <PageNotFound />
    }

    return (
        <>
            <div className="container">
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