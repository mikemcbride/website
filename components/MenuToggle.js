import MenuIcon from './icons/MenuIcon'
import MenuClose from './icons/MenuClose'

export default function MenuToggle(props) {
   return (
        <button onClick={props.handleClick} className="block md:hidden bg-transparent text-black p-2 focus:outline-none focus:ring">
            {props.isOpen ? <MenuClose /> : <MenuIcon />}
        </button>
    )
}
