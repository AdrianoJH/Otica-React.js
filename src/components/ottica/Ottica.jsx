import './OtticaStyle.css';
import Oculos1 from '../../img/Óculos1.png';
import Vector from '../../img/Vector.png';
import Vector1 from '../../img/Vector 1.png';
import Vector2 from '../../img/Vector 2.png';
import Moscot from '../../img/moscot.png';


const Ottica = () => {
    return (
        <div className='Ottica'>
             <span id="text-ottica">TORNERAI PER FORZA</span>
            <h1 id="title-ottica">La nostra Ottica</h1>
            <span id="txt-ottica">Con più di 37 famosi brand e con 12 marchi provenienti da Ottiche artigianali del
                territorio siamo ona dellle realtà locali più fornite. I nostri professionisti ti aiuteranno a trovare
                la montattura più adatta alle tue esineze sapendo accontetare anche gli occhi più attenti.
            </span>
            <img src={Oculos1} alt="oculos1" id="img-oculos1" />

            <h3 id="txt-baixo">Tra i marchi più famosi troverai</h3>

            <img src={Vector} alt="rayban" id="rayban" />
            <img src={Moscot} alt="Moscot" id="moscot" />
            <img src={Vector2} alt="TomFord" id="tomFord" />
            <img src={Vector1} alt="OliverPeoples" id="oliver" />
        </div>
    )
}

export default Ottica;
