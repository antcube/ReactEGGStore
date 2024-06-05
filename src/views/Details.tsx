import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Thumbs from "../components/Thumbs";
import Description from "../components/Description";
import styles from "./Details.module.css";
import products from "../assets/products";
import { useEffect, useState } from "react";
import Checkout from "../components/Checkout";

export default function Details() {
    const { id } = useParams();

    const [quantity, setQuantity] = useState(1);

    const productFound = products.find((item) => item.id === id);

    const productsOnSale = products.filter((item) => item.onsale === true);

    // function getFilteredProductsOnSale() {
    //     return productsOnSale.filter(item => item.id !== productFound.id).slice(0, 3);
    // }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [productFound]);

    return (
        <>
            <NavBar />
            <main>
                <div className={styles["details-container"]}>
                    {productFound ? (
                        <div
                            id="details"
                            className={styles["columns-container"]}
                        >
                            <Thumbs 
                                productFound={productFound} 
                            />

                            <Description 
                                productFound={productFound}
                            />

                            <Checkout 
                                productFound={productFound}
                                quantity={quantity}
                                setQuantity={setQuantity}
                            />
                        </div>
                    ) : (
                        <>
                            <section className={styles["not-found-section"]}>
                                <p className={styles["not-found-p"]}>
                                    Lo sentimos, el producto con el id '{id}' no
                                    fue encontrado
                                </p>
                                <Link
                                    className={styles["not-found-button"]}
                                    to="/"
                                >
                                    Volver al inicio
                                </Link>
                            </section>
                        </>
                    )}

                    <div className={styles["sales-block"]}>
                        <h2 className={styles["sales-title"]}>
                            Ofertas de la semana
                        </h2>
                        <div
                            id="product-container"
                            className={styles["product-container"]}
                        >   
                            {productsOnSale.filter(item => item.id !== id).slice(0, 3).map(product => (
                                < ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
