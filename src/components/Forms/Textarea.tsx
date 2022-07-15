import { _Textarea } from './styled';

// interfaces
import { TextareaType } from '../../interfaces/Textarea';

const Textarea = (data:TextareaType) => {
    return <_Textarea placeholder={data.placeholder} />
}

export default Textarea