import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <ul>
            <li >
            <Link href="/home">
            home   
            </Link>
            </li>
            <li >
            <Link href="/about">
            About   
            </Link>
            </li>   
            <li >
            <Link href="/terms">
            terms   
            </Link>
            </li>        
            </ul> 
        </div>
    );
}

export default Navbar;