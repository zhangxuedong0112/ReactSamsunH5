import React from 'react';
import NProgress from 'nprogress';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './index.less';
import './nprogress.less';
import { NavBar, Icon } from 'antd-mobile';
import { observer } from 'mobx-react';
import AppStore from "@/store/app"
import { formatMessage } from 'umi-plugin-locale';

NProgress.configure({ showSpinner: false });

let currHref = '';

export interface IBasicLayout {
  loading: any;
  [key: string]: any;
}
const BasicLayout: React.FC<IBasicLayout> = observer(props => {
    const { children, location, location: { pathname = '/' }, route: { routes }, } = props;
    // TODO : 这里需要做路由鉴权

    // const { href } = window.location; // 浏览器地址栏中地址
    // if (currHref !== href) {
    //   // currHref 和 href 不一致时说明进行了页面跳转
    //   NProgress.start(); // 页面开始加载时调用 start 方法
    //   if (!loading.global) {
    //     // loading.global 为 false 时表示加载完毕
    //     NProgress.done(); // 页面请求完毕时调用 done 方法
    //     currHref = href; // 将新页面的 href 值赋值给 currHref
    //   }
    // }

    console.log("@@@@@@", props, formatMessage({ id: `title.${location.pathname}` }))

    /* 设置title ， 根据路由路径 去 src/locales 里边去设置对应的title */
    let title = formatMessage({ id: `title.${location.pathname}` })
    if(title.indexOf("title.") != -1){
        title = location.pathname
    }
    AppStore.title = title;
    


    return (
        <TransitionGroup>
            <CSSTransition key={pathname} classNames="fade" timeout={300}>
                <div key={pathname} style={{ position: 'absolute', width: '100%', height: '100%' }}>
                    <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => history.back()}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >{AppStore.title}</NavBar>

                    <div className={styles.normal}>
                        {children}
                    </div>
                </div>
            </CSSTransition>
        </TransitionGroup>
  );
});

export default BasicLayout;
