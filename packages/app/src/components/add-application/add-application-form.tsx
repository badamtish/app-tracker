import * as React from 'react';
import * as Antd from 'antd';
import { withFormik, FormikErrors, FormikProps, Field, Form } from 'formik';
import { Button } from '@material-ui/core';
import { InputField } from './form-field';
import { validApplicationSchema } from '@apptrkr/common';
import { ApplicationState } from '../../utils/models';
import { AddApplicationMutationVariables } from '../../utils/schemas/types/mutate-types';

const { Form: AntForm } = Antd;
const FormItem = AntForm.Item;

interface Props {
    submit: (values: AddApplicationMutationVariables) => Promise<FormikErrors<AddApplicationMutationVariables> | null>;
}

class C extends React.PureComponent<FormikProps<AddApplicationMutationVariables> & Props> {
    render() {
        return (
            <Form style={{ display: 'flex' }} >
                <div style={{ margin: 'auto', display: 'inline', paddingRight: '10px' }}>
                    <Field
                        name="jobTitle"
                        placeholder="Job Title"
                        component={InputField}
                    />
                </div>
                <div style={{ margin: 'auto', display: 'inline', paddingRight: '10px' }}>
                    <Field
                        name="company"
                        placeholder="Company"
                        component={InputField}
                    />
                </div>
                <div style={{ margin: 'auto', display: 'inline', paddingRight: '10px' }}>
                    <Field
                        name="url"
                        placeholder="URL"
                        component={InputField}
                    />
                </div>
                <div style={{ margin: 'auto', display: 'inline', paddingRight: '10px' }}>
                    <FormItem>
                        <Button
                            color="primary"
                            type="submit"
                        >
                            Save
                        </Button>
                    </FormItem>
                </div>
            </Form>
        );
    }
}

export const ApplicationForm = withFormik<Props, AddApplicationMutationVariables>({
    validationSchema: validApplicationSchema,
    mapPropsToValues: () => ({ jobTitle: '', company: '', url: '', date: new Date(), comments: '', status: ApplicationState.applied, userId: '' }),
    handleSubmit: async (values, { props, setErrors, resetForm }) => {
        const errors = await props.submit(values);
        resetForm();
        if (errors) {
            setErrors(errors);
        }
    }
})(C);
