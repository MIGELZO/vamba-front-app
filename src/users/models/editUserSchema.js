import Joi from "joi";

const editUserSchema = {
  pId: Joi.string()
    .regex(/^[0-9]+$/)
    .min(2)
    .max(22)
    .messages({
      "string.pattern.base": 'user "personal I.D" must contain digits only',
      "string.min": 'user "personal I.D" must be at least 2 digits',
      "string.max": 'user "personal I.D" must be at most 22 digits',
      "any.required": 'user "personal I.D" is required',
    })
    .required(),
  firstName: Joi.string().min(2).max(20).required(),
  lastName: Joi.string().min(2).max(20).allow("", null),
  email: Joi.string()
    .allow("", null)
    .regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
    .message('user "mail" must be a valid mail'),
  phone: Joi.string()
    .allow("", null)
    // .regex(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/) // here for error handeling check if needed, throwing bad request 400
    .regex(/^0[0-9]{8,9}$/)
    .message(
      'user "phone" must be a valid phone number and contains numbers only'
    ),
  birthDate: Joi.date().required().messages({
    "date.base": 'user "birthDate" must be a valid date',
  }),
  gender: Joi.string().valid(0, 1, 2).allow("", null).messages({
    "any.only": 'user "gender" must be one of: Male, Female, Other',
  }),
};

export default editUserSchema;
