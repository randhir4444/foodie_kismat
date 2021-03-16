import React,{useEffect,useState,} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Card(props) {
    // const [name1, setname1] = useState([]);
    // const [photo, setphoto] = useState("");
    // useEffect(() => {
    //     async function getData(){
    //         const res=await axios.get(`https://randomuser.me/api/`);
    //          setphoto(res.data.results[0].picture.large);
    //          setname1(res.data.results[0].name.first);
    //          console.log(res);
    //     }
    //     getData();
    // },[]);
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img class="card-img-top" src={props.imgsrc} alt="Card cap" />
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">{props.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/" class="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
