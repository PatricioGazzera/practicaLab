function Books(props){
    return(
        <div>
            <h1>Libro</h1>
            <p>Nombre {props.title}</p>
            <p>Rating {props.rating}</p>
        </div>
    )
}

export default Books