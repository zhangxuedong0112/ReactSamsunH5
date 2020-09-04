import React from "react";
import Intensify from '@/components/Intensify';
import { DesForm } from '@/components/DesForm';
import { observer } from 'mobx-react';
import { Picker as _Picker, DatePicker as _DatePicker, List, Button, NavBar, Icon, WhiteSpace, Toast, TextareaItem, InputItem as _InputItem } from 'antd-mobile';
import errUtils from '@/components/errUtils';
import { RulesComponent } from "@/components/rulesComponent"

const { Item } = List
const Picker = RulesComponent(_Picker)
const InputItem = RulesComponent(_InputItem)
const DatePicker = RulesComponent(_DatePicker)

const formDemo: React.FC<any> = Intensify([observer, DesForm], (props: any) => {

  const { form } = props;
  const { getFieldProps, getFieldError, resetFields, validateFields, getFieldsValue } = form;

  const onSubmit = () => {
    validateFields({ force: true }, (error, val) => {
      if (error) return errUtils.toastFormErr(error);

      console.info("!!!!", val)

    });
  }

  const onReset = () => {
    resetFields();
  }

  return <>
    <List>

      <InputItem
        {...getFieldProps('account', {
          // initialValue: 'little ant',
          rules: [
            { required: true, message: 'Please input account' },
          ],
        })}
        clear
        showIcon={true}
        errorHint={getFieldError('account')}
        placeholder="please input account"
      >Account</InputItem>
      <InputItem {...getFieldProps('password')} placeholder="please input password" type="password">
        Password
            </InputItem>

      <WhiteSpace size="xl" />

      <Picker
        data={[
          {
            label: '2020',
            value: '2020',
          },
          {
            label: '2019',
            value: '2019',
          },
        ]}
        cols={1}
        {...getFieldProps('year', {
          // initialValue: 'little ant',
          rules: [
            { required: true, message: 'Please input year' },
          ],
        })}
        showIcon={true}
        errorHint={getFieldError('year')}
        placeholder="please input year"
      >
        <List.Item arrow="horizontal">年</List.Item>
      </Picker>

      <WhiteSpace size="xl" />

      <DatePicker extra='请选择' {...getFieldProps('startTime', {
        // initialValue: startTime,
        rules: [
          { required: true, message: '请选择开始时间!' },
        ]
      })}
        showIcon={true}
        errorHint={getFieldError('startTime')}
        format={"YYYY-MM-DD HH:mm:ss"}>
        <List.Item arrow="horizontal">开始时间</List.Item>
      </DatePicker>

      <DatePicker extra='请选择' {...getFieldProps('endTime', {
        rules: [
          { required: true, message: '请选择结束时间!' },
        ]
      })}
        showIcon={true}
        errorHint={getFieldError('endTime')}
        format={"YYYY-MM-DD HH:mm:ss"}>
        <List.Item arrow="horizontal"
        >结束时间</List.Item>
      </DatePicker>

      <WhiteSpace size="xl" />

      <Item>
        <Button type="primary" size="small" inline onClick={onSubmit}>Submit</Button>
        <Button size="small" inline style={{ marginLeft: '2.5px' }} onClick={onReset}>Reset</Button>
      </Item>

    </List>
  </>
})

export default formDemo;