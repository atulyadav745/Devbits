import React from 'react'
import DashboardCard04 from '../../partials/dashboard/DashboardCard04'
import DashboardCard06 from '../../partials/dashboard/DashboardCard06'
import Portfolio from './Portfolio'

function Analytics() {
    return (
        <>
            <div className="grid grid-cols-12 gap-6">
                <DashboardCard04 />
                <DashboardCard06 />
                <Portfolio/>
            </div>
        </>
    )
}

export default Analytics