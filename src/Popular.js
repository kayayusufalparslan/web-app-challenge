import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom';

function Popular() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=ac0e52e9237977c37f3ec69bfbcc7d6e&language=en-US&page=1")
            .then((res) => res.json())
            .then((data) => setData(data.results));
    }, []);



    return (
        <div>
            <div style={{display: "flex", width:"100%", justifyContent: "center", color: "darkcyan"}} className="center">
                <h2>Popular Movies</h2>
            </div>   
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {data.map((movie) => (
                    <Card className="m-4" key={movie.id} style={{ width: "20rem" }}>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                        <Card.Body >
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>Relase Date: {movie.release_date}</Card.Text>
                            <Card.Text>Vote Average: {movie.vote_average}</Card.Text>
                            <Link to={{pathname: "/detail", state: {movie: movie}}} className="btn btn-primary">Show Details </Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Popular;
