import HeaderLayout from "layouts/HeaderLayout";
import ProfileForm from "components/ProfileForm";

export default function Profile() {
  return (
    <HeaderLayout isLoggedIn={true}>
      <ProfileForm isInEditMode={false} />
    </HeaderLayout>
  );
}
