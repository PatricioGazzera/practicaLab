function Movies(props){
    return(
        <div>
            <h1>Peliculas</h1>
            <p>Nombre {props.movieTitle}</p>
            <p>Rating {props.movieRating}</p>
        </div>
    )
}

export default Movies