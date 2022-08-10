import { Icons } from "../../../assets";
import Button, { ButtonProps } from "../../../components/Button";

export const GoogleButton = (props: ButtonProps) => {
  return (
    <Button
      title="Sign in with Google"
      variant="secondary"
      icon={<Icons.Google />}
      {...props}
    />
  );
};
