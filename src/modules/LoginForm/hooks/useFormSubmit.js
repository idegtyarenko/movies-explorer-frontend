import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useCheckAuth from "hooks/useCheckAuth";
import { signIn } from "utils/mainApi";

export default function useFormSubmit() {
  const [error, setError] = useState("");
  const isAuthorized = useCheckAuth();
  const navigate = useNavigate();

  async function handleSubmit(values) {
    try {
      await signIn(values);
      try {
        await isAuthorized;
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
