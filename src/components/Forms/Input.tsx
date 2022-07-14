import { _Input } from './styled';

// interfaces
import { InputType } from '../../interfaces/Input';

const Input = (data: InputType) => {
    return <_Input type={data.type} placeholder={data.placeholder} value={data.value} />
}

export default Input