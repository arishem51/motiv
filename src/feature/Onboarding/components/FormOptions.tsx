import styled from "styled-components";
import Checkbox from "../../../components/Checkbox";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--size-24);
  margin-bottom: var(--size-30);
`;

const CheckboxWrapper = styled.div`
  display: flex;
  gap: var(--size-12);
  align-items: center;
`;

const ForgotPasswordText = styled.p`
  color: var(--color-purple);
  font-weight: 500;
  cursor: pointer;
`;

const RememberMeText = styled.p`
  color: var(--color-checkbox);
  font-weight: 500;
`;

export const FormOptions = () => {
  return (
    <Wrapper>
      <CheckboxWrapper>
        <Checkbox />
        <RememberMeText>Remember Me</RememberMeText>
      </CheckboxWrapper>
      <ForgotPasswordText>Forgot your password?</ForgotPasswordText>
    </Wrapper>
  );
};
