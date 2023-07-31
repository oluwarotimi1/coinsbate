import React from 'react'
import styles from './dashboard.module.css'
import BuySection from '../../components/dashboardpage/buysection/BuySection'
import PortfoilioSection from '../../components/dashboardpage/portfoiliosection/PortfoilioSection'

const Dashboard = () => {
  return (
    <div className={styles.dashboard_container}>
      <div className={`${styles.dashboard_section}container`}>
      <BuySection />
      <PortfoilioSection />
      </div>
    </div>
  )
}

export default Dashboard
