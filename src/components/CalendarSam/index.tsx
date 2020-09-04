import { Calendar } from 'antd-mobile';
import React from 'react';

export default class CalendarSam extends React.Component<any> {

    render(){
        return <Calendar
                    ref={(instance:any)=>{
                        console.log("@@@@@@@@@@@@@@instance", instance)
                    }} 
                    {...this.props}
                >
            </Calendar>
    }
}