import { _Textarea } from './styled';

type TextareaType = {
    placeholder?: string
}

const Textarea = (data:TextareaType) => {
    return <_Textarea placeholder={data.placeholder} />
}

export default Textarea