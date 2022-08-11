import { Icons } from "../../../assets";
import Button, { ButtonProps } from "../../../components/Button";

export const FacebookButton = (props: ButtonProps) => {
  return (
    <Button
      title="Sign in with Facebook"
      icon={<Icons.Facebook />}
      style={{ backgroundColor: "var(--color-facebook)" }}
      {...props}
    />
  );
};
