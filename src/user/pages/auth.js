import React, { useState, useContext } from "react";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
} from "../../shared/components/UIElements/util/validators";
import Card from "../../shared/components/UIElements/Card";
import { AuthContext } from "../../shared/context/auth-context";
import "./Auth.css";

const Authentication = () => {
  const auth = useContext(AuthContext);
  //create state to manage the different modes
  const [isLoginMode, setIsLoginMode] = useState(true);
  //setting the initial state
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    setIsLoginMode((prevmode) => !prevmode);
  };

  const registrationSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    //add the login auth context function
    auth.login();
  };

  return (
    <Card>
      {" "}
      <h2>{isLoginMode ? "Login Required" : "Sign Up"}</h2>
      <hr />
      <form className="auth-form" onSubmit={registrationSubmitHandler}>
        {!isLoginMode && (
          <Input
            id="name"
            element="input"
            type="text"
            label="USERNAME"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name"
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          element="input"
          type="text"
          label="Email"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email"
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password. Minimum length must be five(5)"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "LOGIN" : "SIGNUP"}
        </Button>
        <Button inverse type="button" onClick={switchModeHandler}>
          {" "}
          {isLoginMode ? "SIGNUP HERE" : "LOGIN"}
        </Button>
      </form>
    </Card>
  );
};

export default Authentication;
