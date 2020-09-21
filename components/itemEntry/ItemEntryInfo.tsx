import React, { Component } from 'react';
import {
    FormBuilder,
    FieldGroup,
    FieldControl,
    Validators,
 } from "react-reactive-form";

const TextInput = ({ handler, touched, hasError, meta }) => (
  <div>
    <input placeholder={`Enter ${meta.label}`} {...handler()}/>
    <span>
        {touched
        && hasError("required")
        && `${meta.label} is required`}
    </span>
  </div>  
)
export default class ItementryData extends Component {
    loginForm = FormBuilder.group({
        username: ["", Validators.required],
        password: ["", Validators.required],
        rememberMe: false
    });
    handleReset=() => {
        this.loginForm.reset();
    }
    handleSubmit=(e) => {
        e.preventDefault();
        console.log("Form values", this.loginForm.value);
    }
    render() {
        return (
               <div>
                 asdsadsdassad666666666666666666
              <FieldGroup
                control={this.loginForm}
                render={({ get, invalid }) => (
                  <form onSubmit={this.handleSubmit}>
                    <FieldControl
                      name="username"
                      render={TextInput}
                      meta={{ label: "Username" }}
                    />

                    <FieldControl
                      name="password"
                      render={TextInput}
                      meta={{ label: "Password" }}
                    />

                    <FieldControl
                      name="rememberMe"
                      render={({handler}) => (
                        <div>
                          <input {...handler("checkbox")}/>
                        </div>
                      )}
                    />
                    <button
                      type="button"
                      onClick={this.handleReset}
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      disabled={invalid}
                    >
                      Submit
                    </button>
                  </form>
                )}
              />
              </div>
        );
    }
}