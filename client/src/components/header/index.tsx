import React from 'react';
import {Layout, Space, Typography} from "antd";
import styles from './index.module.css'
import {TeamOutlined, UserOutlined, LoginOutlined} from "@ant-design/icons";
import CustomButton from "../costom-button";
import {Link, useNavigate} from "react-router-dom";
import {Paths} from "../../paths";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../../features/auth/authSlice";

const Header = () => {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogoutClick = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        navigate('/login');
    }

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
            {user ? (
                <CustomButton
                    type="ghost"
                    icon={<LoginOutlined/>}
                    onClick={onLogoutClick}
                >
                    Вийти
                </CustomButton>
            ) : (
                <Space>
                    <Link to={Paths.register}>
                        <CustomButton type='ghost' icon={<UserOutlined/>}>Зареєструватися</CustomButton>
                    </Link>
                    <Link to={Paths.login}>
                        <CustomButton type='ghost' icon={<LoginOutlined/>}>Увійти</CustomButton>
                    </Link>
                </Space>
            )
            }
        </Layout.Header>
    );
};

export default Header;
