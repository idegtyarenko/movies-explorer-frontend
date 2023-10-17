import { useDisplayNotification } from "modules/ContentWithNotifications";

export default function useEditNotifications() {
  const displayNotification = useDisplayNotification();

  function displaySuccessNotification(name) {
    displayNotification({
      title: `Отлично, ${name}`,
      text: "Ваши изменения сохранены",
    });
  }

  function displayErrorNotification(message) {
    displayNotification({
      type: "error",
      title: "При обновлении профиля произошла ошибка.",
      text: message,
    });
  }

  return [displaySuccessNotification, displayErrorNotification];
}
