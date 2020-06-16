import {Table} from 'antd';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import ExpandedRow from "./ExpandedRow";
import {loadPortfolio} from "../../redux/portfolioReducer";

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
    const dispatch = useDispatch();
    const positions = useSelector((state) => state.portfolio.positions);

    useEffect(() => {
        dispatch(loadPortfolio());
    }, []);

    return (
        <div>
            <Table
                expandable={{
                    // expandedRowRender: record => <ExpandedRow record={record}/>,
                }}
                pagination={false}
                columns={columns}
                dataSource={positions}
                locale={locale}
                rowKey="figi"
                size="small"
            />
        </div>
    );
};

export default Portfolio;