import React, {useState} from 'react';
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {useGetEmployeeQuery, useRemoveEmployeeMutation} from "../../app/services/employees";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/auth/authSlice";
import Layout from "../../components/layout";
import {Descriptions} from "antd";
import DescriptionsItem from "antd/es/descriptions/Item";

const Employee = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const params = useParams<{ id: string }>();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {data, isLoading} = useGetEmployeeQuery(params.id || '');
    const [removeEmployee] = useRemoveEmployeeMutation();
    const user = useSelector(selectUser);

    if (isLoading) {
        return <span>Завантаження</span>
    }

    if (!data) {
        return <Navigate to='/'/>
    }

    return (
        <Layout>
            <Descriptions title='Інформація про співробітника' bordered>
                <DescriptionsItem label="Імʼя" span={3}>
                    {`${data.firstName} ${data.lastName}`}
                </DescriptionsItem>
                <DescriptionsItem label="Вік" span={3}>
                    {data.age}
                </DescriptionsItem>
                <DescriptionsItem label="Адреса" span={3}>
                    {data.address}
                </DescriptionsItem>
            </Descriptions>
        </Layout>
    );
};

export default Employee;
