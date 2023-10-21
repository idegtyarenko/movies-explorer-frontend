import useValidation from "hooks/useValidation";
import { useDisplayNotification } from "modules/ContentWithNotifications";
import Section from "ui/Section";
import FormField from "ui/FormField";
import Switch from "ui/Switch";

import "./SearchForm.css";
import IconButton from "ui/IconButton";

export default function SearchForm({ onSubmit, initialQuery }) {
  const { values, handleChange } = useValidation(initialQuery);
  const displayNotification = useDisplayNotification();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values && values["query-text"]) {
      onSubmit(values);
    } else {
      displayNotification({
        type: "error",
        title: "Нужно ввести ключевое слово",
        text: "Чтобы что-то найти, надо что-то искать.",
      });
    }
  };

  const handleSwitchChange = (e) => {
    handleChange(e);
    onSubmit({ ...values, "short-filter": !values["short-filter"] });
  };

  return (
    <Section className="search-form section_mobile-margins_m">
      <form className="search-form__form" onSubmit={handleSubmit} noValidate>
        <div className="search-form__field">
          <FormField
            name="query-text"
            className="search-form__input"
            type="search"
            placeholder="Фильм"
            onChange={handleChange}
            value={values && values["query-text"]}
            required
          />
          <IconButton
            className="search-form__button"
            ariaLabel="Искать фильмы"
            type="submit"
          />
        </div>
        <Switch
          className="search-form__switch"
          name="short-filter"
          label="Короткометражки"
          onChange={handleSwitchChange}
          checked={values && values["short-filter"]}
        />
      </form>
    </Section>
  );
}
