import HeaderLayout from "layouts/HeaderLayout";
import ProfileForm from "modules/ProfileForm";

export default function Profile() {
  return (
    <HeaderLayout isLoggedIn={true}>
      <ProfileForm />
    </HeaderLayout>
  );
}
