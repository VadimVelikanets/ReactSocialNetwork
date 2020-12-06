import React from 'react';
import styles from './FormControl.module.scss'
export const Textarea = ({input, meta, ...props}) =>{
    const HasError = meta.touched && meta.error
    return(
        <div className={styles.valid}>
            <textarea className={HasError ? styles.error : ""} {...input} {...props}></textarea>
        {HasError && <div className={styles.errorMessage}>{meta.error}</div>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) =>{
    const HasError = meta.touched && meta.error
    return(
        <div className={styles.valid}>
            <input className={HasError ? styles.error : ""} {...input} {...props}></input>
        {HasError && <div className={styles.errorMessage}>{meta.error}</div>}
        </div>
    )
}