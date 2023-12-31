import { useContext } from "react";

import { ProductsContext } from "../../context/product.context";

import ProductCar from "../../components/product-card/product-card.component";

import './shop.styles.scss';



const Shop = () =>{
    const {products} = useContext(ProductsContext);
    
return(
    <div className="products-container">
        {products.map((product) =>(
          <ProductCar key={product.id} product={product} />
        ))}
    </div>
)
}

export default Shop;