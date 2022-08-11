import Button, { ButtonProps } from "../../../components/Button";

export const OnboardingButton = (props: ButtonProps) => {
  return (
    <Button
      textStyle={{ fontWeight: 700 }}
      style={{ width: "100%" }}
      {...props}
    />
  );
};
