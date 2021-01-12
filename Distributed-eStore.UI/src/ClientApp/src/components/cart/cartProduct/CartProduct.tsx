﻿import * as React from 'react';
import { ICartProduct } from '../../../state/cart';

type CartProductProps = {
    cart: ICartProduct,
    onQuantityChange: (productId: string) => void
};

export const CartProduct: React.FC<CartProductProps> = ({
    cart,
    onQuantityChange
}) => {
    const { id, name, price, color, imageURL, size, quantity, } = cart;

    return <div className="cart-product">
                <div className="d-flex justify-content-between">
                    <div className="">
                        <a href={`/products/${id}`}>
                            <img sizes="100vw" src={imageURL} className="product__image"></img>
                        </a>
                    </div>
                    <div className="">
                        <p>Item</p>
                        <i className="cart-product__name text-danger"> {name} </i>
                        <strong className="cart-product__price d-block"> ${price} </strong>
                        <strong className="d-block">Color - ${color} </strong>
                        <strong className="d-block">Size - ${size} </strong>
                    </div>
                    <div>
                        <p>Qty:</p>
                        <input type="number" onChange={ onQuantityChange } value={ quantity }/>
                    </div>
                </div>
            </div>
};