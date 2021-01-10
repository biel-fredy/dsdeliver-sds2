import ProductCard from "./ProductCard";
import './styles.css';
import { Product } from "./types";

type Props = {
    products: Product[];
}

function ProducstList( {products} : Props){
    return(
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProducstList;