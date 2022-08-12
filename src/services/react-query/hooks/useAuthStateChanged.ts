import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

type Props = {
  onAuthSuccess?: () => void;
  onAuthError?: () => void;
};

export const useAuthStateChanged = ({ onAuthSuccess, onAuthError }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        onAuthError && onAuthError();
      }
      onAuthSuccess && onAuthSuccess();
      setIsLoading(false);
    });
  }, [auth, onAuthError, onAuthSuccess]);

  return { isLoading };
};
