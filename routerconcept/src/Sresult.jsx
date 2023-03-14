import React from 'react'

const Sresult = (props)=>{
    const item = props.searchItem;
    const img = `https://source.unsplash.com/700x400/?${item}`;
    return(
        <>
            <img src={img} alt='Search' />
        </>
    )
}

export default Sresult