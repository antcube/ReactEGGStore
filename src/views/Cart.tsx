import { useEffect, useState } from "react";
import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import type { Cart } from "../types";
import { useDispatch } from "react-redux";
import { calculateTotal } from "../store/actions/products";

export default function Cart() {
    const dispatch = useDispatch();

    const initialCart = (): Cart[] => {
        const localStorageCart = localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    }

    const [productsOnCart, setProductsOnCart] = useState(initialCart);

    useEffect( () => {
        localStorage.setItem('cart', JSON.stringify(productsOnCart));
        dispatch(calculateTotal({products: productsOnCart}))
    }, [dispatch, productsOnCart])

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
                    productsOnCart={productsOnCart}
                />
            </main>
        </>
    );
}
