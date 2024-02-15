import { Table, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addProductQuantity } from '../store/cartSlice'

const Cart = () => {

    const user = useSelector((state) => state.user);
    const cartProducts = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <>
            <div>{user.name} {user.age}의 장바구니</div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {cartProducts.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.count}</td>
                            <td>
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => dispatch(addProductQuantity(item.id))}
                                >+</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default Cart;