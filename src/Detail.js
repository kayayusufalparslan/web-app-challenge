import React from "react";
import { useLocation } from "react-router-dom";
import { Card } from "react-bootstrap";

function Detail({ movie }) {
    let data = useLocation();

    var arkaPlan = ` https://image.tmdb.org/t/p/w500${data.state.movie.backdrop_path} `
    return (
        <div style={{
            backgroundImage: `url(${arkaPlan})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>
            <div>

                <Card className="m-4" key={data.state.movie.id} style={{ width: "20rem" }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${data.state.movie.poster_path}`} />
                    <Card.Body >
                        <Card.Title style={{color: "red"}}>{data.state.movie.title}</Card.Title>
                        <Card.Text>Overview: {data.state.movie.overview}</Card.Text>
                        <Card.Text>Relase Date: {data.state.movie.release_date}</Card.Text>
                        <Card.Text>Vote Average:  {data.state.movie.vote_average}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Detail;
