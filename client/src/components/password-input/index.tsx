import React from 'react';
import {NamePath} from 'antd/es/form/interface'
import {Form, Input} from "antd";

type Props = {
    name: string;
    placeholder: string;
    dependencies?: NamePath[];
}

const Index = ({
                   name,
                   placeholder,
                   dependencies
               }: Props) => {
    return (
        <Form.Item
            name={name}
            dependencies={dependencies}
            hasFeedback
            rules={[{
                required: true,
                message: 'Обовʼязкове поле'
            }, ({getFieldValue}) => ({
                    validator(_, value) {
                        if (!value) {
                            return Promise.resolve();
                        }

                        if (name === 'confirmPassword') {
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error("Паролі мають співпадати"))
                        } else {
                            if (value.length < 6) {
                                return Promise.reject(new Error("Пароль має бути довше 6 символів"))
                            }

                            return Promise.resolve();
                        }
                    }
                }

            )]}
        >
            <Input.Password placeholder={placeholder} size='large'/>
        </Form.Item>
    );
};

export default Index;
