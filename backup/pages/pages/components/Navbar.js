import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <ul>
            <li >
            <Link href="/home">
            <a>home</a>   
            </Link>
            </li>
            <li >
            <Link href="/about">
            <a>About</a>   
            </Link>
            </li>   
            <li >
            <Link href="/terms">
            <a>terms</a>   
            </Link>
            </li>        
            </ul> 
        </div>
    )
}

export default Navbar;