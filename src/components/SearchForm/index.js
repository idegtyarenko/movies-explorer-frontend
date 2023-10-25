import useValidation from "hooks/useValidation";
import Section from "ui/Section";
import FormField from "ui/FormField";
import Switch from "ui/Switch";

import "./SearchForm.css";
import IconButton from "ui/IconButton";

export default function SearchForm({ onSubmit, initialQuery }) {
  const { values, handleChange } = useValidation(initialQuery);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
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
