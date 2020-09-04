import React from 'react';
import NProgress from 'nprogress';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './index.less';
import './nprogress.less';
import { formatMessage } from 'umi-plugin-locale';
import NavBarSam from "./NavBarSam"
import TabBarSam from "./TabBarSam"

NProgress.configure({ showSpinner: false });

export interface IBasicLayout {
  loading: any;
  [key: string]: any;
}
const BasicLayout: React.FC<IBasicLayout> = (props:any) => {
    const { children, location, location: { pathname = '/' }, route: { routes }, history} = props;
    // TODO : 这里需要做路由鉴权
    
    // 根据前进还是后退显示不同的转场动画效果
    const ANIMATION_MAP: any = {
        PUSH: 'forward',
        POP: 'back'
    };

    console.log("@@@@@@", props, formatMessage({ id: `title.${location.pathname}` }), ANIMATION_MAP[history.action])

    return (
        <div>
            <TabBarSam {...props}></TabBarSam>
            {/* <TransitionGroup
                childFactory={child => React.cloneElement( child, {classNames: ANIMATION_MAP[history.action]})}
            >
                <CSSTransition key={pathname} classNames="fade" timeout={300}>
                    <div key={pathname} style={{ position: 'absolute', width: '100%', height: '100%' }}>
                        <NavBarSam {...props}></NavBarSam>

                        <div className={styles.normal}>
                            {children}
                        </div>

                        

                    </div>
                </CSSTransition>
            </TransitionGroup> */}
        </div>
  );
};

export default BasicLayout;
