﻿import { CartActionTypes, ICartListState } from "./cartTypes";
import { ReduxAction } from '../index';

const initialState: ICartListState = {
    productIdToCartProductMap: {}
};

export const reducer = (state: ICartListState = initialState, incomingAction: ReduxAction): ICartListState => {
    const action = incomingAction as ReduxAction;
    switch (action.type) {
        case CartActionTypes.ADD_TO_CART:
            {
                const { cartProduct } = action;

                const productId = cartProduct.id;
                if (!state.productIdToCartProductMap[productId]) {
                    return {
                        productIdToCartProductMap: {
                            ...state.productIdToCartProductMap,
                            [productId]: {
                                ...cartProduct
                            }
                        }
                    }
                }
            }
        case CartActionTypes.REMOVE_FROM_CART:
            {
                const { productId } = action;

                if (state.productIdToCartProductMap[productId]) {
                    delete state.productIdToCartProductMap[productId];
                }
            }
        case CartActionTypes.PLACE_ORDER:
        default:
            return state;
    }
};