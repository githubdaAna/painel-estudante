import './styles.css';
import '../../global-styles/styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../../services/api'
import Button from '../Button';

const Form = ({ title }) => {
    const navigate = useNavigate();

    const [responseMessage, setResponseMessage] = useState('');

    const [form, setForm] = useState(
        {
            nome: '',
            email: '',
            senha: '',
            confirmaSenha: ''
        }
    )

    function handleSetForm(e) {
        e.preventDefault();
        e.stopPropagation();
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (title === 'Cadastre-se') {
            if (form.senha !== form.confirmaSenha) {
                setResponseMessage('As senhas precisam ser iguais.')
                return
            }

            try {
                const response = await api.post('/users', {
                    nome: form.nome,
                    email: form.email,
                    senha: form.senha
                })

                console.log(response)
                // navigate('/')
            } catch (error) {

            }
        }
    }

    return (
        <form
            className='form-container elements-background-color flex-column'
            onSubmit={(e) => handleSubmit(e)}
        >
            <div className='form-title'>
                <h1>{title}</h1>
            </div>
            <div className='form-content flex-column'>
                {title === 'Cadastre-se' &&
                    <>
                        <label>Nome:</label>
                        <input
                            name='nome'
                            type='text'
                            value={form.nome}
                            onChange={(e) => handleSetForm(e)}
                            placeholder='Digite seu nome aqui.'
                        ></input>
                    </>
                }
                <label>E-mail:  </label>
                <input
                    name='email'
                    type='email'
                    value={form.email}
                    onChange={(e) => handleSetForm(e)}
                    placeholder='Digite seu e-mail aqui.'
                ></input>

                <label>Senha:</label>
                <input
                    name='senha'
                    type='password'
                    value={form.senha}
                    onChange={(e) => handleSetForm(e)}
                    placeholder='Digite uma senha.'
                ></input>

                {title === 'Cadastre-se' &&
                    <>
                        <label> Confirmar senha:</label>
                        <input
                            name='confirmaSenha'
                            type='password'
                            value={form.confirmaSenha}
                            onChange={(e) => handleSetForm(e)}
                            placeholder='Por favor, confirme a senha.'
                        ></input>
                    </>
                }
                <span>{responseMessage}</span>
            </div>
            <Button title={title} />
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