import React from "react";
import { Form, Formik } from "formik";
import { Button, TextField } from "@material-ui/core";
import styles from "../styles/login.module.css";
import { MainLayout } from "../layout/MainLayout";
import * as yup from "yup";
import { Error } from "../components/Error";
import axios from "axios";
import { useRouter } from "next/router";

const Basic = () => {
    const router = useRouter();
    const validationSchema = yup.object({
        username: yup.string().min(4, "Минимальная длина 4 символов").required("Введите имя пользователя"),
        password: yup.string().min(8, "Минимальная длина 8 символов").max(32, "Максимальная длина 32 символа").required("Введите пароль"),
    });

    return (
        <MainLayout>
            <Formik
                initialValues={{ username: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        const response = await axios.post("/api/auth/login", { ...values });
                        router.push('/')
                        setSubmitting(false);
                    } catch (error) {
                        throw error;
                    }
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <Form onSubmit={handleSubmit} className={styles.form}>
                        <h3>Login</h3>
                        <TextField
                            autoComplete="off"
                            type="username"
                            name="username"
                            label="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                        />
                        <Error touched={touched.username} error={errors.username} />
                        <TextField
                            autoComplete="off"
                            type="password"
                            name="password"
                            label="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        <Error touched={touched.password} error={errors.password} />
                        <Button className={styles.button} color="primary" variant="contained" type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </MainLayout>
    );
};

export default Basic;
