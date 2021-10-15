import {useEffect, useState} from "react";
import BasketItem from "../basket_item/BasketItem";
import './Basket.css'

export default function Basket(props) {

    let {location: {state}} = props

    const [basket, setBasket] = useState([])
    const [check, setCheck] = useState(0)

    let clearBasket = () => {

        if (window.confirm('Do you really want to clear the basket?')) {
            localStorage.clear()
            if (check === 0) {
                setCheck(1)
            } else {
                setCheck(0)
            }
        }
    }

    let deleteItem = (id) => {
        localStorage.removeItem('order' + id)
        if (check === 0) {
            setCheck(1)
        } else {
            setCheck(0)
        }
    }

    const confirmedBasket = () => {
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

            let product = state.filter(item => item.id === id)
            array.push(product[0])
        }

        setBasket(array)

    }, [check, state])

    return (
        <div className={'basket'}>
            <i id={'basket_image'} className="fas fa-shopping-basket"> </i>
            {basket.length === 0 && <p>It's empty!</p>}
            {basket.map(thisProduct => <BasketItem key={thisProduct.id} thisProduct={thisProduct} deleteItem={deleteItem}/>)}
            <div className="basket_buttons">
                <button className={'clear_basket'} onClick={clearBasket}>clear basket</button>
                <button className={'confirm_basket'} onClick={confirmedBasket}>confirm</button>
            </div>
        </div>
    );
}