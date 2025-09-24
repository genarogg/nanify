import { gql } from "@apollo/client";

const REGISTER_USUARIO = gql`
  mutation RegisterUsuario($name: String!, $email: String!, $password: String!) {
    registerUsuario(name: $name, email: $email, password: $password) {
      data {
        token
      }
    }
  }
`;

export default REGISTER_USUARIO;