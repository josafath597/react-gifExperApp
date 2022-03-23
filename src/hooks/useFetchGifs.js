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


                    setFirst({
                        data: imgs,
                        loading: false
                    });



            })

    }, [ category ])

    

    return first;
}