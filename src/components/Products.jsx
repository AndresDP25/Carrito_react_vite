import './Products.css';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons';
import { useCart } from '../hook/useCart';

export function Products({products}) {
	const { addToCart, RemoveFromCart, cart } = useCart();

	//Esto devuelve un true o false - es para ver si ya tenemos ese producto en el cart
	const checkProductInCart = product => {
		return cart.some(item => item.id == product.id)
	}

  return (
	<main className='products'>
		<ul>
			{products.slice(0, 10).map(product => {
				const isProductInCart = checkProductInCart(product)

				return (
				<li key={product.id}>
					<img 
					src={product.thumbnail}
					 alt={product.title} />
					 <div>
						<strong>{product.title}</strong> - ${product.price}
					 </div>
					 <div>
						<button style={{backgroundColor: isProductInCart ? 'red' : '#09f'}} 
						onClick={() =>{
							isProductInCart 
								? RemoveFromCart(product)
								: addToCart(product)
							}}
							>
							{
								isProductInCart
								? <RemoveFromCartIcon />
								: <AddToCartIcon/>
							}
						</button>
					 </div>
				</li>
			)
			})}
		</ul>
	</main>
  )
}
