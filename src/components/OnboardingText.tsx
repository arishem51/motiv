import { Link as LinkRRD } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-16);
`;

const H1 = styled.h1`
  color: var(--color-dark);
  font-size: 30px;
  font-weight: 700;
`;

const WrapperSubTxt = styled.div`
  display: flex;
  gap: 4px;
`;

const Link = styled(LinkRRD)`
  text-decoration: none;
`;

const H3 = styled.h3`
  color: var(--color-dark4);
  font-weight: 500;
  font-size: 18px;
`;

const PurpleH3 = styled(H3)`
  color: var(--color-purple);
`;

type Props = {
  isSignIn: boolean;
};

const OnboardingText = ({ isSignIn }: Props) => {
  const linkTo = isSignIn ? "SignUp" : "SignIn";

  return (
    <Wrapper>
      <H1>Get's Started.</H1>
      <WrapperSubTxt>
        <H3>Don't have an account?</H3>
        <Link to={linkTo}>
          <PurpleH3>{isSignIn ? "Sign Up" : "Sign In"}</PurpleH3>
        </Link>
      </WrapperSubTxt>
    </Wrapper>
  );
};

export default OnboardingText;
