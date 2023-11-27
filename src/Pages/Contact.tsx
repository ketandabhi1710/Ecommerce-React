import React from "react";
import styled from "styled-components";

interface WrapperProps {
  theme: {
    colors: {
      white: string;
      btn: string;
    };
  };
}

const Wrapper = styled.section<WrapperProps>`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

const Contact: React.FC = () => {
  return <Wrapper theme={{ colors: { white: "your_color", btn: "your_color" } }}> DSFSFSSAFSDF</Wrapper>;
};

export default Contact;
