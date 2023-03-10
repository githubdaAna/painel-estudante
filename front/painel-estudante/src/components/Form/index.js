import './styles.css';
import '../../global-styles/styles.css';
import { Link } from 'react-router-dom'

const Form = ({ title }) => {
    return (
        <form className='form-container elements-background-color flex-column'>
            <div className='form-title'>
                <h1>{title}</h1>
            </div>
            <div className='form-content flex-column'>
                {title === 'Cadastre-se' &&
                    <>
                        <label>Nome:</label>
                        <input type='text' placeholder='Digite seu nome aqui.'></input>
                    </>
                }
                <label>E-mail:  </label>
                <input type='email' placeholder='Digite seu e-mail aqui.'></input>

                <label>Senha:</label>
                <input type='password' placeholder='Digite uma senha.'></input>

                {title === 'Cadastre-se' &&
                    <>
                        <label> Confirmar senha:</label>
                        <input type='password' placeholder='Por favor, confirme a senha.'></input>
                    </>
                }
            </div>
            {title === 'Cadastre-se' &&
                <span>Já tem conta? <Link to='/'>Entre aqui.</Link></span>
            }
            {title === 'Entrar' &&
                <span>Não tem conta? <Link to='/sign-up'>Cadastre-se aqui.</Link></span>
            }
        </form>
    )
}

export default Form;