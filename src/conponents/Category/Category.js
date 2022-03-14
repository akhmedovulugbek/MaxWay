import React, { useContext, } from 'react';
import { context } from '../../context';
import './category.scss';
/* import "./swaiper.css" */


const Category = () => {

    const { categoryData } = useContext(context)

    return (
        <div className='container'>
            <div className="d-flex flex-wrap ">
                {categoryData.map(el => {
                    return (
                        <button key={el.id} className='cg-btn'>{el.name}</button>
                    )
                })}
            </div>
        </div>
    );
};
export default Category;
