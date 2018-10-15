import React from 'react';
import { FieldProps } from 'formik';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

export const InputField: React.SFC<FieldProps<any> & { placeHolder: string }> = ({
    field,
    form: { touched, errors },
    ...props
}) => {
    const errorMsg = touched[field.name] && errors[field.name];
    return (
        <FormItem help={errorMsg} validateStatus={errorMsg ? 'error' : undefined}>
            <Input {...field} {...props} />
        </FormItem>
    );
};