import imagen from './imagen.png';

function Titulo(){
    return(
        <div>
            <h1>EL ACERTIJO</h1>
            <hr/>
            <img src={imagen} alt="Logo" ></img>
        </div>
    );
}

export default Titulo;