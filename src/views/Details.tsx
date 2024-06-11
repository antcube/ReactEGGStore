import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Thumbs from "../components/Thumbs";
import Description from "../components/Description";
import products from "../assets/products";
import { useEffect, useState } from "react";
import Checkout from "../components/Checkout";

export default function Details() {
    const { id } = useParams();

    const [quantity, setQuantity] = useState(1);

    const productFound = products.find((item) => item.id === id);

    const productsOnSale = products.filter((item) => item.onsale === true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [productFound]);

    return (
        <>
            <NavBar />
            <main>
                <div className="w-full flex flex-wrap justify-between sm:justify-center">
                    {productFound ? (
                        <div
                            id="details"
                            className="flex flex-col items-center justify-center xl:w-[1080px] lg:flex-row lg:justify-around lg:items-start mt-5 lg:mt-10"
                        >
                            <div className="flex flex-col items-center sm:flex-row sm:justify-around">
                                <Thumbs 
                                    productFound={productFound} 
                                />

                                <Description 
                                    productFound={productFound}
                                />
                            </div>
                            <Checkout 
                                productFound={productFound}
                                quantity={quantity}
                                setQuantity={setQuantity}
                            />
                        </div>
                    ) : (
                        <>
                            <section className="w-full flex flex-col justify-center items-center h-[200px]">
                                <p className="text-xl font-bold text-[#7525a7]">
                                    Lo sentimos, el producto con el id '{id}' no
                                    fue encontrado
                                </p>
                                <Link
                                    className="bg-[#ff3b3c] p-[10px] text-white text-center font-bold border-none rounded-[10px] mt-5 w-[70%] transition-all duration-300 hover:bg-[#d63333] hover:scale-110 "
                                    to="/"
                                >
                                    Volver al inicio
                                </Link>
                            </section>
                        </>
                    )}

                    <div className="w-[1080px] flex flex-wrap my-5 justify-center">
                        <h2 className="text-center text-[40px]">
                            Ofertas de la semana
                        </h2>
                        <div
                            id="product-container"
                            className="w-[1080px] flex flex-wrap justify-between mt-5"
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
