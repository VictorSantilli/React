import './tema.estilos.css'

export function Tema({ tema }: any) {
    return <h3 className='titulo-tema'>{tema.nome}</h3>
}