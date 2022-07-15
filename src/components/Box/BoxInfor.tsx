import React from 'react';

// styleds
import { 
    BoxedStyled,
    LevelStyled, 
    LevelElementStyled, 
    BoxCardStyled, 
    CardStyled, 
    ContactStyled, 
    SociaisStyled, 
    FormStyled, 
    IconStyled, 
    BoxButtonStyled,
    ListStyled
} from './styled';

// icons
import { AiOutlineInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

// Components
import Input from '../Forms/Input';
import Textarea from '../Forms/Textarea';
import ButtonLink from '../Forms/ButtonLink';

// interfaces
import { BoxInforType } from '../../interfaces/BoxInfor';

const BoxInfor:React.FC<BoxInforType> = ({title, body, contact, projects, tecs}) => {
    return (
        <BoxedStyled>
            <h2>{title}</h2>
            { 
                body && (
                    <p>
                        <br />
                        {body}
                    </p>
                )
            }
            {
                tecs && (
                    <ul>
                        <br />
                        {
                            tecs.map((tec, index) => (
                                <LevelStyled key={index}>
                                    <p>{tec.name}</p>
                                    <ListStyled>
                                        {
                                            tec.level.map((level, i) => (
                                                <LevelElementStyled key={i} bcolor={level}></LevelElementStyled>
                                            ))
                                        }
                                    <p>{String((tec.level.filter(level => level === true)).length).padStart(2, '0')}/{tec.level.length}</p>
                                    </ListStyled>
                                </LevelStyled>
                            ))
                        }
                    </ul>
                )
            }
            {
                projects && (
                    <BoxCardStyled>
                        {
                            projects.map((project, index) => (
                                <CardStyled key={index}>
                                    <h3>{project.title}</h3>
                                    <IconStyled>
                                        {
                                            project.icons.map((icon, i) => (
                                                icon.length > 0 && <img key={i} src={icon} alt={project.title} />
                                            ))
                                        }
                                    </IconStyled>
                                    <BoxButtonStyled>
                                        {
                                            project.links.map((link, index) => (
                                                <ButtonLink 
                                                    key={index}
                                                    blanck={link.target} 
                                                    text={link.name}
                                                    url={link.url} />
                                            ))
                                        }
                                    </BoxButtonStyled>
                                </CardStyled>
                            ))
                        }
                    </BoxCardStyled>
                )
            }
            {
                contact && (
                    <ContactStyled>
                        <SociaisStyled>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/leodeymison_alcantara/">
                                <AiOutlineInstagram />
                                Instagram
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/leodeymison">
                                <AiFillGithub />
                                GitHub
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/leodeymison/">
                                <AiFillLinkedin />
                                LinkedIn
                            </a>
                        </SociaisStyled>
                        <FormStyled action="">
                            <Input type="text" placeholder={contact.name} />
                            <Input type="text" placeholder={contact.subject} />
                            <Textarea placeholder={contact.message}></Textarea>
                            <Input type="submit" value={contact.button} />
                        </FormStyled>
                    </ContactStyled>
                )
            }
        </BoxedStyled>
    )
}

export default BoxInfor