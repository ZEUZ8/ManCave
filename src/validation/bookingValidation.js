import * as yup from "yup"

const phoneRegExp = /^((\+[0-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

export const bookingValidation = yup.object().shape({
    userName: yup
        .string()
        .min(4,'Atleast 4 charecters')
        .max(20)
        .matches(/^[a-zA-Z\s]+$/, 'Only alphabets are allowed')
        .required('Required'), 
    mobile : yup
        .string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required'),
})