import is from 'is_js'


export const emailValidator = (email) => {
    return is.email(email)
}

export const requireValidator = (value) => {
    return value.trim().length > 0
} 

export const minLengthValidator = (value, minLength) => {
    return value.trim().length >= minLength
}