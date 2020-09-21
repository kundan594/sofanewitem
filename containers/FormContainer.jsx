import React, { Component } from "react";

/* Import Components */

import Input from "../components/formComponent/Input";
import Select from "../components/formComponent/Select";
import Button from "../components/formComponent/Button";

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: "",
        description: "",
        category: "",
        news_credits1:"",
        news_credits2:"",
        news_credits:[],
        visual_credits: [],
        visual_credits1: "",
        visual_credits2: "",
        tags1:"",
        tags2: "",
        tags: [],
      },

      categoriesOptions: [
        "LIFE & POLITICS",
        "FASHION & ART",
        "CELEBRITIES",
        "ENTERTAINMENT",
        "NATURE",
        "SCIENCE",
        "BUSINESS & TECH",
        "SELF-IMPROVEMENT",
      ],
      tagsOptions: ["Local Estonian Content", "NSFW", "NSFL"],
    };
  
    this.handleTitle = this.handleTitle.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);   
    this.handleInput = this.handleInput.bind(this);
  }



  handleTitle(e) {
    let value = e.target.value;
    this.setState(
      (prevState) => ({ data: { ...prevState.data, title: value } }),
      () => console.log(this.state.data)
    );
  }  

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      (prevState) => ({ data: { ...prevState.data, [name]: value } }),
      () => console.log(this.state.data)
    );
  }
  handleAdd(name,value,arr) { 
    console.log(name,value,"=================");  
   
  
    this.setState(
      (prevState) => ({ data: { ...prevState.data, [name]:arr  } }),
      () => console.log(this.state.data)
    );
  }
  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.data;

    if(this.state.data.news_credits1 !==""){
      console.log(this.state.data.news_credits1,"this.state.data.news_credits1");
     // this.state.data.news_credits.push(this.state.data.news_credits1);    
     this.handleAdd('news_credits',this.state.data.news_credits1,this.state.data.news_credits)  
    }
    if(this.state.data.news_credits2 !==""){
      this.handleAdd('news_credits',this.state.data.news_credits1,this.state.data.news_credits)   
    }

    if(this.state.data.visual_credits1 !==""){
      this.handleAdd('news_credits',this.state.data.news_credits1,this.state.data.news_credits)    
    }
    if(this.state.data.visual_credits2 !==""){
      this.handleAdd('news_credits',this.state.data.news_credits1,this.state.data.news_credits)  
    }
    if(this.state.data.tages1 !==""){
      this.handleAdd('news_credits',this.state.data.news_credits1,this.state.data.news_credits)   
    }
    if(this.state.data.tags2 !==""){
      this.handleAdd('news_credits',this.state.data.news_credits1,this.state.data.news_credits)   
    }
    console.log(this.state.data, "userData");

    // fetch('http://example.com',{
    //     method: "POST",
    //     body: JSON.stringify(userData),
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //   }).then(response => {
    //     response.json().then(data =>{
    //       console.log("Successful" + data);
    //     })
    // })
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      data: {
        title: "",
        description: "",
        category: "",
        news_credits: [],
        visual_credits: [],
        tags: [],
      },
    });
  }

  render() {
    return (
      <div class="block md:flex md:justify-center mb-6">
      <form class="w-full max-w-sm" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"text"}
          title={"Title "}
          name={"title"}
          value={this.state.data.title}
          placeholder={"Enter your Title"}
          handleChange={this.handleInput}
        />
        <Input
          inputType={"text"}
          title={"Discription "}
          name={"description"}
          value={this.state.data.description}
          placeholder={"Enter your Description"}
          handleChange={this.handleInput}
        />
        <Select
          title={"Category"}
          name={"category"}
          options={this.state.categoriesOptions}
          value={this.state.data.category}
          placeholder={"Select Category"}
          handleChange={this.handleInput}
        />
        <Input
          inputType={"text"}
          title={"News credits "}
          name={"news_credits1"}
          value={this.state.data.news_credits1}
          placeholder={"Enter your News credits"}
          handleChange={this.handleInput}
        />
        <Input
          inputType={"text"}
          title={""}
          name={"news_credits2"}
          value={this.state.data.news_credits2}
          placeholder={"Enter your News credits"}
          handleChange={this.handleInput}
        />
        <Input
          inputType={"text"}
          title={"Visual Credits "}
          name={"visual_credits1"}
          value={this.state.data.visual_credits1}
          placeholder={"Enter your Visual Credits"}
          handleChange={this.handleInput}
        />
        <Input
          inputType={"text"}
          title={" "}
          name={"visual_credits2"}
          value={this.state.data.visual_credits2}
          placeholder={"Enter your Visual Credits"}
          handleChange={this.handleInput}
        />
        <Select
          title={"Tags"}
          name={"tags1"}
          options={this.state.tagsOptions}
          value={this.state.data.tags1}
          placeholder={"Select Tags 1"}
          handleChange={this.handleInput}
        />
         <Select
          title={""}
          name={"tags2"}
          options={this.state.tagsOptions}
          value={this.state.data.tags2}
          placeholder={"Select Tags 2"}
          handleChange={this.handleInput}
        />
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
          className ={'inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out'}
        />
      
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
          className ={'inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-grey-300 transition duration-150 ease-in-out'}
        />
        
      </form>
      </div>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px",
};

export default FormContainer;
