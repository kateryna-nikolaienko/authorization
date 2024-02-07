import React from 'react';
import {Layout, Space, Typography} from "antd";
import styles from './index.module.css'
import {TeamOutlined, UserOutlined, LoginOutlined} from "@ant-design/icons";
import CustomButton from "../costom-button";
import {Link} from "react-router-dom";
import {Paths} from "../../paths";

const Header = () => {
    return (
        <Layout.Header className={styles.header}>
            <Space>
                <TeamOutlined className={styles.teamIcon}/>
                <Link to={Paths.home}>
                    <CustomButton type="link">
                        <Typography.Title level={1}>Співробітники</Typography.Title>
                    </CustomButton>
                </Link>
            </Space>
            <Space>
                <Link to={Paths.register}>
                    <CustomButton type='ghost' icon={<UserOutlined />}>Зареєструватися</CustomButton>
                </Link>
                <Link to={Paths.login}>
                    <CustomButton type='ghost' icon={<LoginOutlined />}>Увійти</CustomButton>
                </Link>
            </Space>
        </Layout.Header>
    );
};

export default Header;
