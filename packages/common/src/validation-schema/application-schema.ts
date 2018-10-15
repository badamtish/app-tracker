import * as yup from 'yup';

export const stringTooLong = 'Limit to 255 characters';
export const invalidURL = 'Enter valid URL';

export const applicationRequiredStringValidation = yup
    .string()
    .max(255, stringTooLong)
    .required();

export const applicationStringValidation = yup
    .string()
    .max(255, stringTooLong);

export const urlValidation = yup
    .string()
    .url(invalidURL)
    .required();

export const statusValidation = yup
    .string();

export const dateValidation = yup
    .date()
    .required();

export const validApplicationSchema = yup.object().shape({
    jobTitle: applicationRequiredStringValidation,
    company: applicationRequiredStringValidation,
    date: dateValidation,
    url: urlValidation,
    comments: applicationStringValidation,
    status: statusValidation
});