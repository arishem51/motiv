import { User } from "firebase/auth";
import { createContext, PropsWithChildren, useContext } from "react";
import { useAuthStateChanged } from "../services/react-query/hooks/useAuthStateChanged";

type Props = {} & PropsWithChildren;

const Context = createContext<{ user: User | null; isLoading: boolean }>({
  user: null,
  isLoading: true,
});

const AuthProvider = ({ children }: Props) => {
  const { isLoading, user } = useAuthStateChanged({});
  return (
    <Context.Provider value={{ user, isLoading }}>{children}</Context.Provider>
  );
};

export const useAuth = () => {
  return useContext(Context);
};

export default AuthProvider;
