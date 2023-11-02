import { Filters } from './Filters';


export function Header({changeFilters}) {
  return (
	<header className='bg-white'>
		<h1 className='text'>React Shop 🛒</h1>
		<Filters onChange={changeFilters} />
	</header>
  )
}
