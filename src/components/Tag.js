import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {

    const [tag, setTag] = useState("");
    const {gif, loading, fetchData} = useGif(tag);
    


    function clickH() {
        fetchData(tag);
    }
    function changeH(event) {
        setTag(event.target.value);
    }
    return(
        <div className="w-1/2  bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">

            <h1 className="mt-[15px] text-2xl underline uppercase font-bold">RANDOM {tag} GIF</h1>

            {
                loading ? (<Spinner></Spinner>) : (<img src={gif} width="450" alt=""></img>)
            }

            <input className="w-10/12 text-lg py-2 rounded-lg mb-[1px] text-center" onChange={changeH} value={tag}></input>

            <button className="w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]" onClick={clickH}>GENERATE</button>

        </div>
    );
}

export default Tag