import React, {useState} from 'react';
import {Link, Navigate, useNavigate, useParams} from "react-router-dom";
import {useGetEmployeeQuery, useRemoveEmployeeMutation} from "../../app/services/employees";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/auth/authSlice";
import Layout from "../../components/layout";
import {Descriptions, Divider, Modal, Space} from "antd";
import DescriptionsItem from "antd/es/descriptions/Item";
import CustomButton from "../../components/costom-button";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import ErrorMessage from "../../components/error-message";
import {Paths} from "../../paths";
import {isErrorWithMessage} from "../../utils/is-error-with-message";

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

    const showModal = () => {
        setIsModalOpen(true);
    }

    const hideModal = () => {
        setIsModalOpen(false);
    }

    const handleDeleteUser = async() => {
        hideModal();
        try {
            await removeEmployee(data.id).unwrap();
            navigate(`${Paths.status}/deleted`);
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
            {
                user?.id === data.userId && (
                    <>
                        <Divider orientation='left'>Дії</Divider>
                        <Space>
                            <Link to={`/employee/edit/${data.id}`}>
                                <CustomButton
                                    shape='round'
                                    type='default'
                                    icon={<EditOutlined/>}
                                >
                                    Редагувати
                                </CustomButton>
                            </Link>
                            <CustomButton
                                shape='round'
                                danger
                                onClick={showModal}
                                icon={<DeleteOutlined/>}
                            >
                                Видалити
                            </CustomButton>
                        </Space>
                    </>
                )
            }
            <ErrorMessage message={error}/>
            <Modal
                title='Підтвердіть видалення'
                open={isModalOpen}
                onOk={handleDeleteUser}
                onCancel={hideModal}
                okText='Підтвердити'
                cancelText="Відмінити"
            >
                Ви дійсно хочете видалити співробітника з таблиці?
            </Modal>
        </Layout>
    );
};

export default Employee;
