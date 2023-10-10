import useValidation from "hooks/useValidation";
import Section from "ui/Section";
import FormField from "ui/FormField";
import Switch from "ui/Switch";

import "./SearchForm.css";
import IconButton from "ui/IconButton";

export default function SearchForm({ onSubmit }) {
  const { values, handleChange } = useValidation({
    "query-text": "",
    "short-filter": false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <Section className="search-form section_mobile-margins_m">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <div className="search-form__field">
          <FormField
            name="query-text"
            className="search-form__input"
            type="search"
            placeholder="Фильм"
            onChange={handleChange}
            value={values["query-text"]}
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
          onChange={handleChange}
          checked={values["short-filter"]}
        />
      </form>
    </Section>
  );
}
