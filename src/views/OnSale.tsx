import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import styles from "./OnSale.module.css";
import products from "../assets/products";
import OnSaleCard from "../components/OnSaleCard";

export default function OnSale() {

    const onSaleProducts = products.filter(item => item.onsale === true);

    return (
        <>
            <NavBar />
            <Hero 
                firstMessage={"productos"} 
                secondMessage={"on Sale"} 
            />

            <main>
                <div className={styles["product-container"]} id="products">
                    {onSaleProducts.map( product => (
                        < OnSaleCard
                            product={product}
                        />
                    ))}
                    
                    {/* )     
                    {products.filter(item => item.onsale === true).map( product => (
                    )} */}
                    
                   
                </div>
            </main>

            <Footer />
        </>
    );
}
