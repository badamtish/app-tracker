import * as yup from 'yup';

const stringTooLong = 'Limit to 255 characters';
const invalidURL = 'Enter valid URL';

const applicationRequiredStringValidation = yup
    .string()
    .max(255, stringTooLong)
    .required();

const applicationStringValidation = yup
    .string()
    .max(255, stringTooLong);

const urlValidation = yup
    .string()
    .url(invalidURL)
    .required();

const statusValidation = yup
    .string();

const dateValidation = yup
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