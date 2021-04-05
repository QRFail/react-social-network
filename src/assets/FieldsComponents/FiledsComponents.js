import s from './FiledsComponents.module.css';
import React from 'react';


/*const FieldControl = ({input, meta, ...props}) => {
    debugger
    let hasError = meta.touched && meta.error;

    return(
        <div className={s.fieldInput + ' ' + (hasError ? s.error : '')}>
            <div>
                {React.createElement(props.typeField, [{...input},{...props}])}
            </div>
            { hasError && <span>{meta.error}</span>}

        </div>
    )
}

export const Input = (props) => {

    return <FieldControl typeField='input' {...props}></FieldControl>

}*/


export const Textarea = ({input, meta, ...props}) => {

    let hasError = meta.touched && meta.error;

    return(
        <div className={s.fieldInput + ' ' + (hasError ? s.error : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            { hasError && <span>{meta.error}</span>}

        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    let hasError = meta.touched && meta.error;

    return(
        <div className={s.fieldInput + ' ' + (hasError ? s.error : '')}>
            <div>
                <input {...input} {...props}/>
            </div>
            { hasError && <span>{meta.error}</span>}

        </div>
    )
}
