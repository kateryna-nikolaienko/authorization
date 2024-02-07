import React from 'react';
import {Employee} from "@prisma/client";
import {Card, Form, Space} from "antd";
import CustomInput from "../constom-input";
import ErrorMessage from "../error-message";
import CustomButton from "../costom-button";

type Props<T> = {
    onFinish: (values: T) => void;
    btnText: string;
    title: string;
    error?: string;
    employee?: T;
}

const EmployeeForm = ({
                          onFinish,
                          title,
                          btnText,
                          error,
                          employee
                      }: Props<Employee>) => {
    return (
        <Card title={title} style={{width: '30rm'}}>
            <Form name='employeeForm' onFinish={onFinish} initialValues={employee}>
                <CustomInput type='text' name='firstName' placeholder='Імʼя'/>
                <CustomInput type='text' name='lastName' placeholder='Прізвище'/>
                <CustomInput type='number' name='age' placeholder='Вік'/>
                <CustomInput type='text' name='address' placeholder='Адреса'/>
                <Space>
                    <ErrorMessage message={error}/>
                    <CustomButton htmlType='submit'>
                        {btnText}
                    </CustomButton>
                </Space>
            </Form>
        </Card>
    );
};

export default EmployeeForm;
