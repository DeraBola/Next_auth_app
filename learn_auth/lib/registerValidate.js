export default function register_validate(values){
    const errors = {};
//validate username
    if (!values.username) {
        errors.username = 'Required';
      } else if (values.username.length < 5 || values.username.length > 10) {
        errors.username = 'Must be > 5 characters   ';
      }//else if(values.username.includes('')){
       // errors.password ='invalid username';
      //}

      //validate email
    if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
    
      //validation for password
    if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 8 || values.password.length > 20) {
        errors.password = 'Must be 20 characters or less';
      }//else if(values.password.includes('')){
        //errors.password ='invalid password';
      //}
//validate confirm password
if (!values.cpassword) {
    errors.cpassword = 'Required';
  } else if(values.password !== values.cpassword) {
    errors.cpassword = 'passsword not matched...!';
  }//else if(values.cpassword.includes('')){
   // errors.cpassword ='invalid confirm password';
  //}
      return errors;
    }