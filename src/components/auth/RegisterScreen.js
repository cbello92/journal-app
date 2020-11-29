import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';


export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const [values, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = values;

    const handleRegister = (e) => {
        e.preventDefault();

        let formValid = isFormValid();
        
        if(!formValid.ok) {
            dispatch(setError(formValid.msg));
        } else {
            dispatch(removeError());

            dispatch(startRegisterWithEmailPasswordName(email, password, name));

        }
    }

    const isFormValid = () => {

        if(name.trim().length === 0) {
            return {
                ok: false,
                msg: "name is required"
            };
        } else if(!validator.isEmail(email)) {
            return {
                ok: false,
                msg: "email is not valid"
            };
        } else if (password !== password2 || password.length < 5) {
            return {
                ok: false,
                msg: "passwords are invalid"
            };

        } 

        return {
            ok: true
        };
    }

    return (
        <div>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister} className="animate__animated animate__fadeIn animate__faster">

                {
                    state && state?.ui?.msgError && (
                        <div className="auth__alert-error">
                            {state?.ui?.msgError}
                        </div>

                    )
                }

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                    className="auth__input"
                    value={name}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    className="auth__input"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="off"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    autoComplete="off"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

                <Link
                    className="link"
                    to="/auth/login"
                >
                    Already register?
                </Link>
            </form>

        </div>
    )
}
