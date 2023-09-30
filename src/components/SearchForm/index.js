import Section from "ui/Section";
import FormField from "ui/FormField";
import Switch from "ui/Switch";

import "./SearchForm.css";
import IconButton from "ui/IconButton";

export default function SearchForm() {
  return (
    <Section className="search-form section_mobile-margins_m">
      <form className="search-form__form">
        <div className="search-form__field">
          <FormField
            id="query"
            className="search-form__input"
            type="search"
            placeholder="Фильм"
          />
          <IconButton
            className="search-form__button"
            ariaLabel="Искать фильмы"
            type="submit"
          />
        </div>
        <Switch className="search-form__switch" label="Короткометражки" />
      </form>
    </Section>
  );
}
