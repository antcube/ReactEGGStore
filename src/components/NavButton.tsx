import { Link } from 'react-router-dom';

type NavButtonProps = {
    title: string,
    link: string
}

export default function NavButton({ title, link }: NavButtonProps) {
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