import React from 'react';
import Layout from "../../components/layout";
import {Card, Form, Input, Row, Space, Typography} from "antd";
import CustomInput from "../../components/constom-input";
import PasswordInput from "../../components/password-input";
import CustomButton from "../../components/costom-button";
import {Link} from "react-router-dom";
import {Paths} from "../../paths";

const Login = () => {
    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title="Увійти" style={{width: "30rem"}}>
                    <Form onFinish={() => null}>
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

                    </Space>
                </Card>
            </Row>
        </Layout>
    );
};

export default Login;
