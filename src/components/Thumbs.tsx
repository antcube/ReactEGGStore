import { useEffect, useState } from "react";
import { Product } from "../types";
 
type ThumbsProps = {
    productFound: Product
}

export default function Thumbs({productFound}: ThumbsProps) {
    const [thumb, setThumb] = useState(productFound.images[0]);
    
    useEffect(() => {
        setThumb(productFound.images[0]);
    }, [productFound]);
    
    return (
        <section className=" p-[10px] m-[10px] sm:w-[50%] sm:flex sm:gap-1 lg:w-[330px] sm:self-start">
            <div className="sm:w-11 space-y-2">
                {productFound.images.map((image, index) => (
                    <img
                        key={index}
                        className="hidden object-cover cursor-pointer rounded-md sm:block sm:w-10 sm:h-10"
                        src={image}
                        alt={productFound.title}
                        onClick={() => setThumb(image)}
                    />
                ))}
            </div>
            <img
                className="w-[80%] mx-auto object-cover rounded-md sm:max-w-[230px] md:max-w-max md:w-[260px] md:h-[260px]"
                id="big-img"
                src={thumb}
                alt={productFound.title}
            />
        </section>
    );
}
