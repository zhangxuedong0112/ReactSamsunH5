import React, { useEffect } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { formatMessage } from 'umi-plugin-locale';

const NavBarSam: React.FC<any> = (props:any) => {
    const { children, location, location: { pathname = '/' }, route: { routes }, history} = props;

    /* 设置title ， 根据路由路径 去 src/locales 里边去设置对应的title */
    let title = formatMessage({ id: `title.${location.pathname}` })
    if(title.indexOf("title.") != -1){
        title = location.pathname
    }

    return (
        <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => {
                if(location.pathname == '/'){
                    return;
                }
                history.goBack()
            }}
            rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
            ]}
        >{title}</NavBar>
  );
};

export default NavBarSam;
