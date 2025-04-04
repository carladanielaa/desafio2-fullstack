import face from"../../assets/img/face.png"
import instagram from"../../assets/img/instagram.png"
import twitter from"../../assets/img/twitter.png"
import linkedin from"../../assets/img/linkedin.png"
import youtube from"../../assets/img/youtube.png"
import s from "./footer.module.scss"

export default function Footer() {
    return (
      <footer>
        <section className={s.boxSocial}>
          <h3>4002-8922</h3>
          <nav>
            <a href="http://"><img src={face} alt="" /></a>
            <a href="http://"><img src={twitter} alt="" /></a>
            <a href="http://"><img src={youtube} alt="" /></a>
            <a href="http://"><img src={linkedin} alt="" /></a>
            <a href="http://"><img src={instagram} alt="" /></a>
          </nav>
        </section>

        <section className={s.boxTexto}>
          <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
        </section>
      </footer>
    )
  }
  