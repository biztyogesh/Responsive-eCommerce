import React from "react";
import "./Contact.scss";
import contact from "../../assets/images/contact.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Icon } from "semantic-ui-react";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      <section className="banner-contact">
        <div className="banner-image-contact">
          <img src={contact} alt="Banner" />
        </div>
      </section>

      <div className="contact-container">
        <div className="contact-details">
          <h2>Get In Touch With Us</h2>
          <p>
            For More Information About Our Product & Services, Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
          <div className="details-section">
            <div className="detail">
              <Icon name="address book" size="big" />
              <div>
                <h4>Address</h4>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className="detail">
              <Icon name="phone volume" size="big" />
              <div>
                <h4>Phone</h4>
                <p>
                  Mobile: +(84) 546-6789
                  <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <div className="detail">
              <Icon name="stopwatch" size="big" />
              <div>
                <h4>Working Time</h4>
                <p>
                  Monday–Friday: 9:00 - 22:00
                  <br />
                  Saturday–Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter the Name"
            />
            {errors.name && (
              <p className="error-message">{errors.name.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter the Valid Email"
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              {...register("subject")}
              placeholder="This is an optional"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" {...register("message")} />
          </div>

          <Button type="submit" className="submit-button">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Contact;
