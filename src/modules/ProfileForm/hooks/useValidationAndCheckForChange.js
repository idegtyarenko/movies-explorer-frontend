import { useEffect, useState } from "react";

import useValidation from "hooks/useValidation";

export default function useValidationAndCheckForChange(user, fields) {
  const fieldIds = fields.map((field) => field.id);
  const defaultValues = fieldIds.reduce((acc, fieldId) => {
    acc[fieldId] = user[fieldId];
    return acc;
  }, {});
  const { values, errors, isValid, handleChange } =
    useValidation(defaultValues);

  const [isValidAndChanged, setIsValidAndChanged] = useState();

  useEffect(() => {
    const isValueChanged = ([id, value]) => {
      return value !== user[id];
    };
    setIsValidAndChanged(
      isValid && Object.entries(values).some(isValueChanged),
    );
  }, [isValid, user, values]);

  return { values, errors, handleChange, isValidAndChanged };
}
