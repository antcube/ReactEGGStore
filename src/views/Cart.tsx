import { useEffect, useMemo, useState } from "react";
import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import type { Cart } from "../types";

export default function Cart() {
    const initialCart = (): Cart[] => {
        const localStorageCart = localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    }

    const [productsOnCart, setProductsOnCart] = useState(initialCart);

    useEffect( () => {
        localStorage.setItem('cart', JSON.stringify(productsOnCart));
    }, [productsOnCart])

    const totalAmount = useMemo( () => {
        return productsOnCart.reduce( (acc, product) => acc + (product.price * product.quantity), 0);
    }, [productsOnCart])

    return (
        <>
            <NavBar />
            <Hero 
                firstMessage={'mi'}
                secondMessage={'carrito'}
            />
            
            <main className="w-[95%] mx-auto">
                {productsOnCart.map( product => (
                    <CartCard 
                        key={product.id}
                        product={product}
                        productsOnCart={productsOnCart}
                        setProductsOnCart={setProductsOnCart}
                    />
                
                ))}
                <CartResume 
                    totalAmount={totalAmount}
                />
            </main>
        </>
    );
}
