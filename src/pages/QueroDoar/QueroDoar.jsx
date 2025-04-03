import S from "./queroDoar.module.scss"; // Importa o arquivo de estilos em SCSS
import livro from "../../assets/img/Frame.png"; // Importa a imagem de um livro
import axios from "axios"; // Importa a biblioteca Axios para fazer requisições HTTP
import { useState } from "react"; // Importa o hook useState do React para gerenciar estado

// Componente principal "QueroDoar"
export default function QueroDoar() {
  // Declaração de estados para armazenar informações do livro
  const [titulo, setTitulo] = useState(""); // Estado para o título do livro
  const [categoria, setCategoria] = useState(""); // Estado para a categoria do livro
  const [autor, setAutor] = useState(""); // Estado para o autor do livro
  const [imagem_url, setImagem_url] = useState(""); // Estado para a URL da imagem do livro

  // Função para enviar os dados do formulário
  const enviarDados = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
    const urlApi = "https://desafio-api-flask.onrender.com/doar"; // URL da API para onde os dados serão enviados
  
    // Objeto contendo os dados a serem enviados
    const dadosEnviar = {
      titulo,
      categoria,
      autor,
      imagem_url,
    };
  
    console.log("Dados a serem enviados:", dadosEnviar); // Log dos dados que serão enviados
  
    try {
      // Realiza a requisição POST para a API
      const response = await axios.post(urlApi, dadosEnviar);
      console.log("Resposta da API:", response); // Log da resposta da API
      alert("Livros Enviados"); // Alerta ao usuário que os livros foram enviados

      // Reseta os estados após o envio
      setTitulo("");
      setCategoria("");
      setAutor("");
      setImagem_url("");
      
    } catch (error) {
      // Trata erros que possam ocorrer durante o envio
      console.error("Erro ao enviar dados:", error.response ? error.response.data : error.message);
      alert(`Erro ao enviar os dados: ${error.response ? error.response.data : error.message}`);
    }
  };

  // Funções para capturar as entradas do usuário
  const capturaTitulo = (e) => {
    setTitulo(e.target.value); // Atualiza o estado do título
  };
  const capturaCategoria = (e) => {
    setCategoria(e.target.value); // Atualiza o estado da categoria
  };
  const capturaAutor = (e) => {
    setAutor(e.target.value); // Atualiza o estado do autor
  };
  const capturaImagem_url = (e) => {
    setImagem_url(e.target.value); // Atualiza o estado da URL da imagem
  };

  // Renderização do componente
  return (
    <section className={S.principal}> {/* Seção principal com estilos */}
      <section className={S.container}> {/* Seção do formulário */}
        <h2>
          Por favor, preencha o formulário com suas informações e as
          informações do Livro
        </h2>

        <form onSubmit={enviarDados}> {/* Formulário que chama a função enviarDados ao ser enviado */}
          <div>
            <img src={livro} alt="Imagem de Livro" /> {/* Imagem do livro */}
            <h3>Informações do Livro</h3>
          </div>
          {/* Campos de input para coletar informações do livro */}
          <input type="text" placeholder="Título" onChange={capturaTitulo} value={titulo} />
          <input type="text" placeholder="Categoria" onChange={capturaCategoria} value={categoria} />
          <input type="text" placeholder="Autor" onChange={capturaAutor} value={autor} />
          <input type="text" placeholder="Link da imagem" onChange={capturaImagem_url} value={imagem_url} />

          <input className={S.doar} type="submit" value="Doar" /> {/* Botão para enviar o formulário */}
        </form>
      </section>
    </section>
  );
}