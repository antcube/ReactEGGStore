export type Product = {
    id: string,
    title: string,
    description: string,
    price: number,
    stock: number,
    images: string[],
    colors: string[],
    onsale: boolean
}

export type Cart = Product & { quantity: number };

export interface Product2 {
    id: string,
    title: string,
    description: string,
    price: number,
    stock: number,
    images: string[],
    colors: string[],
    onsale: boolean
}