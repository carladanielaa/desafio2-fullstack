import S from "./queroDoar.module.scss"
import livro from"../../assets/img/Frame.png"

export default function QueroDoar() {
    return (
      <section className={S.principal}>
        <section className={S.container}>
          <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
          <form action="">
            <div>
              <img src={livro} alt="Imagem de Livro" />
              <h3>Informações do Livro</h3>
            </div>
            <input type="text"  placeholder="Titulo" />
            <input type="text"  placeholder="categoriar"/>
            <input type="text"  placeholder="Autor"/>
            <input type="text"  placeholder="link da imagem"/>
            <input type="submit" value="Doar" />

          </form>
        </section>
      </section>
    );
  }