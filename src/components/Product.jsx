import React, { use } from 'react';
import ProductCard from './ProductCard';

const Product = ({productPromise,carts,setCarts}) => {
     const products= use(productPromise);

    return (
        <div className=" max-w-7xl mx-auto">
             <div className="grid  md:grid-cols-2  lg:grid-cols-3 gap-5 mt-10">
                {products.map((product,index) => (
                    <ProductCard key={product.id || index}
                                 product={product} 
                                 carts={carts} 
                                 setCarts={setCarts} />
                ))}
            </div>
        </div>
    );
};

export default Product;