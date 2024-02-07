import React from 'react';
import {Card, Form, Row, Space, Typography} from "antd";
import CustomInput from "../../components/constom-input";
import PasswordInput from "../../components/password-input";
import CustomButton from "../../components/costom-button";
import {Link} from "react-router-dom";
import {Paths} from "../../paths";
import Layout from "../../components/layout";

const Register = () => {
    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title="Зареєструватись" style={{width: "30rem"}}>
                    <Form onFinish={() => null}>
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

                    </Space>
                </Card>
            </Row>
        </Layout>
    );
};

export default Register;
