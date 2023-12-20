const Footer = () => {
    return     <footer className="footer">
    <div className="footer__container container">
      <h1 className="footer__title">Arjuna<span></span>Cafe</h1>
      <p className="footer__description">
      Tempat terbaik untuk bekerja <br />
      dan menjadi lebih produktif.
      </p>

      <div className="footer__content grid">
        <div className="footer__data">
          <h2 className="footer__subtitle">Alamat</h2>
          <p className="footer__information">
            Bogor <br />
            Jawa Barat, Indonesia
          </p>
        </div>
        <div className="footer__data">
          <h2 className="footer__subtitle">Kontak</h2>
          <p className="footer__information">
            +622948928492 <br />
            arjunacafe@email.com
          </p>
        </div>
        <div className="footer__data">
          <h2 className="footer__subtitle">Kami buka</h2>
          <p className="footer__information">
            Senin - Minggu <br />
            17.00 - 23.00
          </p>
        </div>
        <div className="footer__data">
          <p className="footer__newsletter-description">
          Berlangganan newsletter kami
          </p>

          <div className="footer__newsletter">
            <input
              type="email"
              placeholder="Alamat email anda"
              className="footer__input"
            />
            <button className="footer__button">
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="footer__group">
        <ul className="footer__social">
          <a href="#facebook" target="_blank" className="footer__social-link">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#instagram" target="_blank" className="footer__social-link">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#tiktok" target="_blank" className="footer__social-link">
            <i className="bx bxl-tiktok"></i>
          </a>
        </ul>

        <span className="footer__copy"> &#169; kode yp. Semua hak dilindungi undang-undang </span>
      </div>
    </div>
  </footer>
}

export default Footer;