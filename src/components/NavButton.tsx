import { Link } from 'react-router-dom';

export default function NavButton({ title, link }) {
    return (
        <>
            <li>
                <Link className="text-white font-bold text-center no-underline inline-block	w-full py-[5px] text-sm hover:underline md:w-[150px]" to={link}>
                    {title}
                </Link>
            </li>
        </>        
    );
}