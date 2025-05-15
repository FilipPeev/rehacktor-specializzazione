import { useState } from "react";
import { useNavigate } from "react-router";
import supabase from "../supabase/supabase-client";
import {
    FormSchemaLogin,
    ConfirmSchemaLogin,
    getErrors,
    getFieldError,
} from "../lib/validationForm";

export default function LoginPage() {
    const navigate = useNavigate();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [touchedFields, setTouchedFields] = useState({});
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        const { error, data } = ConfirmSchemaLogin.safeParse(formState);
        if (error) {
            const errors = getErrors(error);
            setFormErrors(errors);
            console.log(errors);
        } else {
            console.log(data);
            let { error } = await supabase.auth.signInWithPassword({
                email: data.email,
                password: data.password
            });
            if (error) {
                alert("Signing in error 👎!");
            } else {
                alert("Signed in 👍!");
                await new Promise((resolve) => setTimeout(resolve, 1000));
                navigate("/");
            }
        }
    };

    const onBlur = (property) => () => {
        const message = getFieldError(property, formState[property], FormSchemaLogin);
        setFormErrors((prev) => ({ ...prev, [property]: message }));
        setTouchedFields((prev) => ({ ...prev, [property]: true }))
    };

    const isInvalid = (property) => {
        if (formSubmitted || touchedFields[property]) {
            return !!formErrors[property];
        }
        return undefined;
    }

    const setField = (property, valueSelector) => (e) => {
        setFormState((prev) => ({
            ...prev,
            [property]: valueSelector ? valueSelector(e) : e.target.value,
        }));
    }

    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={onSubmit} noValidate className="login">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={setField("email")}
                    onBlur={onBlur("email")}
                    aria-invalid={isInvalid("email")}
                    required
                />
                {formErrors.email && <small>{formErrors.email}</small>}

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formState.password}
                    onChange={setField("password")}
                    onBlur={onBlur("password")}
                    aria-invalid={isInvalid("password")}
                    required
                />
                {formErrors.password && <small>{formErrors.password}</small>}

                <br />
                <button type="submit" className="btnLoginRegister">Sign in</button>
                <p>Non hai un account? <a href="/register" className="link">Registrati.</a></p>
            </form>
        </div>
    );
}