import './ProductsSearcher.css'

export default function ProductsSearcher({
                                             searchedName,
                                             setSearchedName,
                                             filterCheck,
                                             setFilterCheck,
                                             filteredProducts,
                                             setSearchedProducts,
                                             state
                                         }) {

    const searcher = (ev) => {
        setSearchedName(ev.target.value)

        let products;

        if (filterCheck) {
            products = filteredProducts
        } else {
            products = state
        }

        const searched = products.filter(product => product.name.toLowerCase().includes(ev.target.value.toLowerCase()))
        setSearchedProducts(searched)
        setFilterCheck(false)
    }

    return (
        <div id={'products_searcher'}>
            <h4>search all you want</h4>
            <form>
                <input className={'search_input'} type="text" onChange={searcher} value={searchedName}/>
            </form>
        </div>
    );
}