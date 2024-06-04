import styles from "./Thumbs.module.css";

export default function Thumbs({productFound}) {
    return (
        <section className={styles["product-images-block"]}>
            <div className={styles["product-images"]}>
                {productFound.images.map((image, index) => (
                    <img
                        key={index}
                        className={styles["mini-img"]}
                        src={image}
                        alt={productFound.title}
                    />
                ))}
            </div>
            <img
                className={styles["big-img"]}
                id="big-img"
                src={productFound.images[0]}
                alt="MacBook Pro 13'4"
            />
        </section>
    );
}
