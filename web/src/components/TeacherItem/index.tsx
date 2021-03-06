import React from 'react';


import whatsAppIcon from '../../Assets/images/icons/whatsapp.svg';
import './styles.css';
import api from '../../services/api';

export interface Teacher{
    avatar: string,
    bio:string,
    cost:number,
    id:number,
    name:string,
    subject:string,
    whatsapp:string,
    week_day:number,
    from:string,
    to:string,
}

interface teacherItemProps{
    teacher:Teacher
}

const  TeacherItem: React.FC<teacherItemProps> = ({teacher}) =>{

    function createNewConnection(){
        api.post('/connections', {
            user_id: teacher.id
        })
    }
    return (
        <article className="teacher-item">
        <header>
            <img src={teacher.avatar} alt={`Foto de ${teacher.name}`} />
            <div>
                <strong>{teacher.name}</strong>
                <span>{teacher.subject}</span>
            </div>                    
        </header>
        <p>
        {teacher.bio}
        </p>
        <footer>
            <p>
                Preço/hora 
                <strong>{teacher.cost}</strong>
                <a target="_blank" 
                   onClick={createNewConnection} 
                   href={`https://wa.me/${teacher.whatsapp}`} 
                >
                <img src={whatsAppIcon} alt="whatsapp"/>
                Entrar em contato
                </a>
            </p>
        </footer>
    </article>
    );
}

export default TeacherItem;