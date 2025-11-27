import './titulo-formulario.estilos.css'
import type { ReactNode } from "react";

type childrenProps = {
    children: ReactNode;
};

export function TituloFormulario({ children }: childrenProps) {
    return (
        <h2 className='titulo-form'>{children}</h2>
    )
}
