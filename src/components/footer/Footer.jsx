import './FooterStyle.css';
import { FaLongArrowAltRight } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer" id="fot">
            <h3 id="ottica-rub">Ottica Rubele</h3>
            <div className="col md-4" id="col1">
                <li>Storia</li>
                <li>Ottica</li>
                <li>Visite oculistiche</li>
            </div>
            <h5 id="orari">Orari</h5>
            <div className="col md-2" id="col2">
                <li>Lunari-Venerdi</li>
                <li>9:30-12:30 e 14:30-18:30</li>
                <div className="col md-2" id="col-2">
                    <li>Sabato</li>
                    <li>9:30-17:30</li>

                </div>

            </div>
            <h5 id="indi">Indicazioni</h5>
            <div className="col md-4" id="col3">
                <li>Via Corsini 19c, 37199 Verona</li>
                <li><a href="https://goo.gl/maps/q3DJ3ntpmmpPuWFj9" id="maps">April Google Maps </a></li>
                <li id='arrow'><FaLongArrowAltRight /></li>
            </div>
            <span id="final">Ottica Rubele + C.F.e P.IVA 00488190227 = Creditd <a href="#" id="mm">Michael Martineli</a></span>

        </div>
    )
}


export default Footer;