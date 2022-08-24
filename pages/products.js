import Link from 'next/link';
import React from 'react';

const Products = (props) => {
    console.log(props);

    return (
        <div>
            {props.info.map((prod) => (
                <div key={prod.id}>
                    <img src={prod.img} alt="" />
                    <Link href={`/detail/${prod.id}`}>
                        <a>Detalle</a>
                    </Link>
                </div>
            ))}
        </div>
    );
};

// export const getServerSideProps = async () => {
//     const URL = 'https://fake-products-eric.herokuapp.com/api/products';
//     const data = await fetch(URL);
//     const info = await data.json();

//     return {
//         props: { info }, // will be passed to the page component as props
//     };
// };

export const getStaticProps = async () => {
    const URL = 'https://fake-products-eric.herokuapp.com/api/products';
    const data = await fetch(URL);
    const info = await data.json();

    return {
        props: { info }, // will be passed to the page component as props
    };
};

export default Products;
