import './App.css';
import Products from "./components/products_components/products/Products";
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    // Link,
    // withRouter
} from "react-router-dom";

import {useEffect, useState} from "react";
import {getProducts} from "./services/products.api.services";
import Basket from "./components/basket_components/basket/Basket";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {

    const [products, setProducts] = useState(null)

    useEffect(() => {
        getProducts().then(value => setProducts([...value]))
    }, [])

    return (
        <div className="App">
            <Router>

                <Header products={products}/>

                <Route path={'/products'} component={Products}/>
                <Route path={'/basket'} component={Basket}/>

                <Footer/>
            </Router>
        </div>
    );
}

export default App;
