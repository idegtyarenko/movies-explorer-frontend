import HeaderLayout from "layouts/HeaderLayout";

export default function Profile() {
  return (
    <HeaderLayout isLoggedIn={true}>
      <p>Hello world</p>
    </HeaderLayout>
  );
}
