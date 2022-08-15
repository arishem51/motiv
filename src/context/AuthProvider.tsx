import { createContext, PropsWithChildren, useContext, useMemo } from "react";
import { Me } from "../services/firebase/types";
import { useAuthStateChanged } from "../services/react-query";

type Props = {} & PropsWithChildren;

const Context = createContext<{ user: Me | null; isLoading: boolean }>({
  user: null,
  isLoading: true,
});

const AuthProvider = ({ children }: Props) => {
  const { isLoading, user } = useAuthStateChanged({});
  const memoValue = useMemo(() => {
    return {
      isLoading,
      user,
    };
  }, [isLoading, user]);
  return <Context.Provider value={memoValue}>{children}</Context.Provider>;
};

export const useAuth = () => {
  return useContext(Context);
};

export default AuthProvider;
