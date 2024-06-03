import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import styles from "./Details.module.css";
import products from "../assets/products";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Details() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();

    const [inputValue, setInputValue] = useState(1);

    const productFound = products.find((item) => item.id === id);

    const productsOnSale = products.filter((item) => item.onsale === true).filter((item) => item.id !== productFound.id);

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
                            <section className={styles["product-images-block"]}>
                                <div className={styles["product-images"]}>
                                    {productFound.images.map((image, index) => (
                                        <img
                                            key={index}
                                            className={styles["mini-img"]}
                                            src={image}
                                            alt={productFound.title}
                                        />
                                    ))}
                                </div>
                                <img
                                    className={styles["big-img"]}
                                    id="big-img"
                                    src={productFound.images[0]}
                                    alt="MacBook Pro 13'4"
                                />
                            </section>
                            <div
                                className={styles["product-description-block"]}
                            >
                                <h1 className={styles["product-title"]}>
                                    {productFound.title}
                                </h1>
                                <form className={styles["product-selector"]}>
                                    <fieldset
                                        className={styles["product-fieldset"]}
                                    >
                                        <label
                                            className={styles["product-label"]}
                                            htmlFor="color"
                                        >
                                            Color
                                        </label>
                                        <select
                                            className={styles["product-select"]}
                                            id="color"
                                        >
                                            {productFound.colors.map(
                                                (color) => (
                                                    <option
                                                        value={color}
                                                        key={color}
                                                    >
                                                        {color}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </fieldset>
                                </form>
                                <div className={styles["product-description"]}>
                                    <span className={styles["product-label"]}>
                                        Descripción
                                    </span>
                                    <p>{productFound.description}</p>
                                </div>
                            </div>
                            <div className={styles["product-checkout-block"]}>
                                <div className={styles["checkout-container"]}>
                                    <span
                                        className={
                                            styles["checkout-total-label"]
                                        }
                                    >
                                        Total:
                                    </span>
                                    <h2
                                        id="price"
                                        className={
                                            styles["checkout-total-price"]
                                        }
                                    >
                                        {productFound.price * inputValue}
                                    </h2>
                                    <p
                                        className={
                                            styles["checkout-description"]
                                        }
                                    >
                                        Incluye impuesto PAIS y percepción AFIP.
                                        Podés recuperar AR$ 50711 haciendo la
                                        solicitud en AFIP.
                                    </p>
                                    <ul
                                        className={
                                            styles["checkout-policy-list"]
                                        }
                                    >
                                        <li>
                                            <span
                                                className={
                                                    styles["policy-icon"]
                                                }
                                            >
                                                <img
                                                    src="/truck.png"
                                                    alt="Truck"
                                                />
                                            </span>
                                            <span
                                                className={
                                                    styles["policy-desc"]
                                                }
                                            >
                                                Agrega el producto al carrito
                                                para conocer los costos de envío
                                            </span>
                                        </li>
                                        <li>
                                            <span
                                                className={
                                                    styles["policy-icon"]
                                                }
                                            >
                                                <img
                                                    src="/plane.png"
                                                    alt="Plane"
                                                />
                                            </span>
                                            <span
                                                className={
                                                    styles["policy-desc"]
                                                }
                                            >
                                                Recibí aproximadamente entre 10
                                                y 15 días hábiles, seleccionando
                                                envío normal
                                            </span>
                                        </li>
                                    </ul>
                                    <div className={styles["checkout-process"]}>
                                        <div className={styles["top"]}>
                                            <input
                                                type="number"
                                                min="1"
                                                max={productFound.stock}
                                                value={inputValue}
                                                onChange={(e) =>
                                                    setInputValue(
                                                        +e.target.value
                                                    )
                                                }
                                            />
                                            <button
                                                type="button"
                                                className={styles["cart-btn"]}
                                            >
                                                Añadir al Carrito
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                            {productsOnSale.slice(0, 3).map(product => (
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
