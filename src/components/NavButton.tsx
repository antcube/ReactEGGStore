import styles from './NavButton.module.css';

export default function NavButton({ title, link }) {
    return (
        <>
            <li className={styles["nav-li"]}>
                <a className={styles["nav-a"]} href={link}>
                    {title}
                </a>
            </li>
        </>        
    );
}