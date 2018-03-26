import React from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Icon } from 'antd'
import { withRouter } from 'react-router-dom'
import Header from './Header'
import AppFooter from '../../components/AppFooter'
import logo from '../../assets/react.svg'
import { openChangeMenu } from '../../actions/admin'
import './index.less'

const { Sider, Content } = Layout
const { SubMenu } = Menu

class Admin extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.handleHeaderOnToggle = this.handleHeaderOnToggle.bind(this)
    this.handleMenuItemOnClick = this.handleMenuItemOnClick.bind(this)
    this.state = {
      collapsed: false,
    }
  }

  handleHeaderOnToggle() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  handleMenuItemOnClick(item) {
    this.props.history.push(`/admin/${item.key}`)
  }

  render() {
    const { match, children, openKeys } = this.props
    const selectedKey = match.path.split('/').splice(-1)[0]
    return (
      <Layout className='admin-page'>
        <Sider
          className='admin-sider'
          collapsible
          collapsed={this.state.collapsed}
          trigger={null}
          width={256}
        >
          <div className='logo'>
            <img src={logo} alt='Admin Portal' />
            {!this.state.collapsed && <h1>Admin</h1>}
          </div>
          <Menu
            className='menu'
            theme='dark'
            mode='inline'
            openKeys={this.state.collapsed ? [] : openKeys}
            selectedKeys={[selectedKey]}
            onClick={this.handleMenuItemOnClick}
            onOpenChange={this.props.handleMenuOnOpenChange}
          >
            <SubMenu
              key='general'
              title={<span><Icon type='dashboard' /><span>General</span></span>}
            >
              <Menu.Item key='dashboard'>
                <span>Dashboard</span>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key='users'>
              <Icon type='user' /><span>Users</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header collapsed={this.state.collapsed} handleHeaderOnToggle={this.handleHeaderOnToggle} />
          <Content>
            {children}
          </Content>
          <AppFooter />
        </Layout>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  const { openKeys } = state.admin || ['general']
  return { openKeys }
}

const mapDispatchToProps = dispatch => ({
  handleMenuOnOpenChange: openKeys => dispatch(openChangeMenu(openKeys)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin))
