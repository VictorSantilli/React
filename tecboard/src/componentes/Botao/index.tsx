import './botao.estilos.css'

export function Botao({ children }: any) {
    return (
        <button className='botao'>
            {children}
        </button>
    )
}