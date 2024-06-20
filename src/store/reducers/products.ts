import { createReducer } from "@reduxjs/toolkit";
import { captureText, calculateTotal } from "../actions/products";


const initialState = { text: "" };

export const productsReducer = createReducer(
    initialState,
    (build) => build.addCase(captureText, (state, action) => {
                        const newState = {
                            ...state,
                            text: action.payload.text,
                        }
                        return newState;
                    })    
                    .addCase(calculateTotal, (state, action) => {
                        const products = action.payload.products;
                        const subtotals = products.map( item => item.price * item.quantity);
                        const totalAmount = subtotals.reduce( (total, subtotal) => total + subtotal);
                        const newState = {
                            ...state,
                            totalAmount
                        }
                        return newState;
                    })
)