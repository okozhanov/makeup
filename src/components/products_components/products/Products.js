import {useEffect, useState} from "react";
import Product from "../product/Product";
import {ModalWindow} from "../../basket_components/modal_window/ModalWindow";
import MiniBasket from "../../basket_components/mini_basket/MiniBasket";
import ProductsSearcher from "../products_searcher/ProductsSearcher";
import ProductsSorter from "../products_sorter/ProductsSorter";
import ProductsFilter from "../products_filter/ProductsFilter";
import ProductsPages from "../products_pages/ProductsPages";
import './Products.css'

export default function Products(props) {

    const {location: {state}} = props

    const [pageNum, setPageNum] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(15)
    const [currentProducts, setCurrentProducts] = useState(null)
    const [basketLength, setBasketLength] = useState(0)
    const [modalActive, setModalActive] = useState(false)
    const [check, setCheck] = useState(0)
    const [searchedName, setSearchedName] = useState('')
    const [searchedProducts, setSearchedProducts] = useState([])
    const [sortChek, setSortCheck] = useState(false)
    const [filteredProducts, setFilteredProducts] = useState([])
    const [filterCheck, setFilterCheck] = useState(false)

    const pageSlicer = (allProducts, pageNumber, itemsPerPage) => {
        if (allProducts) {
            const start = (pageNumber - 1) * itemsPerPage
            const end = pageNumber * itemsPerPage
            return allProducts.slice(start, end);
        }
    }

    const sorter = (products) => {

        if (sortChek === 'nameAsc') {
            products.sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                if (nameA < nameB) {
                    return -1
                }
                if (nameA > nameB) {
                    return 1
                }
                return 0
            })
        }

        if (sortChek === 'nameDesc') {
            products.sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                if (nameA < nameB) {
                    return 1
                }
                if (nameA > nameB) {
                    return -1
                }
                return 0
            })
        }

        if (sortChek === 'priceAsc') {
            products.sort((a, b) => {
                return a.price - b.price
            })
        }

        if (sortChek === 'priceDesc') {
            products.sort((a, b) => {
                return b.price - a.price
            })
        }

        return products
    }

    useEffect(() => {
        let products;

        if (searchedName.length === 0 && filterCheck === false) {
            products = state
        } else if (searchedName.length !== 0 && filterCheck === false) {
            products = searchedProducts
        } else if (filterCheck) {
            products = filteredProducts
        }

        if (sortChek !== false) {
            sorter(products)
        }

        setCurrentProducts(pageSlicer(products, pageNum, itemsPerPage))
    }, [state, pageNum, itemsPerPage, searchedProducts, sortChek, filteredProducts, filterCheck, searchedName])

    function basketClick () {
        setModalActive(true)
        if (check === 0) {
            setCheck(1)
        } else {
            setCheck(0)
        }
    }

    useEffect(() => {
        setBasketLength(localStorage.length)
    }, [check])

    return (
        <div id={'products_page'}>

            <div id={'basket_count_container'}>
                <div id={'basket_button'} onClick={basketClick}>
                    <span id={'basket_count'}>{basketLength} <i className="fas fa-shopping-basket"> </i></span>
                </div>
            </div>

            <ProductsSearcher
                searchedName={searchedName}
                setSearchedName={setSearchedName}
                filterCheck={filterCheck}
                setFilterCheck={setFilterCheck}
                filteredProducts={filteredProducts}
                setSearchedProducts={setSearchedProducts}
                state={state}
            />

            <div className="products_main">

                <div className="products_sorter_filter">
                    <ProductsSorter setSortCheck={setSortCheck}/>

                    <ProductsFilter
                        setFilterCheck={setFilterCheck}
                        setFilteredProducts={setFilteredProducts}
                        searchedProducts={searchedProducts}
                        state={state}/>
                </div>

                <div className="products">
                    <div className="products_catalog">
                        {currentProducts && currentProducts.map((thisProduct, index) => <Product
                            key={thisProduct.id}
                            thisProduct={thisProduct}
                            setBasketLength={setBasketLength}
                        />)}
                    </div>

                    <ProductsPages
                        pageNum={pageNum}
                        setPageNum={setPageNum}
                        itemsPerPage={itemsPerPage}
                        setItemsPerPage={setItemsPerPage}
                        searchedName={searchedName}
                        searchedProducts={searchedProducts}
                        state={state}
                        filterCheck={filterCheck}
                        filteredProducts={filteredProducts}
                    />
                </div>
            </div>

            <ModalWindow active={modalActive} setActive={setModalActive}>
                <MiniBasket allProducts={state} check={check} setCheck={setCheck} basketLength={basketLength}/>
            </ModalWindow>
        </div>
    );
}