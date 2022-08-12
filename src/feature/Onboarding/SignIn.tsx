import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import Divider from "../../components/Divider";
import FormInput from "../../components/FormInput";
import OnboardingText from "../../components/OnboardingText";
import { SignInForm, useSignIn } from "../../services/react-query";
import { RouteNames } from "../../services/react-router";
import { EMAIL_ERROR, REQUIRED_ERROR, SIGN_IN_SUCCESS } from "../../types";
import { resolveSignInError } from "../../utils/resolveSignInError";
import {
  OnboardingButton,
  FacebookButton,
  GoogleButton,
  FormOptions,
} from "./components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>();

  const navigate = useNavigate();
  const { mutate: signIn, isLoading } = useSignIn();

  const handleClick = handleSubmit((data) => {
    signIn(data, {
      onSuccess: () => {
        toast.success(SIGN_IN_SUCCESS);
        navigate(RouteNames.DASHBOARD);
      },
      onError: (error) => {
        const messages = resolveSignInError(error.code);
        toast.error(messages);
      },
    });
  });

  return (
    <Wrapper>
      <Content>
        <OnboardingText isSignIn />
        <ButtonWrapper>
          <GoogleButton />
          <FacebookButton />
        </ButtonWrapper>
        <StyledDivider />
        <FormWrapper>
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
            <ErrorText>{errors.email?.message}</ErrorText>
          </Form>
          <Form>
            <Text>Password</Text>
            <FormInput
              placeholder="********"
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: REQUIRED_ERROR,
                },
              })}
            />
            <ErrorText>{errors.password?.message}</ErrorText>
          </Form>
        </FormWrapper>
        <FormOptions />
        <OnboardingButton
          loading={isLoading}
          title="Sign In"
          onClick={handleClick}
          disabled={isLoading}
        />
      </Content>
    </Wrapper>
  );
};

export default SignIn;
