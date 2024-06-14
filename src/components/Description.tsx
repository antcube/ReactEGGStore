import { Product } from "../types";

type DescriptionProps = {
    productFound: Product
}

export default function Description({ productFound }: DescriptionProps) {
    return (
        <div className="p-[10px] m-[10px] sm:w-[80%] lg:w-[330px]">
            <h1 className="text-black text-[28px] font-bold break-words ">{productFound.title}</h1>
            <form className="mt-[30px]">
                <fieldset className="border-none flex flex-col">
                    <label className="text-black text-[12px] font-bold"
                    htmlFor="color">
                        Color
                    </label>
                    <select className="w-full h-10 bg-white rounded-[10px] border border-[#eaeaea] my-[10px] p-[10px] box-border" id="color">
                        {productFound.colors.map((color) => (
                            <option value={color} key={color}>
                                {color}
                            </option>
                        ))}
                    </select>
                </fieldset>
            </form>
            <div className="mt-[30px] leading-[20px]">
                <span className="text-black text-[12px] font-bold">Descripción</span>
                <p>{productFound.description}</p>
            </div>
        </div>
    );
}
