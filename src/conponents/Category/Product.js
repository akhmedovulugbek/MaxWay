import React, { useState } from 'react'
import {ordersRef} from '../Config/Config'
import { 
    getFirestore, 
    collection, 
    getDocs, 
    addDoc, 
    deleteDoc, 
    doc, 
  } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import './category.scss'

const Product = ({ junkFood }) => {
    const [orderedItem, setOrderedItem] = useState([])
    function bookForm(ell) { 
        setOrderedItem(ell)
        addDoc(ordersRef, { 
          id: orderedItem.id,
          title: orderedItem.info, 
          createdAt: serverTimestamp(), 
        }).then(() => { 
            setOrderedItem([]) 
        }); 
      }
    console.log(orderedItem)

    return (
        <div className="d-flex flex-wrap ">
            <div className='container p-4'>
                <h1>{junkFood[0].category}</h1>
            </div>
            {junkFood.map(ell => {
                return (
                    <div>
                        <div className="container">
                            <div className='div-products '>
                                <div>
                                    <img className='img-product' src={ell.img} alt="" />
                                </div>

                                <div className=' div-product'>
                                    <h4>{ell.name}</h4>
                                    <p className='p-product mt-3 '>{ell.info}</p>
                                    <h3 >{ell.price}</h3>
                                    <button onClick={() => bookForm(ell)} className='btn-product mt-2 '>Выбрать</button>
                                </div>
                            </div>

                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default Product