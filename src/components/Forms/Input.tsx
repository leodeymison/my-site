import { _Input } from './styled';

type InputType = {
    type: string,
    placeholder?: string,
    value?: string
}

const Input = (data: InputType) => {
    return <_Input type={data.type} placeholder={data.placeholder} value={data.value} />
}

export default Input