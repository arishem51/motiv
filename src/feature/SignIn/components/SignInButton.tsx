import Button, { ButtonProps } from "../../../components/Button";

export const SignInButton = (props: ButtonProps) => {
  return (
    <Button
      title="Sign In"
      textStyle={{ fontWeight: 700 }}
      style={{ width: "100%" }}
      {...props}
    />
  );
};
