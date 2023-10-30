import usePageTitle from "hooks/usePageTitle";
import HeaderLayout from "layouts/HeaderLayout";
import ProfileForm from "modules/ProfileForm";

export default function Profile() {
  usePageTitle("Аккаунт");

  return (
    <HeaderLayout isLoggedIn={true}>
      <ProfileForm />
    </HeaderLayout>
  );
}
