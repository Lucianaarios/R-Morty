const validation = (userData) => {
    const errors = {};


   if(!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = 'No es un email valido'
   }

   if(userData.email === '') {
    errors.email = 'El campo no puede estar vacio '
   }

   if(userData.email.length > 35 ) {
    errors.email = 'Debe ser menor que 35 caracteres'
   }

   if(!/\d/.test(userData.password)) {
    errors.password = 'Debe contener al menos un numero'
   }

   if(userData.password.length < 6 ) {
    errors.password = 'La contraseña debe ser mayor a 6 caracteres'
   }
if(userData.password.length > 10) {
    errors.password = 'No puede ser mayor a 10 caracteres'
}
   return errors;
};

export default validation;