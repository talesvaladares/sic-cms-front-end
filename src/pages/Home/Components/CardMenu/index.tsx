import { Menu } from '../../index'
import { 
  Container,
  BoxLeft,
  BoxRight,
  Button
} from './styles';

type CardMenuProps = Menu;

export function CardMenu( props: CardMenuProps) {

  const {image, codigoRecurso, faImage, id, menuPaiId, ordem, rota, sistema, titulo} = props;

 return (
  <Container>
    <header>
      <BoxLeft>
        <span>Id: {id}</span>
        <span>Título: {titulo}</span> 
        <span>Ordem de exibição: {ordem === null ? 'Sem ordem' : ordem}</span>
        <span>Sistema: {sistema}</span>
        <span>Código recurso: {codigoRecurso === null ? 'Sem código' : codigoRecurso}</span>
        <span>Rota: {rota === null ? 'Sem rota' : rota}</span>
      
      </BoxLeft>
      <BoxRight>
        
        <span>Menu pai: {menuPaiId === null ? 'Sem menu pai' : menuPaiId}</span>
        <span>Imagem: {image === null ? 'Sem imagem' : image}</span>
        <span>Fa Imagem: {faImage === null ? 'Sem imagem' : faImage}</span>
      </BoxRight>
    </header>
    <footer>
      <Button type='button'>Editar</Button>
      <Button type='button'>Excluir</Button>
    </footer>
  </Container>
 )
}