import React, { InputHTMLAttributes} from 'react';

import './style.css'

const Input = ({name, classNameLabel, classNameSpan}) =>{
 
    return (
        <div>
            <label className={classNameLabel}>{name}
                    <input type="checkbox"></input>
                <span className={classNameSpan}></span>
            </label>
        </div>
    )
}

export default Input;