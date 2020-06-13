import React, {useEffect, useCallback, useState} from 'react';
import axios from "axios";
import {Table} from "antd";

const locale = {
    emptyText: 'Нет данных',
};

const columns = [
    {
        title: '',
        dataIndex: 'operationType',
    }, {
        title: '',
        dataIndex: 'payment',
    },
];


const ExpandedRow = ({record}) => {
    const [operations, setOperation] = useState([]);
    const loadPortfolio = useCallback(async () => {
        const request = await axios.get('/openapi-proxy.php', {
            params: {
                path: '/operations',
                from: '2010-08-19T18:38:33.131642+03:00',
                to: '2020-08-19T18:38:33.131642+03:00',
                figi: record.figi
            }
        });

        if (request.data.status === 'Ok') {
            setOperation(request.data.payload.operations);
        }
    }, []);

    useEffect(() => {
        loadPortfolio();
    }, [loadPortfolio]);


    return (
        <div>
            <Table
                pagination={false}
                rowKey={'id'}
                columns={columns}
                dataSource={operations}
                locale={locale}
                size="small"
            />
        </div>
    )
};

export default ExpandedRow;