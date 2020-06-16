import React from 'react';

import styles from './DashboardItem.module.css';

const DashboardItem = ({children, className, ...rest}) => {
    return (
        <div {...rest} className={`${styles.dashboardItem} ${className}`}>
            {children}
        </div>
    );
}

export default DashboardItem;