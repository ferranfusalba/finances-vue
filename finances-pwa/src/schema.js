/* import * as yup from 'yup';

// let values = {
//     email: "",
//     password: "",
//     confirmPassword: "",
//     hobby: "",
//     checkbox: false,
// };

export const schema = yup.object().shape({
  email: yup.string().required("Email is required")
    .email("Email is invalid"),
//   password: yup.string().required("Password is required"),
//   confirmPassword: yup.string().required("Please confirm your password")
//     .oneOf([yup.ref("password"), null], "Passwords do not match"),
//   hobby: yup.string().required("Hobby is required"),
//   checkbox: yup.bool().required("Checkbox must be accepted")
//     .oneOf([true], "Checkbox must be accepted"),
});
*/
// const validationResult = schema
//     .validate(values, { abortEarly: false })
//     .then(() => {
//       alert(JSON.stringify(values, null, 2));
//     })
//     .catch((err) => {
//       console.log(err.errors);
//     });

    //console.log message 
    //[ "Email is invalid", "Passwords do not match", "Hobby is required", "Che//ckbox must be accepted" ]