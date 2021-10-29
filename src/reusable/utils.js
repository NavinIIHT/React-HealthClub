export const checkRequired = (data) => {
    return (data) && (data !== '');
}

export const checkNumber = (number) => {
    const numberRegx = /^[0-9]+$/;
    return numberRegx.test(number);
};

export const checkAlphabets = (data) => {
    const dataRegx = /^[aA-zZ\s]+$/;
    return dataRegx.test(data);
};

export const checkEmail = (email) => {
    const emailRegx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegx.test(email);
};

export const checkAge = (age) => {
    return checkNumber(age) && age > 18 && age < 60
};


export const pinCode = (code) => {
    return checkNumber(code) && code.length === 6
}
