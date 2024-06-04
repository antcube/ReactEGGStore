import styles from "./Description.module.css";

export default function Description({ productFound }) {
    return (
        <div className={styles["product-description-block"]}>
            <h1 className={styles["product-title"]}>{productFound.title}</h1>
            <form className={styles["product-selector"]}>
                <fieldset className={styles["product-fieldset"]}>
                    <label className={styles["product-label"]} htmlFor="color">
                        Color
                    </label>
                    <select className={styles["product-select"]} id="color">
                        {productFound.colors.map((color) => (
                            <option value={color} key={color}>
                                {color}
                            </option>
                        ))}
                    </select>
                </fieldset>
            </form>
            <div className={styles["product-description"]}>
                <span className={styles["product-label"]}>Descripción</span>
                <p>{productFound.description}</p>
            </div>
        </div>
    );
}
