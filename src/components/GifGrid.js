import React, { useState , useEffect } from 'react'

export const GifGrid = ({category}) => {

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
        console.log(gifs);
    }

    useEffect(() => {
        getGifs();
    },[])

    
    return (
    <div>
        <h3>
            {category}
        </h3>
    </div>
  )
}
