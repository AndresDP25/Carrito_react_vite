import { Filters } from './Filters';


export function Header() {
  return (
	<header className='bg-white'>
		<h1 className='text'>React Shop 🛒</h1>
		<Filters />
	</header>
  )
}
