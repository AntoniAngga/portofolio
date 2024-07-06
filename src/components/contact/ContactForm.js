import axios from "axios";

import { useState } from "react";
const ContactForm = () => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState(null);

  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setIsSubmiting(true);
    if (inputs.name.length === 0 || inputs.subjectlength === 0 || inputs.message.length === 0) {
      setError(true);
      clearError();
    } else {
      const newInput = {
        name: inputs.name,
        email: inputs.subject,
        message: inputs.message,
      };
  
      try {
        await axios({
          method: "POST",
          url: `https://formbold.com/s/${process.env.NEXT_PUBLIC_FORM_TOKEN}`,
          data: newInput,
        });
        setInputs({
          name: "",
          email: "",
          message: "",
        });
        setError(false);
        clearError();
        setMailData({ name: "", email: "", message: "" });
      } catch (err) {
        console.log(err.text);
      }

    }
  }
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <div className="fields w-full float-left clear-both h-auto">
      <form
        className="contact_form"
        id="contact_form"
        onSubmit={handleOnSubmit}
      >
        <div
          className={error ? "empty_notice" : "returnmessage"}
          style={{ display: error == null ? "none" : "block" }}
        >
          <span>
            {error
              ? "Please Fill Required Fields"
              : "Your message has been received, We will contact you soon."}
          </span>
        </div>
        <div className="first w-full float-left">
          <ul className="list-none">
            <li className="w-full mb-[30px] float-left">
              <input
                name="name"
                onChange={handleOnChange}
                value={inputs.name}
                id="name"
                type="text"
                placeholder="Name"
              />
            </li>
            <li className="w-full mb-[30px] float-left">
              <input
                name="email"
                onChange={handleOnChange}
                value={inputs.email}
                id="email"
                type="email"
                placeholder="Email"
              />
            </li>
          </ul>
        </div>
        <div className="last">
          <textarea
            name="message"
            onChange={handleOnChange}
            value={inputs.message}
            id="message"
            placeholder="Message"
          />
        </div>
        <div className="tokyo_tm_button" data-position="left">
          <button type="submit" disabled={isSubmiting? true: false}>Send Message</button>
        </div>
        {/* If you want to change mail address to yours, please open modal.php and go to line 4 */}
      </form>
    </div>
  );
};

export default ContactForm;
