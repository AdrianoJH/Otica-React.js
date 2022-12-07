import './VisiteStyle.css';
import Oculos2 from '../../img/Óculos2.png';

const Visite = () => {
    return (
        <div className='Visite'>
                <img src={Oculos2} alt="Visite oculistiche" id="img-visite" />
            <span id="txt-visite">CI PRENDEREMO CURA DEI TUOI OCCHI</span>
            <h1 id="title-visite">Una vista 360°</h1>
            <span id="txt2-visite">Oculist pronti a nullam quis risus eget uma mollis ornare vel eu leo. Aenean lacinia
                bibedum nulla sed consectetur. Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus,
                nisi erat porttitor liguia, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue.
                Nullam quis risus eget urna mollis ornare vel eu leo.
            </span>
            <button class="btn btn-primary" type="button" id="btn-visite">
                <p id="txt-btn">Prenota una visita</p>
            </button>
        </div>
    )
}

export default Visite;