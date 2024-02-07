import React, {useState} from 'react';
import Layout from "../../components/layout";
import {Card, Form, Row, Space, Typography} from "antd";
import CustomInput from "../../components/constom-input";
import PasswordInput from "../../components/password-input";
import CustomButton from "../../components/costom-button";
import {Link, useNavigate} from "react-router-dom";
import {Paths} from "../../paths";
import {useLoginMutation, UserData} from "../../app/services/auth";
import {isErrorWithMessage} from "../../utils/is-error-with-message";
import ErrorMessage from "../../components/error-message";

const Login = () => {
    const [loginUser, loginUserResult] = useLoginMutation();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const login = async(data: UserData) => {
        try {
            await loginUser(data).unwrap();
            navigate('/');
        } catch (error) {
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
                <Card title="Увійти" style={{width: "30rem"}}>
                    <Form onFinish={login}>
                        <CustomInput
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <PasswordInput
                            name="password"
                            placeholder="Пароль"
                        />
                        <CustomButton
                            type="primary"
                            htmlType="submit"
                        >
                            Увійти
                        </CustomButton>
                    </Form>
                    <Space direction="vertical" size="large">
                        <Typography.Text>
                            Немає акаунта? <Link to={Paths.register}>Зареєструйтесь</Link>
                        </Typography.Text>
                        <ErrorMessage message={error} />
                    </Space>
                </Card>
            </Row>
        </Layout>
    );
};

export default Login;
