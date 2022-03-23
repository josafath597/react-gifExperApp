import React, { useState , useEffect } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    const [images, setImages] = useState([])

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Ouran High School Host Club&limit=30&api_key=wUuOqDqYhaY2T0k6E9nBm5RotSG2ZcV9';
        const resp = await fetch( url );
        const {data} = await resp.json();
        const gifs =  data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            } 
        })
        setImages( gifs )
    }

    useEffect(() => {
        getGifs();
    },[])

    
    return (
        <>

        <h3> {category} </h3>
        <div className="card-grid">
      
        {
                images.map( img =>(
                    <GifGridItem
                    key={img.id}
                    { ...img } 
                />
                ))
        }
       
        </div>
        </>
  )
}
