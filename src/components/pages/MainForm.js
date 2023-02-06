import ContactForm from "../ContactForm";
import classes from "./MainForm.module.css";

const MainForm = () => {
  return (
    <div className={classes.mainForm}>
      <ContactForm />
    </div>
  );
};

export default MainForm;
