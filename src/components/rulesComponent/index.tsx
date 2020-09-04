import * as React from 'react';
import style from "./style.less"

export interface RulesProps{
    [key: string]: any;
    errorHint: any;
    showIcon:any;
}

export function RulesComponent(Component: (React.ComponentClass<any, any> | React.FC<any>)) {
    return class extends React.Component<RulesProps> {

        render(){
            const {errorHint, showIcon} = this.props;
            let comPorps = {...this.props};
            delete comPorps.errorHint
            delete comPorps.showIcon

            return <div className={errorHint&&style.errStyle} style={{position: "relative"}}>
                <Component {...comPorps}>
                </Component>

                {showIcon && <span className={style.errIcon}>*</span>}
                {/* {errorHint && <div className={style.errMsg}>
                    {errorHint.join(",")}
                </div>} */}
            </div>
        }
    }
}
