const validate = values => {
  const errors = {};

  if (!values.user_name) {
    errors.user_name = 'Todos los campos son requeridos'
  }
  if (!values.user_email) {
    errors.user_email = 'Todos los campos son requeridos'
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user_email)) {
    errors.user_email = 'Por favor ingresa una direccion de correo válida';
  }
  if (!values.user_tel) {
    errors.user_tel = 'Todos los campos son requeridos'
  }


  return errors;
};

export default validate