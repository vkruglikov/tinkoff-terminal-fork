import axios from 'axios';
import React, {useCallback, useEffect, useState, useMemo} from "react";
import {Table} from 'antd';

import ExpandedRow from "./ExpandedRow";

const locale = {
    emptyText: 'Нет данных',
};

const columns = [
    {
        title: 'Название',
        dataIndex: 'name',
    },
    {
        title: 'Всего',
        dataIndex: 'balance',
    },
    {
        title: 'Блок',
        dataIndex: 'blocked',
    },
    {
        title: 'Доступно',
        dataIndex: 'available',
    },
    {
        title: 'Цена',
        dataIndex: 'address',
    },
    {
        title: 'Средняя',
        dataIndex: 'averagePositionPrice',
        render: (item) => item ? item.value : null
    },
    {
        title: 'Стоимость',
        dataIndex: 'cost',
    },
    {
        title: 'Доход',
        dataIndex: 'expectedYield',
        render: (item) => item ? item.value : null
    },
];


const Portfolio = () => {
    const [positions, setPositions] = useState([]);
    const loadPortfolio = useCallback(async () => {
        const request = await axios.get('/openapi-proxy.php?path=/portfolio');

        if (request.data.status === 'Ok') {
            setPositions(request.data.payload.positions);
        }
    }, []);

    useEffect(() => {
        loadPortfolio();
    }, [loadPortfolio]);

    const enhancedPositions = useMemo(() => positions.map((items) => {
        const blocked = items.blocked || 0;
        const available = items.balance - blocked;
        const cost = items.balance * items.averagePositionPrice.value + items.expectedYield.value;

        return {
            ...items,
            blocked,
            available,
            cost
        }
    }), [positions]);

    return (
        <div>
            <Table
                expandable={{
                    expandedRowRender: record => <ExpandedRow record={record}/>,
                }}
                pagination={false}
                rowKey={'figi'}
                columns={columns}
                dataSource={enhancedPositions}
                locale={locale}
                size="small"
            />
        </div>
    );
};

export default Portfolio;