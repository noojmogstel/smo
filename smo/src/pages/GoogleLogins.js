import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GoogleLogins = () => {
  const clientId =
    "1057219668582-mjnqf3hnoe1kkba58rpgo19ogvtgafmf.apps.googleusercontent.com";

  const CustomButton = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        style={{
          padding: "12px 24px",
          backgroundColor: "#FEE500",
          borderRadius: "4px",
          border: "none",
          color: "#3C1E1E",
          fontWeight: "bold",
          textDecoration: "none",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
      >
        Custom Google Login
      </button>
    );
  };

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          render={({ onClick }) => <CustomButton onClick={onClick} />}
          onSuccess={(res) => {
            console.log(res);
          }}
          onFailure={(err) => {
            console.log(err);
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleLogins;
