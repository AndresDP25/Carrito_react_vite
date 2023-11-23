import './Cart.css';
import { useId } from 'react';
import { CartIcon, ClearCartIcon } from './Icons.jsx';
import { useCart } from '../hook/useCart.js';

export function Cart() {
	const cartCheckboxId = useId();
	const { cart, clearCart, addToCart } = useCart();

	function CartItem({ thumbnail, price, title, quantity, addToCart }) {
		return (
			<li>
				<img src={thumbnail} alt={title} />
				<div>
					<strong>{title}</strong> ${price}
				</div>

				<footer>
					<small>
						Qty:{quantity}
						<button onClick={addToCart}>+</button>
					</small>
				</footer>
			</li>
		)
	}

	return (
		<>
			<label className='cart-button' htmlFor={cartCheckboxId}>
				<CartIcon />
			</label>
			<input id={cartCheckboxId} type="checkbox" hidden />

			<aside className='cart'>
				<ul>
					{cart.map(product => (
						<CartItem 
							key={product.id} 
							addToCart={ () => addToCart(product)}
							{...product}
						/>
					))}
				</ul>
				<button onClick={clearCart}>
					<ClearCartIcon />
				</button>
			</aside>
		</>
	)
}
