import React, { useContext } from 'react';
import { context } from '../../context';
import Product from './Product';
import './category.scss'

const Products = () => {
    const { productData } = useContext(context);
    console.log(productData)
    const maxiBox = productData.filter(el => {
        return el?.category === 'Макси бокс'
    })
    const burger = productData?.filter(el => {
        return el?.category === 'Бургер'
    })
    const sous = productData?.filter(el => {
        return el?.category === 'Соус'
    })
    const pita = productData.filter(el => {
        return el?.category === 'Лаваш'
    })
    const drink = productData.filter(el => {
        return el?.category === 'Напитки'
    })
    const shawarma = productData.filter(el => {
        return el?.category === 'Шаурма'
    })
    const danar = productData.filter(el => {
        return el?.category === 'Донар кебаб'
    })
    const haggi = productData.filter(el => {
        return el?.category === 'Шаурма Баггет (хагги)'
    })
    const Snacks = productData.filter(el => {
        return el?.category === 'Снеки'
    })
    const hotdog = productData.filter(el => {
        return el?.category === 'Хот-дог'
    })
    const sandwich = productData.filter(el => {
        return el?.category === 'Клаб-сендвич'
    })
    return (
        <div>
            {productData.length > 0 && 
            <div className='container'>
                    <Product junkFood={maxiBox} />
                    <Product junkFood={sandwich} />
                    <Product junkFood={pita} />
                    <Product junkFood={shawarma} />
                    <Product junkFood={danar} />
                    <Product junkFood={haggi} />
                    <Product junkFood={burger} />
                    <Product junkFood={hotdog} />
                    <Product junkFood={Snacks} />
                    <Product junkFood={sous} />
                    <Product junkFood={drink} />
            </div> }
        </div>
    )
};
export default Products;






