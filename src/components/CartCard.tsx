import { useRef, Dispatch, SetStateAction } from "react";
import type { Cart } from "../types";

type CartCardProps = {
    product: Cart,
    productsOnCart: Cart[];
    setProductsOnCart: Dispatch<SetStateAction<Cart[]>>
};

export default function CartCard({ product, productsOnCart, setProductsOnCart}: CartCardProps) {
    const { id, images, title, colors, description, stock, quantity, price } = product;

    const units = useRef<HTMLInputElement>(null);

    const manageUnits = () => {
        const newUnits = parseInt(units.current?.value ?? "0");

        const newProductsOnCart = productsOnCart.map( product => {
            if (product.id === id) {
                product.quantity = newUnits;
            }
            return product;
        });
        setProductsOnCart(newProductsOnCart);
    };

    const subtotal: number = price * quantity;

    return (
        <article className="bg-[#f2f2f2] rounded-2xl px-2.5 py-4 m-2.5 h-[220px] break-words grid grid-cols-4 gap-2 md:p-[30px] md:w-[680px]">
            <img
                className="md:w-[100px] md:h-[100px] rounded-[5px]"
                src={images[0]}
                alt={title}
            />
            <div className=" col-span-2 md:space-y-2 max-w-64 flex flex-col justify-between md:gap-[2px] sm:w-[340px]">
                <strong>{title}</strong>
                <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                    - {colors[0]}
                </span>
                <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                    {description}
                </p>
                <input
                    className="w-[70px] h-[40px] rounded-[10px] border-[1px] border-[#eaeaea] p-[5px]"
                    type="number"
                    name="quantity"
                    defaultValue={quantity}
                    ref={units}
                    min="1"
                    max={stock}
                    id={id}
                    onChange={manageUnits}
                />
            </div>
            <strong>AR$ {subtotal}</strong>
        </article>
    );
}
