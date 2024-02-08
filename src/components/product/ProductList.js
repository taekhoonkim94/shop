const ProductList = ({
    shoes
}) => {
    return (
        <>
            {shoes.map(item => (
                <div key={item.id} className="col-md-4">
                    <img src={`https://codingapple1.github.io/shop/shoes${item.id + 1}.jpg`} width="80%" />
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                </div>
            ))}
        </>
    )
}

export default ProductList;