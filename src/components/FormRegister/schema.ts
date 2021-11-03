import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("E-mail é obrigatório")
    .email("Não é um e-mail válido"),
  firstname: yup
    .string()
    .trim()
    .required("Nome é obrigatório")
    .max(16, "No máximo 16 caracteres"),
  password: yup
    .string()
    .trim()
    .required("Senha é obrigatória")
    .min(6, "A senha deve ter no mínimo 6 caracteres"),
  passwordConfirmation: yup
    .string()
    .trim()
    .required("Confirmação de senha é obrigatória")
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
});

export default schema;
