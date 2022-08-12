import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";

type Props = {
  onAuthSuccess?: () => void;
  onAuthError?: () => void;
};

export const useAuthStateChanged = ({ onAuthSuccess, onAuthError }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth();
  useEffect(() => {
    setIsLoading(true);
    const remove = onAuthStateChanged(auth, (user) => {
      if (user) {
        onAuthSuccess && onAuthSuccess();
        setUser(user);
      } else {
        onAuthError && onAuthError();
        setUser(null);
      }
      setIsLoading(false);
    });
    return () => {
      remove();
    };
  }, [auth, onAuthError, onAuthSuccess]);

  return { isLoading, user };
};
