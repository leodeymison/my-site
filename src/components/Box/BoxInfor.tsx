import { Link } from 'react-router-dom';
import React from 'react';

// styleds
import { _Boxed, _Level , _LevelElement, _BoxCard, _Card, _Contact, _Sociais, _Form } from './styled';

// icons
import { AiOutlineInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

// Components
import Input from '../Forms/Input';
import Textarea from '../Forms/Textarea';

type BoxInforType = {
    title: string,
    body?: string,
    tecs?: Array<{
        name: string,
        level: Array<boolean>
    }>,
    projects?: Array<{
        title: string,
        image: string,
        id: string | number
    }>,
    contact?: boolean
}

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
                                    {
                                        tec.level.map((level, i) => (
                                            <_LevelElement key={i} bcolor={level}></_LevelElement>
                                        ))
                                    }
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
                                <Link key={index} to={`/project/${project.id}`}>
                                    <_Card>
                                        <img 
                                            src={project.image}
                                            alt={project.title} />
                                        <h2>{project.title}</h2>
                                    </_Card>
                                </Link>
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
                            <Input type="text" placeholder='Nome' />
                            <Input type="text" placeholder='Assunto' />
                            <Textarea placeholder='Mensagem'></Textarea>
                            <Input type="submit" value="Enviar" />
                        </_Form>
                    </_Contact>
                )
            }
        </_Boxed>
    )
}

export default BoxInfor