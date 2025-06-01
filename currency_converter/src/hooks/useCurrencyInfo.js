import { use, useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({})
    useEffect(()=>{
        ;
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((res)=>setData(res[currency]))
        console.log(data)
    },[currency])
    return data
}

export default useCurrencyInfo;


// the api we are using is https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json