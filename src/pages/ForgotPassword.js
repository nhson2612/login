import React from 'react'
import { Paper, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik';
import { TextField, Button } from '@mui/material';
import * as Yup from 'yup';

const initialValues = {
    email: '',
}

const validate = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
});

const ForgotPassword = () => {
  return (
    <div className='flex items-center justify-center container w-full h-screen'>
        <Paper className='w-[50%] p-5' elevation={3}>
            <Typography variant='h4'>Email address</Typography>
            <Typography variant='body1'>Please enter the email address associated with your account.</Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={validate}
                onSubmit={values => {
                    console.log('Form data', values);
                }}
            >
                <Form className='flex flex-col gap-5 p-5'>
                    <Field name='email' type='email'>
                        {
                            ({ field, meta }) => {
                                return (
                                    <TextField {...field} label='Email' variant='outlined' helperText={meta.error} error={Boolean(meta.error)} fullWidth />
                                )
                            }
                        }
                    </Field>
                    <Button type='submit' variant='contained' color='primary' fullWidth>Submit</Button>
                </Form>
            </Formik>
        </Paper>
    </div>
  )
}

export default ForgotPassword