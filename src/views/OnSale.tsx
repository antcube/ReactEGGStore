import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import styles from "./OnSale.module.css";
import products from "../assets/products";
import OnSaleCard from "../components/OnSaleCard";
import { useState } from "react";

export default function OnSale() {
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(3);

    const allOnSaleProducts = products.filter(item => item.onsale === true);

    const anyOnSaleProducts = allOnSaleProducts
        .slice(from, to);

    const goNext = () => {
        setFrom((oldFrom) => oldFrom + 3);
        setTo((oldTo) => oldTo + 3);
    };

    const goBack = () => {
        setFrom((oldFrom) => oldFrom - 3);
        setTo((oldTo) => oldTo - 3);
    };

    return (
        <>
            <NavBar />
            <Hero firstMessage={"productos"} secondMessage={"on Sale"} />

            <main>
                <div className={styles["product-container"]} id="products">
                    {anyOnSaleProducts.map((product) => (
                        <OnSaleCard product={product} />
                    ))}
                </div>

                <div className={styles["btnContainer"]}>
                    <button
                        className={styles.button}
                        onClick={goBack}
                        disabled={from === 0}
                    >
                        {'<'}
                    </button>
                    <button
                        className={styles.button}
                        onClick={goNext}
                        disabled={allOnSaleProducts.length <= to}
                    >
                        {'>'}
                    </button>
                </div>
            </main>

            <Footer />
        </>
    );
}
