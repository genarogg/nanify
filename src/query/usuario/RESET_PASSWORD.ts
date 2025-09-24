import { gql } from "@apollo/client";

const RESET_PASSWORD = gql`
  mutation ResetPassword($email: String!) {
    resetPassword(email: $email) {
      message
      type
    }
  }
`;

export default RESET_PASSWORD;
