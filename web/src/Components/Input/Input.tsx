import React, { InputHTMLAttributes} from 'react';

import './style.css'

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

const Input:React.FC<inputProps> = ({name}) =>{
 
    return (
        <div>
            <label className="check-content">{name}
                    <input type="checkbox"></input>
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default Input;