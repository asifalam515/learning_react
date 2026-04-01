import { useContext } from "react";
import { ProductsItem } from "../context/ProductContext";

const Product = () => {
    const product = useContext(ProductsItem)

    return (
        <div>
            <h1>Product Found :{product.length} </h1>
            
        </div>
    );
};

export default Product