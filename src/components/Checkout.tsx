import { useEffect, useRef, useState } from "react";
import styles from "./Checkout.module.css";

export default function Checkout({ productFound, quantity, setQuantity }) {
    const units = useRef(1);

    const [button, setButton] = useState(false);

    // const initialCart = () => {
    function initialCart() {
        const localStorageCart = localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    }

    const [cart, setCart] = useState(initialCart);

    useEffect( () => {
        localStorage.setItem('cart', JSON.stringify(cart))
        setButton(true)
    }, [cart])

    // const addToCart = (item) => {
    function addToCart(item) {
        const itemExists = cart.find( each => each.id === item.id );

        if( itemExists) {
            const updateCart = cart.filter(each => each.id !== itemExists.id);
            setCart(updateCart);
        } else {
            item.quantity = Number(units.current.value);
            setCart([...cart, item]);
            setButton(false);
        }
    }

    return (
        <div className={styles["product-checkout-block"]}>
            <div className={styles["checkout-container"]}>
                <span className={styles["checkout-total-label"]}>Total:</span>
                <h2 id="price" className={styles["checkout-total-price"]}>
                    ${productFound.price * quantity}
                </h2>
                <p className={styles["checkout-description"]}>
                    Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
                    50711 haciendo la solicitud en AFIP.
                </p>
                <ul className={styles["checkout-policy-list"]}>
                    <li>
                        <span className={styles["policy-icon"]}>
                            <img src="/truck.png" alt="Truck" />
                        </span>
                        <span className={styles["policy-desc"]}>
                            Agrega el producto al carrito para conocer los
                            costos de envío
                        </span>
                    </li>
                    <li>
                        <span className={styles["policy-icon"]}>
                            <img src="/plane.png" alt="Plane" />
                        </span>
                        <span className={styles["policy-desc"]}>
                            Recibí aproximadamente entre 10 y 15 días hábiles,
                            seleccionando envío normal
                        </span>
                    </li>
                </ul>
                <div className={styles["checkout-process"]}>
                    <div className={styles["top"]}>
                        <input
                            type="number"
                            min="1"
                            max={productFound.stock}
                            value={quantity}
                            ref={units}
                            onChange={() => setQuantity(Number(units.current.value))}
                        />
                        <button
                            type="button"
                            className={
                                button
                                    ? styles["remove-btn"]
                                    : styles["cart-btn"]
                            }
                            onClick={() => addToCart(productFound)}
                        >
                            {button
                                ? "Remover del carrito"
                                : "Agregar al carrito"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
