import moment from "moment";

/*
 * validate  string, array and object if message found throws the exception
 * param value (object) input value
 * param message (string) if message is valid and condition false throws exception
 */
export const isEmpty = (value: any, message: string = '') => {
    let _isValid = false;
    if (!value || value === null || value === undefined) {
        _isValid = true
    } else if (isString(value)) {
        _isValid = (value.length === 0 || value.trim().length === 0);
    } else if (value instanceof Date) {
        _isValid = false;
    } else if (typeof value === 'object') {
        _isValid = Object.keys(value).length === 0;
    } else if (Array.isArray(value)) {
        _isValid = value.length === 0;
    }
    if (message !== '' && _isValid) {
        throw message;
    }
    return _isValid
};

/*
 * validate  string length min & max if message found throws the exception
 * param value (string) input value
 * param min (number) min length size
 * param max (number) max length size
 * param message (string) if message is valid and condition false throws exception
 */
export const minMaxLength = (value: any, min: number, max: number, message: string = '') => {
    let _isValid = false;
    if (isString(value)) {
        _isValid = (value.length > min && value.length < max)
    }
    if (message !== '' && !_isValid) {
        throw message;
    }
    return _isValid
};

/*
 * validate  string length min if message found throws the exception
 * param value (string) input value
 * param min (number) min length size
 * param message (string) if message is valid and condition false throws exception
 */
export const minLength = (value: any, min: number, message: string = '') => {
    let _isValid = false;
    if (isString(value)) {
        _isValid = (value.length >= min)
    } else {
        const valString = value.toString();
        _isValid = (valString.length >= min)
    }
    if (message !== '' && !_isValid) {
        throw message;
    }
    return _isValid
};

/*
 * validate  string max if message found throws the exception
 * param value (string) input value
 * param max (number) max length size
 * param message (string) if message is valid and condition false throws exception
 */
export const maxLength = (value: any, max: number, message: string = '') => {
    let _isValid = false;
    if (isString(value)) {
        _isValid = (value.length <= max)
    }
    if (message !== '' && !_isValid) {
        throw message;
    }
    return _isValid
};

/*
 * validate  string numeric if message found throws the exception
 * param value (string) input value
 * param Numeric (number) Numeric
 * param message (string) if message is valid and condition false throws exception
 */
export const onlyNumeric = (value: any, message: string = '') => {
    return regexValidation(value, /^-?[0-9]\d*(\.\d+)?$/, message);
};

/*
 * validate  string numeric if message found throws the exception
 * param value (string) input value
 * param Numeric (number) Numeric
 * param message (string) if message is valid and condition false throws exception
 */
export const alphabetWithSpace = (value: any, message: string = '') => {
    return regexValidation(value, /^[a-zA-Z ]+$/, message);
};
/*
 * validate
 *   string numeric if message found throws the exception
 * param value (string) input value
 * param Numeric (number) Numeric
 * param message (string) if message is valid and condition false throws exception
 */
export const onlyAlphabet = (value: any, message: string = '') => {
    return regexValidation(value, /^[a-zA-Z]+$/, message);
};

/*
 * validate  string numeric if message found throws the exception
 * param value (string) input value
 * param Numeric (number) Numeric
 * param message (string) if message is valid and condition false throws exception
 */
export const onlyAlphaNumeric = (value: any, message: string = '') => {
    return regexValidation(value, /^[0-9a-zA-Z]+$/, message);
};

/*
 * validate  string email if message found throws the exception
 * param value (string) input value
 * param max (number) max length size
 * param message (string) if message is valid and condition false throws exception
 */

export const isValidFullName = (value: any, message: string = '') => {
    const pattern = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
    return regexValidation(value, pattern, message);

};
export const isValidEmail = (value: any, message: string = '') => {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexValidation(value.toLowerCase(), re, message);
};

export const isRegisterEmailValid = (value: any, message: string = '') => {
    // eslint-disable-next-line no-useless-escape
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regexValidation(value.toLowerCase(), re, message);
};

export const isValidMobile = (value: any, message = null) => {
    const re = /^[7-9][0-9]{9}$/;
    return regexValidation(value, re)
}

export const isValidPinCode = (value: any) => {
    const re = /^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$/;
    return regexValidation(value, re)
}

export const isValidDomain = (value: any, message: string = '') => {
    const re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    return regexValidation(value, re, message)
}

export const isValidColor = (value: any, message: string = '') => {
    const re = /^#[0-9a-f]{3}([0-9a-f]{3})?$/i
    return regexValidation(value, re, message)
}
export const regexValidation = (value: any, regexExp: any, message: string = '') => {
    if (value === '') {
        return true
    }
    let _isValid = regexExp.test(value);
    if (message !== '' && !_isValid) {
        throw message;
    }
    return _isValid;
};


export function isString(value: any) {
    if (value === null || value === undefined) {
        return false;
    } else if (typeof value === 'string') {
        return true;
    }
    return false;
}

export const dateFormat = (
    date: string,
    format: string,
    convertToLocal?: boolean
) => {
    var localDate = convertToLocal
        ? moment(moment.utc(date)).local()
        : moment(date);
    return localDate.format(format);
};

export const isObjEmpty = (obj: Object) => Object.keys(obj).length === 0;



export const mapDropDownOption = (dropdownData: any[], labelKey = '', valueKey = '', disabled = '') => {
    let options: any[] = [{ label: 'No data', value: '', disabled: true }];
    if (dropdownData && dropdownData.length > 0) {
        let dropdownOptions = dropdownData.map((item) => {
            return {
                label: item[labelKey],
                value: item[valueKey],
                disable: item[disabled]
            }
        });
        options = [{label: '--Select--', value: 0}, ...dropdownOptions]
    }
    return options;
}

export const mapDropDownOptions = (dropdownData: any[], labelKey = '', valueKey = '', disabled = '') => {
    let options: any[] = [{ label: 'No data', value: '', disabled: true }];
    if (dropdownData && dropdownData.length > 0) {
        let dropdownOptions = dropdownData.map((item) => {
            console.log('items',item)
            return {
                label: item,
                value: item,
                disable: item[disabled]
            }
        });
        options = [{label: '--Select--', value: 0}, ...dropdownOptions]
    }
    return options;
}