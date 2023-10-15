import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useCheckAuth from "hooks/useCheckAuth";
import { signUp } from "utils/mainApi";

export default function useFormSubmit() {
  const [error, setError] = useState("");
  const checkAuth = useCheckAuth();
  const navigate = useNavigate();

  async function handleSubmit(values) {
    try {
      await signUp({
        email: values.email,
        password: values.password,
        name: values["user-name"],
      });
      try {
        await checkAuth();
        navigate("/movies");
      } catch (err) {
        navigate("/signin");
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return { handleSubmit, error };
}
