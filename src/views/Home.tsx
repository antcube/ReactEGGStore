import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "./../assets/products"

export default function Home() {
    return (
        <>
            <NavBar />
            <Hero 
                firstMessage={'tecnología'}
                secondMessage={'renovada'}
            />
            <main className="w-full flex justify-center align-center p-5">
                <div className="w-[1080px] flex flex-wrap justify-between" id="products">
                    {products.map( product => (
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
