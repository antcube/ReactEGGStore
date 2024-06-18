import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "./../types";

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get("/products.json")
            // .then( function(respuesta) {
            //     setProducts(respuesta.data);
            // })
            // .catch( function(error) {
            //     console.log(error);
            // })
            .then( respuesta => setProducts(respuesta.data))
            .catch( error => console.log(error))
    }, []);

    //useEffect(parametro1, parametro2 )
    // parametro1: funcion asincrona que se ejecuta dependiendo el segundo parametro
    // parametro2: array o arreglo de dependencias

    return (
        <>
            <NavBar />
            <Hero 
                firstMessage={'tecnología'}
                secondMessage={'renovada'}
            />
            <main className="w-full flex justify-center align-center p-5 ">
                <div className=" flex flex-wrap justify-center sm:justify-evenly xl:justify-between xl:w-[1080px]" id="products">
                    {products.map( (product: Product) => (
                        < ProductCard
                            key={product.id}
                            product={product}
                        />
                        )     
                    )}
                </div>
            </main>

            <Footer />
        </>
    );
}
