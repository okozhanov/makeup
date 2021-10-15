import './ProductsPages.css'

export default function ProductsPages({
                                          pageNum,
                                          setPageNum,
                                          itemsPerPage,
                                          setItemsPerPage,
                                          searchedProducts,
                                          searchedName,
                                          state,
                                          filterCheck,
                                          filteredProducts
                                      }) {

    const pageNumPlus = (q) => {

        if (searchedName.length === 0 && filterCheck === false && pageNum + q < (state.length / itemsPerPage)) {
            setPageNum(pageNum + q)
        }

        if (filterCheck && pageNum + q < (filteredProducts.length / itemsPerPage)) {
            setPageNum(pageNum + q)
        }

        if  (searchedName.length !== 0 && filterCheck === false && pageNum + q < (searchedProducts.length / itemsPerPage)) {
            setPageNum(pageNum + q)
        }
    }

    const pageNumMinus = () => {
        if (pageNum !== 1) {
            setPageNum(pageNum - 1)
        }
    }

  return (
    <div className={'pages'}>

        <div className="pages_buttons">
            <button className={'page_button'} onClick={() => {setPageNum(1)}}>First</button>
            <button className={'page_button'} onClick={pageNumMinus}>Previous</button>
            <span className={'current_page'}>page {pageNum}</span>
            <button className={'page_button'} onClick={() => pageNumPlus(1)}>{pageNum + 1}</button>
            <button className={'page_button'} onClick={() => pageNumPlus(2)}>{pageNum + 2}</button>
            <button className={'page_button'} onClick={() => pageNumPlus(3)}>{pageNum + 3}</button>
            <button className={'page_button'} onClick={() => pageNumPlus(4)}>{pageNum + 4}</button>
            <button className={'page_button'} onClick={() => pageNumPlus(1)}>Next</button>
        </div>

        <select className={'items_per_page'}
                onChange={(ev) => setItemsPerPage(ev.target.value)} name="pages" id="pages">
            <option value="15">15 items per page</option>
            <option value="20">20 items per page</option>
            <option value="25">25 items per page</option>
            <option value="30">30 items per page</option>
        </select>
    </div>
  );
}