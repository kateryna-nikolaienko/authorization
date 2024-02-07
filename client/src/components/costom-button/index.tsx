import React, {ReactNode} from 'react';
import {Button, Form} from 'antd';

type Props = {
    children: ReactNode;
    htmlType?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    type?: "link" | "default" | "text" | "primary" | "dashed" | "ghost" | undefined;
    danger?: boolean;
    loading?: boolean;
    shape?: "default" | "circle" | "round" | undefined;
    icon?: ReactNode;
}

const CustomButton = ({children, htmlType = 'button', onClick, type, danger, loading, shape, icon}: Props) => {
    return (
        <Form.Item>
            <Button
                htmlType={htmlType}
                type={type}
                onClick={onClick}
                danger={danger}
                loading={loading}
                shape={shape}
                icon={icon}
            >{children}</Button>
        </Form.Item>
    );
};

export default CustomButton;
