import { TextareaStyled } from './styled';

// interfaces
import { TextareaType } from '../../interfaces/Textarea';

const Textarea = (data:TextareaType) => {
    return <TextareaStyled placeholder={data.placeholder} />
}

export default Textarea