
import * as Yup from "yup";

const contactUsValidationSchema = Yup.object({
    firstName: Yup.string().required("First name required.").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    lastName: Yup.string().required("Last name required.").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    message: Yup.string().required("Message required."),
    email: Yup.string().email("Invalid email.").required("Email required."),
    mobile: Yup.string().required("Mobile Number required."),
})

export default contactUsValidationSchema