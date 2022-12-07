import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'
import './HomeStyle.css';
import Slide1 from '../../img/heart.jpg';
import Slide2 from '../../img/varios.jpg';
import Slide3 from '../../img/miupia.jpg';
import Slide4 from '../../img/book.jpg';
import Hero from '../../img/Homan.jpeg';

//const slide = [Slide1, Slide2, Slide3, Slide4];

const Home = () => {

    /*const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])
*/
    return (
        <div className='Home'>

            <div className='main'>
                <section className="hero">
                    <div className="container" id="img">
                        <img src={Hero} alt="Homam" id="img-homam" />
                        <h1 id="blz">Beleza no Olhar</h1>
                        <span>Descubra como combinar sua beleza e seus óculos</span>
                    </div>
                </section>
               

            </div>


        </div>
    );
};

export default Home;