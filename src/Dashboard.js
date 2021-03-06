import React, {useEffect, useState} from 'react';
import GridLayout from 'react-grid-layout';

import Portfolio from "./widgets/Portfolio";
import DashboardItem from "./dashboard/DashboardItem";

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const useBoundsClientRect = () => {
    const [clientRect, setClientRect] = useState(() => document.body.getBoundingClientRect());
    useEffect(() => {
        window.addEventListener('resize', () => {
            const data = document.body.getBoundingClientRect();

            setClientRect(data);
        }, {passive: true});
    }, []);

    return clientRect;
}

const Dashboard = () => {
    const layout = [
        {
            i: 'a',
            x: 0,
            y: 0,
            w: 6,
            h: 6
        },
    ];
    const { width } = useBoundsClientRect();

    return (
        <div>
            <GridLayout layout={layout} cols={12} rowHeight={30} width={width}>
                <DashboardItem key="a">
                    <Portfolio/>
                </DashboardItem>
            </GridLayout>
        </div>
    );
}

export default Dashboard;