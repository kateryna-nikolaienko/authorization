import React, {useState} from 'react';
import {Card, Form, Row, Space, Typography} from "antd";
import CustomInput from "../../components/constom-input";
import PasswordInput from "../../components/password-input";
import CustomButton from "../../components/costom-button";
import {Link, useNavigate} from "react-router-dom";
import {Paths} from "../../paths";
import Layout from "../../components/layout";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/auth/authSlice";
import {useRegisterMutation} from "../../app/services/auth";
import {User} from "@prisma/client";
import {isErrorWithMessage} from "../../utils/is-error-with-message";
import ErrorMessage from "../../components/error-message";

type RegisterData = Omit<User, "id"> & {confirmPassword: string};

const Register = () => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const [error, setError] = useState('');
    const [registerUser] = useRegisterMutation();

    const register = async(data: RegisterData) => {
        try {
            await registerUser(data).unwrap();
            navigate('/');
        }catch (error) {
            const maybeError = isErrorWithMessage(error);

            if (maybeError) {
                setError(error.data.message);
            } else {
                setError('Невідома помилка');
            }
        }
    }
    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title="Зареєструватись" style={{width: "30rem"}}>
                    <Form onFinish={register}>
                        <CustomInput
                            type="text"
                            name="name"
                            placeholder="Імʼя"
                        />
                        <CustomInput
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <PasswordInput
                            name="password"
                            placeholder="Пароль"
                        />
                        <PasswordInput
                            name="confirmPassword"
                            placeholder="Повторіть пароль"
                        />
                        <CustomButton
                            type="primary"
                            htmlType="submit"
                        >
                            Зареєструватись
                        </CustomButton>
                    </Form>
                    <Space direction="vertical" size="large">
                        <Typography.Text>
                            Є акаунт? <Link to={Paths.login}>Увійдіть</Link>
                        </Typography.Text>
                    <ErrorMessage message={error}/>
                    </Space>
                    <Space direction="vertical" size="large">
                        <Typography.Text>
                            Є акаунт? <Link to={Paths.login}>Увійдіть</Link>
                        </Typography.Text>
                        <ErrorMessage message={error}/>
                    </Space>
                </Card>
            </Row>
        </Layout>
    );
};

export default Register;
