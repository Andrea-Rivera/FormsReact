import classes from "./ContactForm.module.css"
import FormMessaging from "../FormMessaging";
import { useState } from "react";

const ContactForm = ()=> {
const [isSubmitted, setIsSubmitted] = useState(false);
const [isSuccess] = useState(true);
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [isValid,setIsValid] = useState(false);

function validateForm(){
    const emailRegex = /^([\w\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/
    if(!email.match(emailRegex) ||email.length <3 ||name.length <1 ){
        setIsValid(false)
    }else setIsValid(true)

}


console.log(name)
console.log(email)
console.log(isValid)

return (
<div>
    <h2>Let's Keep in touch!</h2>
    <label>
     <strong>Name</strong>   
    <input type="text" onChange={(event)=>{setName(event.target.value) ; validateForm()}}/>
    </label><br/>
    <label>
    <strong>Email</strong> 
    <input type="email"onChange={(event)=>{setEmail(event.target.value); validateForm()}} />
    </label><br/>
    <button className={classes.buttonForm} disabled={!isValid} onClick={()=>{
        validateForm()
        setIsSubmitted(true)
        }} > <strong>Submit</strong> </button>
    {
        isSubmitted && isSuccess && isValid &&(<FormMessaging isError={false} content="Thank's for your details, we'll be in touch"/>)
    }
    {
        isSubmitted && !isSuccess &&(<FormMessaging isError content="Oops, something went wrong, please try again later"/>)
    }
      {
        !isSubmitted && !isValid &&(<FormMessaging isError content="Please fill in the form."/>)
    }
    

    
</div>
)
}

export default ContactForm;
