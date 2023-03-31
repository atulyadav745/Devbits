import React from 'react'
import DashboardCard04 from '../../partials/dashboard/DashboardCard04'
import DashboardCard06 from '../../partials/dashboard/DashboardCard06'
import DashboardCard07 from '../../partials/dashboard/DashboardCard07'

function Analytics() {
    return (
        <>
            <div className="grid grid-cols-12 gap-6">
                <DashboardCard04 />
                <DashboardCard06 />
                <DashboardCard07 />
            </div>
        </>
    )
}

export default Analytics