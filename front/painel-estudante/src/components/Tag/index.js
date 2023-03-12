import './styles.css'
import { useState } from 'react';

const Tag = ({name}) => {
    return (
     <div className='tag-container'>
        <div className='tag-content' >
            {name}
        </div>
     </div>   
    )
}

export default Tag;