import Button from "../Button/Button";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
    Checkbox,
    CheckboxContainer,
    CheckboxText,
    ErrorMessage,
    GetConsultationForm,
    SuccessMessage,
} from "./styles";

function GetConsultation() {

    const [successMessage, setSuccessMessage] = useState("");

    const schema = Yup.object().shape({
        email: Yup.string()
            .required("Введите email")
            .email("Некорректный email"),

        agree: Yup.boolean().oneOf([true], "Необходимо согласие"),
    });

    const formik = useFormik({
        validationSchema: schema,
        initialValues: {
            email: "",
            agree: false,
        },
        onSubmit: () => {
            setSuccessMessage("Мы с Вами скоро свяжемся");
        },
    });

    return (
        <GetConsultationForm onSubmit={formik.handleSubmit}>
            <input
                type="email"
                name="email"
                placeholder="Введите email"
                value={formik.values.email}
                onChange={formik.handleChange}
            />

            {formik.errors.email && (
                <ErrorMessage>{formik.errors.email}</ErrorMessage>
            )}

            <CheckboxContainer>
                <Checkbox
                    type="checkbox"
                    name="agree"
                    checked={formik.values.agree}
                    onChange={formik.handleChange}
                />
                <CheckboxText>
                    Я согласен на обработку персональных данных
                </CheckboxText>
            </CheckboxContainer>

            {formik.errors.agree && (
                <ErrorMessage>{formik.errors.agree}</ErrorMessage>
            )}

            <Button
                name="Получить консультацию"
                type="submit"
            />

            {successMessage && (
                <SuccessMessage>{successMessage}</SuccessMessage>
            )}

        </GetConsultationForm>
    );
}

export default GetConsultation;
