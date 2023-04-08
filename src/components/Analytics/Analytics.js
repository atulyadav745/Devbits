import React from 'react'
import DashboardCard04 from '../dashboard/DashboardCard04'
import DashboardCard06 from '../dashboard/DashboardCard06'
import Portfolio from './Portfolio'
import Cards from '../../pages/Dashborad/Cards'

function Analytics() {
    return (
        <>
            <div className="">
                {/* <DashboardCard04 /> */}
                <Cards/>
                <DashboardCard06 />
                <Portfolio/>
            </div>
        </>
    )
}

export default Analytics