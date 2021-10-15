import './ProductsSorter.css'

export default function ProductsSorter({setSortCheck}) {

    const sortFunc = (ev) => {
        setSortCheck(ev.target.value)
    }

    return (
      <div className={'sorter'}>

          <p className={'sort_label'}>Sort by</p>

          <input type="radio" id={'nameAsc'} name={'order'} value={'nameAsc'} onClick={sortFunc} className={'sort_input'}/>
          <label htmlFor="{'nameAsc'}" className={'sort_input_label'}><b>Name (A-Z)</b></label><br/>
          <input type="radio" id={'nameDesc'} name={'order'} value={'nameDesc'} onClick={sortFunc} className={'sort_input'}/>
          <label htmlFor="{'nameDesc'}" className={'sort_input_label'}><b>Name (Z-A)</b></label><br/>
          <input type="radio" id={'priceAsc'} name={'order'} value={'priceAsc'} onClick={sortFunc} className={'sort_input'}/>
          <label htmlFor="{'priceAsc'}" className={'sort_input_label'}><b>Price</b> (<i className="fas fa-arrow-up"> </i>)</label><br/>
          <input type="radio" id={'priceDesc'} name={'order'} value={'priceDesc'} onClick={sortFunc} className={'sort_input'}/>
          <label htmlFor="{'priceDesc'}" className={'sort_input_label'}><b>Price</b> (<i className="fas fa-arrow-down"> </i>)</label><br/>
      </div>
  );
}