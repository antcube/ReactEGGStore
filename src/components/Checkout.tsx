import { useEffect, useRef, useState } from "react";

export default function Checkout({ productFound, quantity, setQuantity }) {
    const units = useRef(1);

    // Se inicializa el carrito con los productos guardados en el localStorage
    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    }

    const [cart, setCart] = useState(initialCart);

    useEffect( () => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])
    // Fin de la inicialización

    
    // Se actualiza el carrito cuando se modifica el localStorage
    useEffect(() => {
        const StorageChange = () => {
            setCart(initialCart());
        };

        window.addEventListener('storage', StorageChange);

        return () => {
            window.removeEventListener('storage', StorageChange);
        };
    }, []);
    // Fin de la actualización


    // Agrega o elimina un producto del carrito
    const addToCart = (item) => {
        const itemExists = cart.find( each => each.id === item.id );

        if( itemExists) {
            const updateCart = cart.filter(each => each.id !== itemExists.id);
            setCart(updateCart);
        } else {
            const newItem = { ...item, quantity: Number(units.current.value) };
            setCart([...cart, newItem]);
        }
        setButton(!itemExists);
    }
    // Fin de la función


    // Revisa si el producto existe para el manejo de los botones
    const isProductInCart = (product) => {
        const cart = initialCart();
        return cart.some(cartProduct => cartProduct.id === product.id);
    }

    const [button, setButton] = useState(isProductInCart(productFound));

    useEffect(() => {
        setButton(isProductInCart(productFound));
        setQuantity(1);
    }, [productFound]);
    // Fin de la revisión

    return (
        <div className=" p-2.5 m-2.5 lg:w-[330px]">
            <div className="bg-[#ebebeb] p-[33px] rounded-sm">
                <span className="text-[#ff3b3c]">Total:</span>
                <h2 id="price" className="text-[28px] font-bold mt-2.5">
                    ${productFound.price * quantity}
                </h2>
                <p className="leading-[20.4px] break-words">
                    Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
                    50711 haciendo la solicitud en AFIP.
                </p>
                <ul className="p-0 list-none mb-[30px]">
                    <li className="flex my-[15px]">
                        <span className="mr-[15px]">
                            <img src="/truck.png" alt="Truck" />
                        </span>
                        <span>
                            Agrega el producto al carrito para conocer los
                            costos de envío
                        </span>
                    </li>
                    <li className="flex my-[15px]">
                        <span className="mr-[15px]">
                            <img src="/plane.png" alt="Plane" />
                        </span>
                        <span>
                            Recibí aproximadamente entre 10 y 15 días hábiles,
                            seleccionando envío normal
                        </span>
                    </li>
                </ul>
                <div>
                    <div className="top flex flex-col gap-2 mb-2.5 sm:flex-row">
                        <input
                            className="h-10 text-center rounded-xl border-0 mr-2.5 pr-2.5 pl-5 py-0 box-border sm:w-[62px]"
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
                                    ? "w-full bg-[#202020] text-white font-bold border-0 h-10 rounded-xl cursor-pointer hover:bg-[#404040]"
                                    : "w-full bg-[#ff3b3c] text-white font-bold border-0 h-10 rounded-xl cursor-pointer hover:bg-[#ff5151]"
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
