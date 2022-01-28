import * as yup from 'yup'

const schema = () => yup.object().shape({
  user_name: yup.string()
    .min(5, 'Eso es muy corto :(')
    .max(30, 'Eso es muy largo!')
    .required('Este campo es requerido'),
  user_email: yup.string().email().required('Este campo es requerido'),
  user_tel: yup.string()
})

export default schema