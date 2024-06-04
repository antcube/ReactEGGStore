import { useEffect, useState } from "react";
import styles from "./Thumbs.module.css";

export default function Thumbs({productFound}) {
    const [thumb, setThumb] = useState(productFound.images[0]);
    
    useEffect(() => {
        setThumb(productFound.images[0]);
    }, [productFound]);
    
    return (
        <section className={styles["product-images-block"]}>
            <div className={styles["product-images"]}>
                {productFound.images.map((image, index) => (
                    <img
                        key={index}
                        className={styles["mini-img"]}
                        src={image}
                        alt={productFound.title}
                        onClick={() => setThumb(image)}
                    />
                ))}
            </div>
            <img
                className={styles["big-img"]}
                id="big-img"
                src={thumb}
                alt={productFound.title}
            />
        </section>
    );
}
