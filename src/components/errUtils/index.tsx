import { Toast } from 'antd-mobile';
import React from 'react';

let renderErr: React.FC = (error: any) => {
  console.log(error, 66666)
  let arr: any = [];
  for (let key in error) {
    let err = error[key]
    let message = err.errors[0]["message"]
    arr.push(
      <p style={{ margin: "0 0" }}>{message}</p>
    )
  }
  return arr
}

export default {
  toastFormErr: (error: any) => {
    Toast.info(renderErr(error));
  }
}