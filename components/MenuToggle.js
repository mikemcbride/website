import MenuIcon from './icons/MenuIcon'
import MenuClose from './icons/MenuClose'

export default function MenuToggle(props) {
   return (
        <button onClick={props.handleClick} className="block rounded bg-transparent text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 p-2 focus:outline-none focus:ring">
            {props.isOpen ? <MenuClose className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
        </button>
    )
}
