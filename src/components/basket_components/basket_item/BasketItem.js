import './BasketItem.css'

export default function BasketItem({thisProduct, deleteItem}) {

    let deleteButton = () => deleteItem(thisProduct.id)

    return (
        <div className={'basket_item'}>
            <p className={'basket_item_price'}>{thisProduct.price} USD</p>
            <p className={'basket_item_name'}>{thisProduct.name}</p>
            <p className={'basket_item_delete'} onClick={deleteButton}><i className="fas fa-trash-alt"> </i></p>
        </div>
    );
}