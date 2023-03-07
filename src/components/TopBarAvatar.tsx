import { useAuth } from "../context/AuthProvider";
import Avatar from "./Avatar";

const TopBarAvatar = () => {
  const { user, isLoading } = useAuth();

  return (
    <Avatar isLoading={isLoading} imageConfig={user?.userDB?.imageConfig} />
  );
};

export default TopBarAvatar;
