import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useCheckAuth from "hooks/useCheckAuth";
import { signIn } from "utils/mainApi";

export default function useFormSubmit() {
  const [error, setError] = useState("");
  const checkAuth = useCheckAuth();
  const navigate = useNavigate();

  async function handleSubmit(values) {
    try {
      await signIn(values);
      try {
        await checkAuth();
        navigate("/movies");
      } catch (err) {
        setError(err.message);
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return { handleSubmit, error };
}
