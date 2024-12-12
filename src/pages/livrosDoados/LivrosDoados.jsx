import s from './livrosdoados.module.scss'
import  livro from '../../assets/img/livro.png'


export default function LivrosDoados(){
  return(
      <section className={s.caixaDoados}>
          <h2>Livros Doados</h2>
          <section className={s.cardLivros}>
              <article >
                  <img src={livro} alt="imagem do livro o protagonista" />
                  <h3>O protagonista</h3>
                  <p>Susanne Andrade</p>
                  <p>Ficção</p>
              </article>
          </section>
      </section>
  )
}
  