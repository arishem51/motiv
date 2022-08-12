import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { firebaseDB } from "../..";
import Divider from "../../components/Divider";
import FormInput from "../../components/FormInput";
import OnboardingText from "../../components/OnboardingText";
import { SignUpForm, useSignUp } from "../../services/react-query";
import { RouteNames } from "../../services/react-router";
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
  const { register, handleSubmit } = useForm<SignUpForm>();
  const { mutate: signUp, isLoading } = useSignUp();
  const navigate = useNavigate();

  const handleClick = handleSubmit((data) => {
    signUp(data, {
      async onSuccess(_, variables) {
        const { email, firstName, lastName } = variables;
        await addDoc(collection(firebaseDB, "users"), {
          firstName,
          lastName,
          email,
        });
        toast.success("Tạo tài khoản thành công");
        navigate(RouteNames.DASHBOARD);
      },
    });
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
            <FormInput placeholder="Phung" {...register("firstName")} />
          </Form>
          <Form>
            <Text>Last Name</Text>
            <FormInput placeholder="Hung" {...register("lastName")} />
          </Form>
          <Form>
            <Text>Email</Text>
            <FormInput placeholder="hungpv@gmail.com" {...register("email")} />
          </Form>
          <Form>
            <Text>Password</Text>
            <FormInput placeholder="********" {...register("password")} />
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
