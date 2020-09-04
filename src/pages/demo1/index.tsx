import React, { useState } from "react"
import CalendarSam from '@/components/CalendarSam'
import { Calendar, Button } from 'antd-mobile';
import enUS from 'antd-mobile/lib/calendar/locale/en_US';


const demo1:React.FC = (props)=>{
    const [isVisible, setIsVisible] = useState(false)

    const now = new Date();
    
    return <div>
        demo1

        <Button onClick={()=>setIsVisible(!isVisible)}>isVisible->{isVisible+""}</Button>

        <CalendarSam
            {...{locale: enUS}}
            // key={"asdsads"}
            visible={isVisible}
            // initalMonths={1}
            defaultDate={now}
            // getDateExtra={getDateExtra}
            // onSelect={()=>{}}
            onCancel={()=>setIsVisible(!isVisible)}
            minDate={new Date(+now - 5184000000)}
            maxDate={new Date(+now + 31536000000)}
        />
    </div>
}

export default demo1