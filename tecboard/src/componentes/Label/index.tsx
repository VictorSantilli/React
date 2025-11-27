import './label.estilos.css'

interface LabelProps {
    children: React.ReactNode; // or string, if you only expect text
    htmlFor: string;
}

export function Label({ children, htmlFor }: LabelProps) {
    return (
        <label htmlFor={htmlFor} className='label'>
            {children}
        </label>
    )
}