import { Link } from 'react-router-dom';
import styles from './OnSaleCard.module.css';

export default function OnSaleCard({product}) {
    const {id, title, price, images, colors} = product;

    console.log(images);

    return (
        <>
            <Link className={styles["product-card"]} to={`/details/${id}`}>
                <img
                    className={styles["product-img"]}
                    src={images[0]}
                    alt={title}
                />
                <div className={styles["product-info"]}>
                    <span className={styles["product-title"]}>
                        {title}
                    </span>
                    <span className={styles["product-description"]}>
                        {colors[0]}
                    </span>
                    <div className={styles["product-price-block"]}>
                        <span className={styles["product-price"]}>{price}</span>
                        <span className={styles["product-discount"]}>
                            50% Off
                        </span>
                    </div>
                    <div className={styles["product-tax-policy"]}>
                        !Compra y paga en pesos!
                    </div>
                </div>
            </Link>
        </>
    )
}
