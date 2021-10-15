import './Product.css'

export default function Product({thisProduct, setBasketLength}) {

    let addToBasket = () => {
        localStorage.setItem('order' + thisProduct.id, thisProduct.id)
        setBasketLength(localStorage.length)
    }

    return (
        <div className={'product'}>
            <div className="image_container">
                <img className={'image_error'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_WjUYTLRd2DZphcilOMA7rfpUfqJ10OJ9uQ&usqp=CAU" alt="image_error"/>
                <img className={'product_image'} src={thisProduct.image_link} alt="product_img"/>
            </div>
            <h3 className={'product_name'}>{thisProduct.name}</h3>
            <h4 className={'product_brand'}>{thisProduct.brand}</h4>
            <div className="product_bottom_container">
                <p className={'product_price'}>{thisProduct.price} USD</p>
                <button className={'add_to_basket_button'} onClick={addToBasket}>add <i className="fas fa-shopping-basket"> </i></button>
            </div>

        </div>
    );
}