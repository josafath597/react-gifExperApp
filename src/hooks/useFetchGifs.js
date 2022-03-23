import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [first, setFirst] = useState({
        data:[],
        loading: true
    });

    useEffect( () => {
        getGifs(category)
            .then(imgs => {

                setTimeout(() => {
                    console.log(imgs)
                    
                    setFirst({
                        data: imgs,
                        loading: false
                    });

                }, 3000);


            })

    }, [ category ])

    

    return first;
}