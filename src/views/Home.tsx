import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "./../assets/products";
import { Product } from "./../types";

export default function Home() {
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
