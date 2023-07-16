import React, {useState, useRef} from 'react';
import './Contacts.css';
import {Formik} from "formik";
import emailjs from '@emailjs/browser';

function Contacts(props) {

    const [show, setShow] = useState(false)
    const form = useRef();

    const sendEmail = () => {

        emailjs.sendForm('service_w8zu28n', 'template_35ho9ee', form.current, 'rk1W586R2chv_9l5r')
            .then((result) => {
                console.log(result.text);
                console.log('Письмо отправлено на почту');


            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div>
            <section className='contacts'>

                <Formik
                    initialValues={{email: '', password: ''}}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Заполните поле "email"!';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Не правильно набран email адрес!';
                        }
                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        setShow(true);
                        setSubmitting(false);
                        sendEmail();

                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                          /* and other goodies */
                      }) => (
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className='form-wrapper'>

                                <label htmlFor="">Введите Вашу почту:</label>

                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                            </div>
                            <div className='form-wrapper'>
                                <label htmlFor="">Введите свое сообщение:</label>
                                <textarea name="message" id="" cols="40" rows="5"></textarea>
                                {errors.password && touched.password && errors.password}
                            </div>
                            <button type="submit" disabled={isSubmitting}>
                               Отправить
                            </button>
                        </form>
                    )}
                </Formik>

                {show && (<p>Ваше сообщение отправлено! Спасибо за обращение</p>)}


            </section>

        </div>
    );
}

export default Contacts;
  


