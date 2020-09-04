import React, { useState } from "react"
import { TabBar } from 'antd-mobile';

const TabBarSam:React.FC<any> = (props)=>{
    const [selectedTab, setSelectedTab] = useState("Life")
    const {children} = props

    const renderContent = (pageText) => {
        return (
          <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
            <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
            {/* {children} */}
            <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
              onClick={(e) => {
                e.preventDefault();
                this.setState({
                  hidden: !this.state.hidden,
                });
              }}
            >
              Click to show/hide tab-bar
            </a>
          </div>
        );
    }

    return <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        tabBarPosition="bottom"
        hidden={false}
        prerenderingSiblingsNumber={0}
        >
        <TabBar.Item
            title="Life"
            key="Life"
            icon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={selectedTab === 'Life'}
            badge={1}
            onPress={() => {
                setSelectedTab("Life")
            }}
            data-seed="logId"
        >
            {renderContent('Life')}
        </TabBar.Item>
        <TabBar.Item
            icon={
            <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={
            <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
            />
            }
            title="Koubei"
            key="Koubei"
            badge={'new'}
            selected={selectedTab === 'Koubei'}
            onPress={() => {
                setSelectedTab("Koubei")
            }}
            data-seed="logId1"
        >
            {renderContent('Koubei')}
        </TabBar.Item>
        <TabBar.Item
            icon={
            <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={
            <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
            />
            }
            title="Friend"
            key="Friend"
            dot
            selected={selectedTab === 'Friend'}
            onPress={() => {
                setSelectedTab("Friend")
            }}
        >
            {renderContent('Friend')}
        </TabBar.Item>
        <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="My"
            key="my"
            selected={selectedTab === 'my'}
            onPress={() => {
                setSelectedTab("my")
            }}
        >
            {renderContent('My')}
        </TabBar.Item>
        </TabBar>
    </div>
}

export default TabBarSam