import { Link } from 'react-router-dom';
import React from 'react';

// styleds
import { 
    _Boxed,
    _Level , 
    _LevelElement, 
    _BoxCard, 
    _Card, 
    _Contact, 
    _Sociais, 
    _Form, 
    _Icon, 
    _BoxButton,
    _List
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
        <_Boxed>
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
                                <_Level key={index}>
                                    <p>{tec.name}</p>
                                    <_List>
                                        {
                                            tec.level.map((level, i) => (
                                                <_LevelElement key={i} bcolor={level}></_LevelElement>
                                            ))
                                        }
                                    <p>{String((tec.level.filter(level => level == true)).length).padStart(2, '0')}/{tec.level.length}</p>
                                    </_List>
                                </_Level>
                            ))
                        }
                    </ul>
                )
            }
            {
                projects && (
                    <_BoxCard>
                        {
                            projects.map((project, index) => (
                                <_Card key={index}>
                                    <h3>{project.title}</h3>
                                    <_Icon>
                                        {
                                            project.icons.map((icon, i) => (
                                                icon.length > 0 && <img key={i} src={icon} alt={project.title} />
                                            ))
                                        }
                                    </_Icon>
                                    <_BoxButton>
                                        {
                                            project.links.map((link, index) => (
                                                <ButtonLink 
                                                    key={index}
                                                    blanck={link.target} 
                                                    text={link.name}
                                                    url={link.url} />
                                            ))
                                        }
                                    </_BoxButton>
                                </_Card>
                            ))
                        }
                    </_BoxCard>
                )
            }
            {
                contact && (
                    <_Contact>
                        <_Sociais>
                            <a href="">
                                <AiOutlineInstagram />
                                Instagram
                            </a>
                            <a href="">
                                <AiFillGithub />
                                GitHub
                            </a>
                            <a href="">
                                <AiFillLinkedin />
                                LinkedIn
                            </a>
                        </_Sociais>
                        <_Form action="">
                            <Input type="text" placeholder={contact.name} />
                            <Input type="text" placeholder={contact.subject} />
                            <Textarea placeholder={contact.message}></Textarea>
                            <Input type="submit" value={contact.button} />
                        </_Form>
                    </_Contact>
                )
            }
        </_Boxed>
    )
}

export default BoxInfor