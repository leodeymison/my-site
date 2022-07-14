import React from 'react';

// styleds
import { _Button } from './styled';

// Interfaces
import { buttomLinkType } from '../../interfaces/ButtonLink';

const ButtonLink:React.FC<buttomLinkType> = ({text, url, blanck}) => {
    return (
        <_Button>
            <a href={url} target={blanck ? ('_blank') : '_parent'}>
                {text}
            </a>
        </_Button>
    )
}

export default ButtonLink