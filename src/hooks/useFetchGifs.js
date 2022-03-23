import { useState } from "react"

export const useFetchGifs = () => {
    const [first, setFirst] = useState({
        data:[],
        loading: true
    });

    setTimeout(() => {
        setFirst({
            data: [1,2,3,4,5,6,7,8,9,10],
            loading: false
        });
    }, 3000);

    return first;
}