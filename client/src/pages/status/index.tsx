import React from 'react';
import {Link, useParams} from "react-router-dom";
import {Button, Result, Row} from "antd";

const Statuses: Record<string, string> = {
    created: 'Користувач успішно створений',
    updated: 'Користувач успішно оновлений',
    deleted: 'Користувач успішно видалений'
}

const Status = () => {
    const {status} = useParams();

    return (
        <Row align='middle' justify='center' style={{width: '100%'}}>
            <Result
                status={status ? 'success' : 404}
                title={status ? Statuses[status] : 'Не знайдено'}
                extra={
                    <Button key='dashboard'>
                        <Link to='/'>На головну</Link>
                    </Button>
                }
            />
        </Row>
    );
};

export default Status;
