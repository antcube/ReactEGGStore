import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import styles from './NotFound.module.css';

export default function NotFound() {
    return(
    <>
        <NavBar />
        <Hero 
            firstMessage="404" 
            secondMessage="not found" 
        />
        <main>
            <section className={styles["not-found-section"]}>
                <p className={styles["not-found-p"]}>
                    Lo sentimos, la página que buscas no existe.
                </p>
                <Link className={styles["not-found-button"]} to="/">Volver al inicio</Link>
            </section>
        </main>
        <Footer />
    </>
    )
}
