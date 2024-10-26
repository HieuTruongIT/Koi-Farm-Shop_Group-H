import { useStore } from './zustand/store';
import './BuyShopFish.css'
import { DeleteOutlined } from '@ant-design/icons';

function BuyShopFish() {
    const cart = useStore(state => state.cart)
    const removeCart = useStore(state => state.removeCart)

    const handleRemoveCart = (itemId) => {
        removeCart(itemId)
        window.location = '/cart'
    }

    return <main class="container">

        <h2>Giỏ hàng</h2>
        <table class="cart-table">
            <thead>
                <tr>
                    <th>
                    </th>
                    <th>
                        Sản phẩm
                    </th>
                    <th>
                        Giá
                    </th>
                    <th>
                        Số lượng
                    </th>
                    <th>
                        Tạm tính
                    </th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item) => (
                    <tr key={item.id}>
                        <td>
                            <button onClick={() => { handleRemoveCart(item.id) }}>
                                <DeleteOutlined />
                            </button>
                        </td>
                        <td className='flex gap-5 items-center'>
                            <img alt="Image of Onkoi Karashi 4 năm tuổi 85 cm" src={item.thumbnail} />
                            <div>
                                {item.name}
                                <br />
                                Vendor: {item.seller}
                            </div>
                        </td>
                        <td>
                            0 ₫
                        </td>
                        <td>
                            <input min="1" style={{ width: "50px" }} type="number" value={item.quantity} />
                        </td>
                        <td>
                            0 ₫
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div class="cart-summary">
            <h2>Cộng giỏ hàng</h2>
            <table>
                <tr>
                    <th>
                        Tạm tính
                    </th>
                    <td>
                        0 ₫
                    </td>
                </tr>
                <tr>
                    <th>
                        Tổng
                    </th>
                    <td>
                        0 ₫
                    </td>
                </tr>
            </table>
            <a class="checkout-btn" href="#">
                Tiến hành thanh toán
            </a>
        </div>

    </main>
}

export default BuyShopFish;