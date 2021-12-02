import { Form } from "react-bootstrap";

const Theme = () => {
  return (
    <Form.Check
      className="dark"
      name="theme"
      onChange={() => {
        if (window.localStorage.getItem("theme") === "dark") {
          window.localStorage.setItem("theme", "light");
        } else {
          window.localStorage.setItem("theme", "dark");
        }
        window.location.reload();
      }}
      checked={window.localStorage.getItem("theme") === "dark"}
      label="🌙 Darkmode"
    />
  );
};

export default Theme;
