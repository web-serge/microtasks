// @flow 
import * as React from 'react';
import {useParams} from 'react-router-dom';
import {data} from '../../data';

type Props = {};
export const Model = (props: Props) => {
    const {brand, id} = useParams()
    console.log(useParams())
    const currentProduct = data.find(el => el.id === Number(id))

    return currentProduct ? (<div><h1>{currentProduct?.model}</h1>
        <img src={currentProduct?.picture} alt=""/></div>) : <h1>нет такого продукта</h1>
};