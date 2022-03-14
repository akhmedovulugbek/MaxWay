import React,{useContext} from 'react';
import { context } from '../../context';
import Product from '../Category/Product';

const Korzinka = () => {
    const { ordersData } = useContext(context);
    {ordersData.map(el => {
        return (
            <h1>{el.title}</h1>
          )
    })};
};

export default Korzinka;