import { emailValidator, requireValidator, minLengthValidator } from './validators'

const validateControl = ({ value, validations }) => {
    let isInvalid = false
    
    if (validations.required) {
        isInvalid = requireValidator(value)
    }
    if (validations.minLength) {
        isInvalid = minLengthValidator(value, validations.minLength)
    }
    if (validations.email) {
        console.log('Is correct email',emailValidator(value))
        isInvalid = emailValidator(value)
    }
    
    return !isInvalid
}
export default validateControl