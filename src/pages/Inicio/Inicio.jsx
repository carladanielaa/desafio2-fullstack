
import s from "./inicio.module.scss"
import balance from"../../assets/img/balance.png"
import menino from"../../assets/img/meninolivro.png"
import roda from"../../assets/img/rodaamigos.png"
import transform from"../../assets/img/transform.png"



export default function Inicio() {
    return (
      <main>
          <section className={s.banner}>
            <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
          </section>
          
          <section className={s.devoDoar}>
            <div>
                <h2> Por que devo doar?</h2>
            </div>
          </section>

          <section className={s.boxCard}>
          <article>
            <img src={roda} alt="Criança em circulo" />
            <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
          
          </article>
          <article>
            <img src={menino} alt="Menino com o livro" />
            <p> Estimula o hábito da leitura e o aprendizado contínuo.</p>
          
          </article>
          <article>
            <img src={transform} alt="Imagem de união" />
            <p> Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
          
          </article>
          <article>
            <img src={balance} alt="Imagem de balança" />
            <p> Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
          
          </article>
          
          </section>
              
      </main>
    )
  }
  