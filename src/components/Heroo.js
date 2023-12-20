import { Fade } from 'react-reveal';

const Heroo = () => {
    
    const orderNow = () => {
        window.scrollTo({
            top: 1150,
            behavior: 'smooth'
        })
    }
    
    return (
        <Fade top>
            <section
                className="hero section"
                id="home"
                style={{ backgroundImage: `url(./media/back.jpg)` }}
            >
                <h1 className="hero__title">
                    Haloo <br />
                    Mau Ngopi Apa <br />
                    Hari ini ?
                </h1>
                <button className="hero__button" onClick={orderNow}>Order Sekarang</button>
            </section>
        </Fade>
    );
}

export default Heroo;
