import styled from "styled-components";
import Divider from "../../components/Divider";
import FormInput from "../../components/FormInput";
import OnboardingText from "../../components/OnboardingText";
import {
  FacebookButton,
  FormOptions,
  GoogleButton,
  OnboardingButton,
} from "./components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Content = styled.div``;

const ButtonWrapper = styled.div`
  display: flex;
  gap: var(--size-14);
  margin-top: var(--size-54);
`;

const StyledDivider = styled(Divider)`
  margin: var(--size-24) 0;
`;

const FormWrapper = styled.div`
  padding: var(--size-20);
  padding-right: var(--size-40);
  background-color: var(--color-white);
  box-shadow: 0px 10px 110px 1px rgba(59, 59, 59, 0.08);
  border: 1px solid #f4f5f6;
  gap: var(--size-20);
  display: flex;
  flex-direction: column;
  border-radius: var(--size-10);
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-12);
`;

const Text = styled.p`
  color: var(--color-dark);
  font-weight: 500;
`;

const SignUp = () => {
  return (
    <Wrapper>
      <Content>
        <OnboardingText isSignIn={false} />
        <ButtonWrapper>
          <GoogleButton />
          <FacebookButton />
        </ButtonWrapper>
        <StyledDivider />
        <FormWrapper>
          <Form>
            <Text>First Name</Text>
            <FormInput placeholder="Phung" />
          </Form>
          <Form>
            <Text>Last Name</Text>
            <FormInput placeholder="Hung" />
          </Form>
          <Form>
            <Text>Email</Text>
            <FormInput placeholder="hungpv@gmail.com" />
          </Form>
          <Form>
            <Text>Password</Text>
            <FormInput placeholder="********" />
          </Form>
        </FormWrapper>
        <FormOptions />
        <OnboardingButton title="Sign Up" />
      </Content>
    </Wrapper>
  );
};

export default SignUp;
