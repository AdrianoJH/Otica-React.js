import './StoriaStyle.css';
import Men from '../../img/Men.png'


const Storia = () => {
    return (
        <div className='Storia'>
             <img src={Men} alt="men" id="img-storia" />
            <span id="text-title">PASSIONE MAI VISTA PRIMA</span>
            <h1 id="storia-title">Una storia che merita di essere raccontata</h1>
            <span id="text">Presente sul territorio da più di 40 anni, la passione e dedizioe verso il nostro lavoro ci
                ha permesso di nullam id dolor id nibh ultricies vehicula ut elit. Donec sed odio dui Nullam quis risus
                eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et.
            </span>
        </div>
    )
}

export default Storia;