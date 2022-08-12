import { useForm } from "react-hook-form";
import styled from "styled-components";
import Divider from "../../components/Divider";
import FormInput from "../../components/FormInput";
import OnboardingText from "../../components/OnboardingText";
import { SignUpForm, useSignUp } from "../../services/react-query";
import { EMAIL_ERROR, REQUIRED_ERROR } from "../../types";
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
  border: 1px solid var(--color-white5);
  gap: var(--size-12);
  display: flex;
  flex-direction: column;
  border-radius: var(--size-10);
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-8);
`;

const Text = styled.p`
  color: var(--color-dark);
  font-weight: 500;
`;

const ErrorText = styled.p`
  color: var(--color-red);
  font-weight: 500;
  height: 16px;
`;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>();

  const { mutate: signUp, isLoading } = useSignUp();

  const handleClick = handleSubmit((data) => {
    signUp(data);
  });

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
            <FormInput
              type="text"
              placeholder="Phung"
              {...register("firstName", {
                required: {
                  value: true,
                  message: REQUIRED_ERROR,
                },
              })}
            />
            <ErrorText>{errors?.firstName?.message}</ErrorText>
          </Form>
          <Form>
            <Text>Last Name</Text>
            <FormInput
              type="text"
              placeholder="Hung"
              {...register("lastName", {
                required: {
                  value: true,
                  message: REQUIRED_ERROR,
                },
              })}
            />
            <ErrorText>{errors?.lastName?.message}</ErrorText>
          </Form>
          <Form>
            <Text>Email</Text>
            <FormInput
              type="email"
              placeholder="hungpv@gmail.com"
              {...register("email", {
                required: {
                  value: true,
                  message: REQUIRED_ERROR,
                },
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: EMAIL_ERROR,
                },
              })}
            />
            <ErrorText>{errors?.email?.message}</ErrorText>
          </Form>
          <Form>
            <Text>Password</Text>
            <FormInput
              placeholder="********"
              {...register("password", {
                required: {
                  value: true,
                  message: REQUIRED_ERROR,
                },
              })}
              type="password"
            />
            <ErrorText>{errors?.password?.message}</ErrorText>
          </Form>
        </FormWrapper>
        <FormOptions />
        <OnboardingButton
          title="Sign Up"
          onClick={handleClick}
          loading={isLoading}
          disabled={isLoading}
        />
      </Content>
    </Wrapper>
  );
};

export default SignUp;
