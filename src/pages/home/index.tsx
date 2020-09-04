import React from "react"
import { Picker, List, Menu } from 'antd-mobile'

const menus = [
    {
        label: "home",
        value:"home"
    },
    {
        label: "demo1",
        value:"demo1"
    },
    {
        label: "demo2",
        value:"demo2"
    },
    {
        label: "formDemo",
        value: "formDemo"
    }
]

const Index:React.FC<any> = (props)=>{
    const {history} = props

    console.log("@@@@@", props)

    return <>
   
        home
        <Menu
            className="single-foo-menu"
            data={menus}
            value={['home']}
            level={1}
            onChange={(e)=>{
                history.push(e[0])
            }}
            height={document.documentElement.clientHeight * 0.6}
        />
    </>
}

export default Index