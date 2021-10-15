import {useEffect, useState} from "react";
import BasketItem from "../basket_item/BasketItem";
import './MiniBasket.css'

export default function MiniBasket({allProducts, check, setCheck}) {

    const [basket, setBasket] = useState([])

    const clearBasket = () => {

        if (window.confirm('Do you really want to clear the basket?')) {
            localStorage.clear()
            if (check === 0) {
                setCheck(1)
            } else {
                setCheck(0)
            }
        }
    }

    const deleteItem = (id) => {
        localStorage.removeItem('order' + id)
        if (check === 0) {
            setCheck(1)
        } else {
            setCheck(0)
        }
    }

    let confirmedBasket = () => {
        const q = localStorage.length
        window.alert('Congrats! You are an owner of ' + q + ' products')
        localStorage.clear()
        if (check === 0) {
            setCheck(1)
        } else {
            setCheck(0)
        }
    }

    useEffect(() => {

        let array = []

        for (let i = 0; i < localStorage.length; i++) {

            let id = +localStorage.getItem(localStorage.key(i))

            let product = allProducts.filter(item => item.id === id)
            array.push(product[0])
        }

        setBasket(array)

    }, [check, allProducts])

    return (
        <div className={'mini_basket'}>
            <i id={'basket_image'} className="fas fa-shopping-basket"> </i>
            {basket.length === 0 && <p>It's empty!</p>}
            {basket.map(thisProduct => <BasketItem key={thisProduct.id} thisProduct={thisProduct} deleteItem={deleteItem}/>)}
            {/*<button className={'clear_basket'} onClick={clearBasket}>clear basket</button>*/}
            <div className="basket_buttons">
                <button className={'clear_basket'} onClick={clearBasket}>clear basket</button>
                <button className={'confirm_basket'} onClick={confirmedBasket}>confirm</button>
            </div>
        </div>
    );
}