import React, {useEffect} from 'react';
import {Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {loadOperations} from "../../redux/operationsReducer";

const locale = {
    emptyText: 'Нет данных по лотам',
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
    const dispatch = useDispatch();
    const operations = useSelector((state) => state.operations);

    useEffect(() => {
        dispatch(loadOperations({
            from: '2010-08-19T18:38:33.131642+03:00',
            to: '2020-08-19T18:38:33.131642+03:00',
            figi: record.figi,
        }));
    }, []);

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