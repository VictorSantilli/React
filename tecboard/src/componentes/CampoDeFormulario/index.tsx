import './campo-formulario.estilos.css'
import type { ReactNode } from "react";

type childrenProps = {
    children: ReactNode;
};

export function CampoDeFormulario({ children }: childrenProps) {
    return (
        <fieldset className='campo-form'>
            {children}
        </fieldset>
    )
}