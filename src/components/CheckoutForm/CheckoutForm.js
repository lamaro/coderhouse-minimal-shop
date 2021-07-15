import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const CheckoutForm = ({handleSubmit}) => (
    <div>
        <Formik
            initialValues={{ email: '', name: '', phone: '' }}
            validate={values => {
                const errors = {};
                if (!values.name) {
                    errors.name = 'Name Required';
                }
                if (!values.phone) {
                    errors.phone = 'Phone Required';
                }
                if (!values.email) {
                    errors.email = 'Email Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    handleSubmit(values)
                    //handleSubmit(JSON.stringify(values, null, 2))
                    setSubmitting(false);
                }, 200);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field placeholder="Name" type="text" name="name" />
                    <ErrorMessage name="name" component="span" />
                    <Field placeholder="Email" type="email" name="email" />
                    <ErrorMessage name="email" component="span" />
                    <Field placeholder="Phone" type="text" name="phone" />
                    <ErrorMessage name="phone" component="span" />
                    {/* <Field type="password" name="password" />
                    <ErrorMessage name="password" component="span" /> */}
                    <button type="submit" disabled={isSubmitting}>
                        Place Order
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);

export default CheckoutForm;