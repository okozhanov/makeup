import {Link} from "react-router-dom";
import './Header.css'

export default function Header({products}) {
  return (
      <div className={'header'}>

        <div id={'menu'}>
          {!products && <p id={'loading'}>Loading...</p>}

          {products && <Link to={{pathname: '/products', state: products}}>
            <p className={'header_link'}>Products</p>
          </Link>}

          {products && <Link to={{pathname: '/basket', state: products}}>
            <p className={'header_link'}>Basket</p>
          </Link>}

        </div>
        
        {products && <div id={'main'}>
          <img id={'main_img'} src="https://images.unsplash.com/photo-1611781409837-a7c20eb1a298?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fG1ha2UlMjB1cHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" alt="main_img"/>

          <h1 id={'slogan'}>Beauty<br/> is a way<br/> of life.</h1>
          {products && <Link to={{pathname: '/products', state: products}}>
            <p className={'main_link'}>Start the way</p>
          </Link>}
        </div>}
      </div>
  );
}