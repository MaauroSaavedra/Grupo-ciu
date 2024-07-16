export default function CuadroTexto(props){
    return(
    <section id="nosotros">
        <h3>{props.titulo}</h3>
        <p>{props.texto}</p>
        <p>{props.texto2}</p>
    </section>
    )
}