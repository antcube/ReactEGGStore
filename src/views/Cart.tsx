import { useEffect, useState } from "react";
import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

export default function Cart() {
    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    }

    const [cart, setCart] = useState(initialCart);

    useEffect( () => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    const totalAmount = cart.reduce( (acc, product) => acc + product.price, 0);

    return (
        <>
            <NavBar />
            <Hero 
                firstMessage={'mi'}
                secondMessage={'carrito'}
            />
            
            <main>
                {cart.map( product => (
                    <CartCard 
                        key={product.id}
                        product={product}
                    />
                
                ))}
                <CartResume 
                    totalAmount={totalAmount}
                    setCart={setCart}
                />
            </main>
        </>
    );
}
