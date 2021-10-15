export default function BrandInput({brand, count, brandFilter}) {

    const buttonClicked = (ev) => brandFilter(ev)

  return (
    <div>
        <input type="radio" id={brand} name={'brands_filter'} value={brand} onClick={buttonClicked} className={'filter_input'}/>
        <label htmlFor={brand} className={'filter_input_label'}><b>{brand} ({count})</b></label><br/>
    </div>
  );
}