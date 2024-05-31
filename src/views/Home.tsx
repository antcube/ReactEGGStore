import styles from "./Home.module.css";
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
            <main>
                <div className={styles["product-container"]} id="products">
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
