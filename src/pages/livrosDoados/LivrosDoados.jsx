import s from './livrosdoados.module.scss'
import  livro from '../../assets/img/livro.png'
import axios from 'axios'
import { useState, useEffect } from 'react'


export default function LivrosDoados(){

    const [livros, setLivros] = useState ([])

    const getLivros = async () =>{
        const response = await axios.get("https://desafio-api-flask.onrender.com/livros")
        setLivros(response.data)
    }

    useEffect(() =>{
        getLivros()
},[])

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
              {livros.map((item)=>(
                <article>
                    <img src={item.imagem_url} alt="" />
                    <h3>{item.titulo}</h3>
                    <p>{item.categoria}</p>
                    <p>{item.autor}</p>
                    
                    
                </article>

              ))}
          </section>
      </section>
  )
}
  