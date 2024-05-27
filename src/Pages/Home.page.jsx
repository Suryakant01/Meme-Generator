import React, { useEffect, useState } from "react";
import MemeCard from "../Components/MemeCard.comp";
import { getAllMemes } from "../api/meme.api";

const HomePage = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getAllMemes()
        .then((memes) => setData(memes.data.memes))
    }, [])

    return (
        <div className="row">
           {data.map((elem) => (
            <MemeCard img = {elem.url} title = {elem.name} />

           ))}
        </div>
    )
}

export default HomePage;