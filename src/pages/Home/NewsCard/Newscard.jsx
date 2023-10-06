/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link } from "react-router-dom";



const Newscard = ({ news }) => {

    const { title, image_url, details } = news
    useEffect
    return (
        <div className="card bg-base-100 shadow-xl mb-16 border-b-2">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>
                    {
                        details.length > 200 ? <p>{details.slice(0,100)}<Link to={`/news/${news._id}`} className="text-blue-500">read more...</Link> </p> : <p>{details}</p>
                    }
                </p>
            </div>
        </div>
    );
};

export default Newscard;