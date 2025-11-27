import { useState } from 'react'
import './App.css'
import { Banner } from './componentes/Banner'
import { CardEvento } from './componentes/CardEvento'
import { FormularioDeEvento } from './componentes/FormularioDeEvento'
import { Tema } from './componentes/Tema'

function App() {


  const temas = [
    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'deveops'
    },
    {
      id: 4,
      nome: 'inteligencia artificial'
    },
    {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    },
  ]


  const [eventos, setEventos] = useState([
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      temas: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    },
  ])


  function adicionarEvento(evento: any) {
    setEventos([...eventos, evento])
    console.log(eventos)
  }

  // renderizaão condicional usando &&
  return (
    <main>
      <header>
        <img src="/logo.png" alt="tecnoboard" />
      </header>
      <Banner />
      <FormularioDeEvento
        temas={temas}
        aoSubmeter={adicionarEvento}
      />
      <section className="container">

        {temas.map(function (tema) {
          if (!eventos.some(function (evento) {
            return evento.temas.id == tema.id
          })) {
            return null
          }
          return (
            <section key={tema.id}>
              <Tema tema={tema} />
              <div className="eventos">
                {eventos
                  .filter(function (evento) {
                    return (
                      evento.temas.id == tema.id
                    )
                  })
                  .map(function (evento: any, index: any) {
                    return (
                      <CardEvento evento={evento} key={index} />
                    )
                  })}

              </div>
            </section>
          )
        })}
      </section>

    </main>
  )
}

export default App
