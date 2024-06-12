import { useState } from "react";

export default function CartCard({ product, setCart }) {
    const { id, images, title, colors, description, stock, quantity, price } = product;

    const updateItemQuantity = (e) => {
        const newQuantity = +e.target.value;
        
        const updateItem = { ...product, quantity: newQuantity };
        setCart(updateItem);
    }

    const subtotal = price * quantity;

    return (
        <article className="bg-[#f2f2f2] rounded-[5px] p-[30px] m-2.5 h-[220px] break-words flex justify-between w-[680px] items-center">
            <img
                className="w-[100px] h-[100px] rounded-[5px]"
                src={images[0]}
                alt={title}
            />
            <div className="flex flex-col justify-between gap-[2px] w-[340px] h-[100px]">
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
                    min="1"
                    max={stock}
                    id={id}
                    onChange={updateItemQuantity}
                />
            </div>
            <strong>AR$ {subtotal}</strong>
        </article>
    );
}
