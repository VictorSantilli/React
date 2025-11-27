//Componentes Formularios
import './formulario-de-evento.estilos.css'
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from '../Botao';
import { ListaSuspensa } from '../ListaSuspensa';



export function FormularioDeEvento({ temas, aoSubmeter }: any) {

    function aoFormSubmetido(formData: any) {
        console.log('opa, está na hora de criar um novo evento', formData)
        const evento = {
            capa: formData.get('capa'),
            temas: temas.find(function (item: any) {
                return item.id == formData.get('tema')
            }),
            data: new Date(formData.get('dataEvento')),
            titulo: formData.get('nomeEvento')
        }
        aoSubmeter(evento)
    }

    return (
        <form className="form-evento" action={aoFormSubmetido}>
            <TituloFormulario>
                Preencha para criar um evento:
            </TituloFormulario>
            <div className="campos">
                <CampoDeFormulario>
                    <Label htmlFor="nomeEvento"> Qual o nome do evento ?</Label>
                    <CampoDeEntrada
                        type="text"
                        id='nomeEvento'
                        placeholder='Summer Dev hits'
                        name='nomeEvento'
                    />
                </CampoDeFormulario>
                <CampoDeFormulario>
                    <Label htmlFor="nome"> Qual o endereço da imagem de capa?</Label>
                    <CampoDeEntrada
                        type="text"
                        id='capa'
                        placeholder='http://...'
                        name='capa'
                    />
                </CampoDeFormulario>
                <CampoDeFormulario>
                    <Label htmlFor="nome"> Data do evento</Label>
                    <CampoDeEntrada
                        type="date"
                        id='dataEvento'
                        name='dataEvento'
                    />
                </CampoDeFormulario>
                <CampoDeFormulario>
                    <Label htmlFor="tema">Tema do Evento</Label>
                    <ListaSuspensa id="tema" name="tema" itens={temas} />
                </CampoDeFormulario>
            </div>
            <div className="acoes">
                <Botao >
                    Criar Evento
                </Botao>
            </div>
        </form>
    )
}