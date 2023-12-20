 import {Fade} from 'react-reveal'
 
 const Special = () => {
    return   <div className="special section container" id="special">
    <div className="special__container">
      <div className="special__box">
        <Fade left delay={500}> 
        <h2 className="section__title">
        Kopi terbaik yang membuat Anda <br />
        senang dan menghiburmu!
        </h2>
        </Fade>
      </div>

      <div className="special__category">
        <Fade bottom delay={800}>
        <div className="special__group">
          <div className="special__img__border">
            <img
              src="./media/coffee-beans.png"
              alt=""
              className="special__img"z
            />
          </div>
          <h3 className="special__title"> Kopi Asli</h3>
          <p className="special__description">
          Kami memilih biji kopi terbaik, untuk rasa yang sebenarnya.
          </p>
        </div>
        <div className="special__group">
          <div className="special__img__border">
            <img
              src="./media/hot-drink.png"
              alt=""
              className="special__img"
            />
          </div>
          <h3 className="special__title"> Kopi Panas</h3>
          <p className="special__description">
          Nikmati kopi Anda dengan hangat dengan cita rasa yang sesungguhnya.
          </p>
        </div>
        <div className="special__group">
          <div className="special__img__border">
            <img
              src="./media/coffee-cup.png"
              alt=""
              className="special__img"
            />
          </div>
          <h3 className="special__title"> Es Kopi</h3>
          <p className="special__description">
          Nikmati kopi Anda dengan es dengan rasa yang sebenarnya.
          </p>
        </div>
      </Fade>
      </div>
    </div>
  </div>
 }

 export default Special;