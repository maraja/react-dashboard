import React from 'react'
import { Card, Layout } from 'antd'
import iconReact from '../../assets/react.svg'
import iconRedux from '../../assets/redux.png'
import iconAntd from '../../assets/antd.png'
import AppHeader from '../../components/AppHeader'
import AppFooter from '../../components/AppFooter'
import './index.less'

const { Content } = Layout

export default class Home extends React.Component {
  render() {
    return (
      <Layout className='home-page'>
        <AppHeader />
        <Content>
          <Card>
            <h1>Welcome to React Starter.</h1>
            <p>This is a demo project by <a href='https://github.com/maraja'>@maraja.</a></p>
            <img height='50px' src={iconReact} alt='React' />
            <img height='50px' src={iconRedux} alt='Redux' />
            <img height='50px' src={iconAntd} alt='Ant Design' />
          </Card>
        </Content>
        <AppFooter />
      </Layout>
    )
  }
}
