import styles from "./Home.module.css";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <NavBar />
            <Hero 
                firstMessage={'tecnología'}
                secondMessage={'renovada'}
            />

            <main>
                <div className={styles["product-container"]} id="products">
                    <a className={styles["product-card"]} href="./details.html">
                        <img
                            className={styles["product-img"]}
                            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
                            alt="iPad Pro 12.9"
                        />
                        <div className={styles["product-info"]}>
                            <span className={styles["product-title"]}>
                                iPad Pro 12.9
                            </span>
                            <span className={styles["product-description"]}>
                                Silver
                            </span>
                            <div className={styles["product-price-block"]}>
                                <span className={styles["product-price"]}>
                                    900000
                                </span>
                                <span className={styles["product-discount"]}>
                                    50% Off
                                </span>
                            </div>
                            <div className={styles["product-tax-policy"]}>
                                Incluye impuesto País y percepción AFIP
                            </div>
                        </div>
                    </a>
                    <a className={styles["product-card"]} href="./details.html">
                        <img
                            className={styles["product-img"]}
                            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
                            alt="iPad Pro 12.9"
                        />
                        <div className={styles["product-info"]}>
                            <span className={styles["product-title"]}>
                                iPad Pro 12.9
                            </span>
                            <span className={styles["product-description"]}>
                                Silver
                            </span>
                            <div className={styles["product-price-block"]}>
                                <span className={styles["product-price"]}>
                                    900000
                                </span>
                                <span className={styles["product-discount"]}>
                                    50% Off
                                </span>
                            </div>
                            <div className={styles["product-tax-policy"]}>
                                Incluye impuesto País y percepción AFIP
                            </div>
                        </div>
                    </a>
                    <a className={styles["product-card"]} href="./details.html">
                        <img
                            className={styles["product-img"]}
                            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
                            alt="iPad Pro 12.9"
                        />
                        <div className={styles["product-info"]}>
                            <span className={styles["product-title"]}>
                                iPad Pro 12.9
                            </span>
                            <span className={styles["product-description"]}>
                                Silver
                            </span>
                            <div className={styles["product-price-block"]}>
                                <span className={styles["product-price"]}>
                                    900000
                                </span>
                                <span className={styles["product-discount"]}>
                                    50% Off
                                </span>
                            </div>
                            <div className={styles["product-tax-policy"]}>
                                Incluye impuesto País y percepción AFIP
                            </div>
                        </div>
                    </a>
                    <a className={styles["product-card"]} href="./details.html">
                        <img
                            className={styles["product-img"]}
                            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
                            alt="iPad Pro 12.9"
                        />
                        <div className={styles["product-info"]}>
                            <span className={styles["product-title"]}>
                                iPad Pro 12.9
                            </span>
                            <span className={styles["product-description"]}>
                                Silver
                            </span>
                            <div className={styles["product-price-block"]}>
                                <span className={styles["product-price"]}>
                                    900000
                                </span>
                                <span className={styles["product-discount"]}>
                                    50% Off
                                </span>
                            </div>
                            <div className={styles["product-tax-policy"]}>
                                Incluye impuesto País y percepción AFIP
                            </div>
                        </div>
                    </a>
                    <a className={styles["product-card"]} href="./details.html">
                        <img
                            className={styles["product-img"]}
                            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
                            alt="iPad Pro 12.9"
                        />
                        <div className={styles["product-info"]}>
                            <span className={styles["product-title"]}>
                                iPad Pro 12.9
                            </span>
                            <span className={styles["product-description"]}>
                                Silver
                            </span>
                            <div className={styles["product-price-block"]}>
                                <span className={styles["product-price"]}>
                                    900000
                                </span>
                                <span className={styles["product-discount"]}>
                                    50% Off
                                </span>
                            </div>
                            <div className={styles["product-tax-policy"]}>
                                Incluye impuesto País y percepción AFIP
                            </div>
                        </div>
                    </a>
                    <a className={styles["product-card"]} href="./details.html">
                        <img
                            className={styles["product-img"]}
                            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
                            alt="iPad Pro 12.9"
                        />
                        <div className={styles["product-info"]}>
                            <span className={styles["product-title"]}>
                                iPad Pro 12.9
                            </span>
                            <span className={styles["product-description"]}>
                                Silver
                            </span>
                            <div className={styles["product-price-block"]}>
                                <span className={styles["product-price"]}>
                                    900000
                                </span>
                                <span className={styles["product-discount"]}>
                                    50% Off
                                </span>
                            </div>
                            <div className={styles["product-tax-policy"]}>
                                Incluye impuesto País y percepción AFIP
                            </div>
                        </div>
                    </a>
                </div>
            </main>

            <Footer />
        </>
    );
}
