import styles from './style.module.scss'
import { ReactNode, ButtonHTMLAttributes, Children } from 'react'
import { FaSpinner } from 'react-icons/fa'


interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement>{ 
    loading?:boolean,
    children:ReactNode
}

export default function Button({ loading, children, ...rest}: buttonProps){
    return(
        <button className={styles.button}
            disabled={loading}
            {...rest}
        >
            {loading ? (
                <FaSpinner color='white' size={16}/>
            ):(
                <a className={styles.buttonText}>
                    {children} </a>
            )}

            
        </button>
    )
}