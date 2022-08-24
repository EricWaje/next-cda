import React from 'react';

const Detail = ({ img }) => {
    return (
        <div>
            <img src={img} alt="" width="150px" />
        </div>
    );
};

export const getStaticProps = async ({ params }) => {
    console.log('params: ', params);
    const URL = `https://fake-products-eric.herokuapp.com/api/products/detail/${params.id}`;
    const data = await fetch(URL);
    const info = await data.json();

    return {
        props: { ...info }, // will be passed to the page component as props
    };
};

export const getStaticPaths = async () => {
    const URL = 'https://fake-products-eric.herokuapp.com/api/products';
    const data = await fetch(URL);
    const info = await data.json();

    return {
        paths: info.map((prod) => {
            return { params: { id: prod.id } };
        }),
        fallback: 'blocking',
    };
};

export default Detail;
