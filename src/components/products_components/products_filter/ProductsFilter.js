import './ProductsFilter.css'
import BrandInput from "../brand_input/BrandInput";

export default function ProductsFilter({searchedProducts, setFilterCheck, setFilteredProducts, state}) {

    const brandFilter = (ev) => {
        let products;
        let filtered;

        if (searchedProducts.length === 0) {
            products = state
        } else {
            products = searchedProducts
        }

        if (ev.target.value === 'all') {
            filtered = products
            setFilterCheck(false)
        } else {
            filtered = products.filter(product => product.brand === ev.target.value)
            setFilterCheck(true)
        }
        setFilteredProducts(filtered)
    }

    const brands = [...new Set(state.map(item => item.brand))].sort()

    let brandsCount = [];
    let allBrandsCount = 0;

    for (const brand of brands) {
        if (brand !== null) {
            const thisBrandCount = state.filter(item => item.brand === brand).length
            brandsCount.push(thisBrandCount)
            allBrandsCount += thisBrandCount
        }
    }

    return (
        <div className={'filter'}>

            <p className={'filter_label'}>Filter by</p>

            <input type="radio" id={'all'} name={'brands_filter'} value={'all'} onClick={brandFilter}
                   className={'filter_input'}/>
            <label htmlFor="{'all'}" className={'filter_input_label'}><b>all brands ({allBrandsCount})</b></label><br/>

            {brands.filter(brand => brand !== null).map((brand, index) => <BrandInput brand={brand}
                                                                                      count={brandsCount[index]}
                                                                                      brandFilter={brandFilter}
                                                                                      key={index}/>)}
        </div>
    );
}