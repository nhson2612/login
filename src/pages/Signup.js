import { Button, Paper, Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Field, Formik, Form } from 'formik';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const validate = Yup.object({
  firstname: Yup.string().required('Required'),
  lastname: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().required('Required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
}); 

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-full h-full grid md:grid-cols-2 grid-cols-1'>
        {/* LEFT */}
        <div className='w-full h-full flex items-center justify-center'>
          <Paper className='w-[80%]' elevation={3}>
            <Formik
              initialValues={initialValues}
              validationSchema={validate}
              onSubmit={values => {
                console.log('Form data', values);
                setIsSubmitting(true);
              }}
            >
              <Form className='flex flex-col gap-5 p-5'>
                <Stack direction='row' spacing={2}>
                  <Field name='firstname'>
                    {
                      ({ field, meta }) => {
                        return (
                          <TextField sx={{flexGrow: 1}} {...field} label='First Name' variant='outlined' helperText={meta.error} error={Boolean(meta.error)} />
                        )
                      }
                    }
                  </Field>
                  <Field name='lastname'>
                    {
                      ({ field, meta }) => {
                        return (
                          <TextField sx={{flexGrow: 1}} {...field} label='Last Name' variant='outlined' helperText={meta.error} error={Boolean(meta.error)} />
                        )
                      }
                    }
                  </Field>
                </Stack>
                <Field name='email' type='email'>
                  {
                    ({ field, meta }) => {
                      return (
                        <TextField {...field} label='Email' variant='outlined' helperText={meta.error} error={Boolean(meta.error)}  />
                      )
                    }
                  }
                </Field>
                <Stack direction='row' spacing={2}>
                  <Field name='password' type='password'>
                    {
                      ({ field, meta }) => {
                        return (
                          <TextField sx={{flexGrow: 1}} {...field} type='password' label='Password' variant='outlined' helperText={meta.error} error={Boolean(meta.error)} />
                        )
                      }
                    }
                  </Field>
                  <Field name='confirmPassword' type='password'>
                    {
                      ({ field, meta }) => {
                        return (
                          <TextField sx={{flexGrow: 1}} {...field} type='password' label='Confirm Password' variant='outlined' helperText={meta.error} error={Boolean(meta.error)} />
                        )
                      }
                    }
                  </Field>
                </Stack>
                {
                  isSubmitting ? (
                    <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
                      Fetch data
                    </LoadingButton>
                  ) : (
                    <Button variant='contained' color='primary' type='submit'>Sign Up</Button>
                  )
                }
                <Link to='/login'><Button variant='outlined' color='primary' fullWidth >Login</Button></Link>
              </Form>
            </Formik>
          </Paper>
        </div>

        {/* RIGHT */}
        <div className='bg-blue-500 w-full h-full flex flex-col items-start justify-center md:pl-20 gap-5'>
          <h2 className='text-5xl text-white font-bold'>FACEBOOK</h2>
          <p className='text-white text-xl font-semibold '>Connect with friends and the world around you on Facebook.</p>
        </div>
      </div>
    </div>
  )
}

export default SignUp