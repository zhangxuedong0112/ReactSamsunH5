import * as React from 'react';
import { createForm } from 'rc-form';

export function DesForm(Component: (React.ComponentClass<any, any> | React.FC<any>)) {
    return createForm()(Component) as any; 
}
