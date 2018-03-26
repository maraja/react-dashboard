import React from 'react'
import { connect } from 'react-redux'
import { Card, Anchor } from 'antd'
const { Link } = Anchor
import AdminLayout from '../components/AdminLayout'
import SectionContent from '../components/SectionContent'

class Dashboard extends React.Component {
  render() {
    return (
      <AdminLayout>
        <SectionContent>
          <p>Dashboard</p>

          <a href="https://ant.design/docs/react/introduce" target="_blank">
          	Click me to view more cool components
          </a>
        </SectionContent>
      </AdminLayout>
    )
  }
}

export default connect()(Dashboard)
