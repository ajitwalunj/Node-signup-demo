const config = [
  {
    fieldName: "firstname",
    validation: "string",
    message: "Valid first name is required",
    optional: false,
  },
  {
    fieldName: "lastname",
    validation: "string",
    message: "Valid last name is required",
    optional: false,
  },
  {
    fieldName: "email",
    validation: "email",
    message: "Valid email is required",
    optional: false,
  },
  {
    fieldName: "password",
    validation: "password",
    message: "Valid password is required",
    optional: false,
  },
  {
    fieldName: "subscribe_to_newsletter",
    validation: "boolean",
    message: "subscribe_to_newsletter should have boolean value",
    optional: false,
  },
  {
    fieldName: "phone",
    validation: "phone",
    message: "Valid phone number is required",
    optional: true,
  },
];

const validateRequest = (req, res, next) => {
  const reqData = req.body;
  let validRequest = true;
  config.every((ele) => {
    const validated =
      (ele.optional && !reqData[ele.fieldName]) ||
      validate(reqData[ele.fieldName], ele.validation);
    if (!validated) {
      validRequest = false;
      res.status("400").send({ message: ele.message });
    }
    if (!validated) return false;
    else return true;
  });
  if (validRequest) next();
};

const validate = (value, validationType) => {
  let validated = false;
  switch (validationType) {
    case "string":
      validated = value?.trim().length > 2;
      break;
    case "email":
      validated = value?.trim().length > 10 && value?.includes("@");
      break;
    case "password":
      validated = value?.trim().length >= 8;
      break;
    case "boolean":
      validated = typeof value == "boolean";
      break;
    case "phone":
      const phone = /^\d{10}$/;
      validated = phone.test(value);
      break;
    default:
      break;
  }
  return validated;
};

module.exports = validateRequest;
