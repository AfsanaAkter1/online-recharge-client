import { useContext } from "react";
import { AuthContext } from "../../Components/Contexts/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
