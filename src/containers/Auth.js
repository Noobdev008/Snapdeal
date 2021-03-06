import { useState } from "react";
import "./Auth.css";
import FormInput from "./login/FormInput";
import { Link, useHistory } from 'react-router-dom'

const Auth = () => {
    const history = useHistory()
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "birthDate",
            label: "Birth-Date",
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        },
    ];
   
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/product');

    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        // <Link to="/product"></Link>
    };



    return (
        <div className="auth">

            <form className="form" onSubmit={handleSubmit}>
                <h1 className="h1">Register</h1>
                {/* <Link to="/product">  </Link> */}
                {inputs.map((input) => (

                    <FormInput

                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}

                    />
                ))}
                <button className="button">Submit</button>
            </form>

        </div>
    );
};

export default Auth;