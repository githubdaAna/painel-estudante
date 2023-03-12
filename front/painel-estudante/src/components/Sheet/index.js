import Tag from '../Tag';
import './styles.css';
import {useState} from 'react'

const Sheet = () => {
    const [sheetName, setSheetName] = useState(); 

    function handleSheetContent(name){
        setSheetName(name)
    }

    return (
     <div className='sheet-container'>
        <div className='tags-container'>
            <Tag name='Painel' onClick={()=>handleSheetContent('Painel')}></Tag>
            <Tag name='Disciplinas'></Tag>
            <Tag name='Links'></Tag>
            <Tag name='Dúvidas'></Tag>
            <Tag name='Anotações'></Tag>
            <Tag name='Trabalhos'></Tag>
            <Tag name='Provas'></Tag>
        </div>
        <div className='sheet-container'>
            <h1>{sheetName}</h1>
        </div>
     </div>   
    )
}

export default Sheet;