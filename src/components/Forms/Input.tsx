import { InputStyled } from './styled';

// interfaces
import { InputType } from '../../interfaces/Input';

const Input = (data: InputType) => {
    return <InputStyled type={data.type} placeholder={data.placeholder} value={data.value} />
}

export default Input