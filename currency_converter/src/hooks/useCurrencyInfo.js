import { use, useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
    useEffect(()=>{
        const [data, setData] = useState({});
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((res)=>setData(res[currency]))
        console.log(data)
    },[currency])
    console.log(data)
    return data
}

export default useCurrencyInfo;


// the api we are using is https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json