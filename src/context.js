import React, { createContext, useState, useEffect } from 'react'
import { getDocs, colRef } from "./conponents/Config/Config";

const context = createContext()
/* const dataUrl = 'http://81.95.232.205:8010' */

const ContextProvider = ({ children }) => {
    // firebase 
    const [productData, setProductData] = useState([]);
    const [ordersData, setOrdersData] = useState([]);

    
    useEffect(() => {
        getDocs(colRef)
            .then((snapshot) => {
                let junkFoodData = [];
                snapshot.docs.forEach((doc) => {
                    junkFoodData.push({ ...doc.data(), id: doc.id });
                });
                setProductData(junkFoodData);
                console.log(junkFoodData);
            }).catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        getDocs(colRef)
            .then((snapshot) => {
                snapshot.docs.forEach((doc) => {
                    ordersData.push({ ...doc.data(), id: doc.id });
                });
                setOrdersData(ordersData);
                console.log(ordersData);
            }).catch((err) => console.log(err));
    }, []);


    return (
        <context.Provider value={{ productData, setProductData, ordersData}}>
            {children}
        </context.Provider>
    )
}
export { context, ContextProvider } 















/*     const [productsData, setProductsData] = useState([]);
    const [productsDataCopy, setProductsDataCopy] = useState([]);

    const [categoryData, setCategoryData] = useState([]);
    const [categoryDataCopy, setCategoryDataCopy] = useState([]);

    const getCategoryData = async () => {
        const response = await fetch(dataUrl + "/category");
        const data = await response.json();
        setCategoryData(data)
        console.log(data);
    }

    const getProductData = async () => {
        const response = await fetch(dataUrl + "/Burger");
        const data = await response.json();
        setProductsData(data)
        console.log(data)
    }

    useEffect(() => {
        getProductData()
    }, []);

    useEffect(() => {
        getCategoryData()
    }, []); */


/* setProductsDataCopy, categoryData, setCategoryData, categoryDataCopy, setCategoryDataCopy  */