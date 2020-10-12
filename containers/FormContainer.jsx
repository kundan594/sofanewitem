import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

/* Import Components */

import Input from "../components/formComponent/Input";
import Select from "../components/formComponent/Select";
import Button from "../components/formComponent/Button";
import FetchDataService from "../pages/api/fetch.service";


class FormContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				title: "",
				description: [],
				category: "",
				news_credits1: "",
				news_credits2: "",
				news_credits: [],
				visual_credits: [],
				visual_credits1: "",
				visual_credits2: "",
				tags1: "",
				tags2: "",
				tags: [],
				language: '',
				sentences: [],
				sentence1: '',
				sentence2: '',
				sentence3: ''
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
			langOptions: [
				"English",
				"Estonia"
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
	handleAdd(name, value, arr) {
		console.log(name, value, arr, "kkkk");
		arr.push(value);
		this.setState(
			(prevState) => ({ data: { ...prevState.data, [name]: arr } }),
			() => console.log(this.state.data)
		);
	}
	handleFormSubmit(e) {
		e.preventDefault();


		if (this.state.data.news_credits1 !== "" && this.state.data.news_credits2 !== null) {

			let data = { 'url': this.state.data.news_credits1, 'link_text': this.state.data.news_credits2 };

			this.state.data.news_credits.push(data);


		}


		if (this.state.data.visual_credits1 !== "" && this.state.data.visual_credits2 !== null) {
			let data = { 'url': this.state.data.visual_credits1, 'link_text': this.state.data.visual_credits2 };
			data.link_text = this.state.data.visual_credits2;
			this.state.data.visual_credits.push(data);
		}

		if (this.state.data.tages1 !== "" && this.state.data.tages1 !== null) {
			this.handleAdd('tags', this.state.data.tags1, this.state.data.tags)
		}
		if (this.state.data.tags2 !== "" && this.state.data.tages2 !== null) {
			this.handleAdd('tags', this.state.data.tags2, this.state.data.tags)
		}

		if (this.state.data.language !== "" && this.state.data.language !== null) {
			console.log(this.state.data.language, "this.state.data.language");
			let data = { language: this.state.data.language, sentences: [] }
			if (this.state.data.sentences1 != "") {
				data.sentences.push(this.state.data.sentence1);
			}
			if (this.state.data.sentences2 != "") {
				data.sentences.push(this.state.data.sentence2);
			}

			if (this.state.data.sentences3 != "") {
				data.sentences.push(this.state.data.sentence3);
			}

			this.state.data.description.push(data);


		}
		console.dir(this.state.data, "userData");
		let newData = this.state.data;
		delete newData.news_credits1;
		delete newData.news_credits2;
		delete newData.visual_credits1;
		delete newData.visual_credits2;
		delete newData.tags1;
		delete newData.tags2;
		delete newData.language;
		delete newData.sentence1;
		delete newData.sentence2;
		delete newData.sentence3;
		delete newData.sentences;


		this.dataSave(newData);


	}

	dataSave(data) {
		console.dir(data, "data");
		let dataRes = FetchDataService.newDataSave(data)
			.then((response) => {
				const router = useRouter();
				this.handleClearForm(e);
				router.push(
					'',
					'');
			})
			.catch((e) => {
				console.log(e);
			});
	}

	handleClearForm(e) {
		e.preventDefault();
		this.setState({
			data: {
				title: "",
				description: "",
				category: "",
				news_credits1: "",
				news_credits2: "",
				news_credits: [],
				visual_credits: [],
				visual_credits1: "",
				visual_credits2: "",
				tags1: "",
				tags2: "",
				tags: [],
			},
		});
	}

	render() {
		return (
			<div className="h-full overflow-y-auto align-middle sm:flex flex-wrap min-w-full px-4 sm:px-6 md:px-6 py-4">
				<div className="w-full flex max-w-screen-lg mx-auto h-full space-x-4">
					<div className="w-1/2 space-y-2">
						<div className="w-full">
							<Input
								inputType={"text"}
								title={"Title "}
								name={"title"}
								value={this.state.data.title}
								placeholder={"Enter Title"}
								handleChange={this.handleInput}
							/>
						</div>
						<div className="w-full">
							<Select
								title={"Category"}
								name={"category"}
								options={this.state.categoriesOptions}
								value={this.state.data.category}
								placeholder={"Select Category"}
								handleChange={this.handleInput}
							/>
						</div>
						<div className="w-full">
							<Select
								title={"Description"}
								name={"language"}
								options={this.state.langOptions}
								value={this.state.data.language}
								placeholder={"Select Language"}
								handleChange={this.handleInput}
							/>
						</div>
						<div className="w-full">
							<Input
								inputType={"text"}
								title={"1. Sentence"}
								name={"sentence1"}
								value={this.state.data.sentence1}
								placeholder={"Enter Sentence"}
								handleChange={this.handleInput}
							/>
						</div>
						<div className="w-full">
							<Input
								inputType={"text"}
								title={"2. Sentence"}
								name={"sentence2"}
								value={this.state.data.sentence2}
								placeholder={"Enter Sentence"}
								handleChange={this.handleInput}
							/>
						</div>
						<div className="w-full">
							<Input
								inputType={"text"}
								title={"3. Sentence"}
								name={"sentence2"}
								value={this.state.data.sentence2}
								placeholder={"Enter Sentence"}
								handleChange={this.handleInput}
							/>
						</div>
					</div>
					<div className="w-1/2 space-y-2">
						<div className="w-full flex space-x-2">
							<div className="w-1/2">
								<Input
									inputType={"text"}
									title={"News credits"}
									name={"news_credits1"}
									value={this.state.data.news_credits1}
									placeholder={"Enter News Credit Text"}
									handleChange={this.handleInput}
								/>
							</div>
							<div className="w-1/2">
								<Input
									inputType={"text"}
									title={""}
									name={"news_credits2"}
									value={this.state.data.news_credits1}
									placeholder={"Enter News Credit URL"}
									handleChange={this.handleInput}
								/>
							</div>
						</div>
						<div className="w-full flex space-x-2">
							<div className="w-1/2">
								<Input
									inputType={"text"}
									title={""}
									name={"news_credits3"}
									value={this.state.data.news_credits1}
									placeholder={"Enter News Credit Text"}
									handleChange={this.handleInput}
								/>
							</div>
							<div className="w-1/2">
								<Input
									inputType={"text"}
									title={""}
									name={"news_credits4"}
									value={this.state.data.news_credits1}
									placeholder={"Enter News Credit URL"}
									handleChange={this.handleInput}
								/>
							</div>
						</div>
						<div className="w-full flex space-x-2">
							<div className="w-1/2">
								<Input
									inputType={"text"}
									title={"Visual Credits"}
									name={"visual_credits1"}
									value={this.state.data.visual_credits2}
									placeholder={"Enter Visual Credit Text"}
									handleChange={this.handleInput}
								/>
							</div>
							<div className="w-1/2">
								<Input
									inputType={"text"}
									title={""}
									name={"visual_credits2"}
									value={this.state.data.visual_credits2}
									placeholder={"Enter Visual Credit URL"}
									handleChange={this.handleInput}
								/>
							</div>
						</div>
						<div className="w-full flex space-x-2">
							<div className="w-1/2">
								<Input
									inputType={"text"}
									title={""}
									name={"visual_credits3"}
									value={this.state.data.visual_credits2}
									placeholder={"Enter Visual Credit Text"}
									handleChange={this.handleInput}
								/>
							</div>
							<div className="w-1/2">
								<Input
									inputType={"text"}
									title={""}
									name={"visual_credits4"}
									value={this.state.data.visual_credits2}
									placeholder={"Enter Visual Credit URL"}
									handleChange={this.handleInput}
								/>
							</div>
						</div>
						<div className="w-full">
							<Select
								title={"Tags"}
								name={"tags1"}
								options={this.state.tagsOptions}
								value={this.state.data.tags1}
								placeholder={"Select Tags"}
								handleChange={this.handleInput}
							/>
						</div>
						<div className="w-full flex justify-center space-x-2 pt-4">
							<Button
								action={this.handleFormSubmit}
								type={"primary"}
								title={"Submit"}
								style={buttonStyle}
								className={'inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out'}
							/>
							<Button
								action={this.handleClearForm}
								type={"secondary"}
								title={"Clear"}
								style={buttonStyle}
								className={'rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-teal-500 hover:bg-teal-600 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md'}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const buttonStyle = {
	margin: "10px 10px 10px 10px",
};

export default FormContainer;
