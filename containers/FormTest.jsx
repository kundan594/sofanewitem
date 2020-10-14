import React, { useEffect, useState } from 'react';
import CatInputs from './CatInputs';
import NewcreditInputs from './NewscreditsData';
import DescriptionInputs from './DescriptionInputs';
import VisualcreditInputs from './VisualCreditInput';
import Select from "../components/formComponent/Select";
import fetchService from '../pages/api/fetch.service';


const TestForm = () => {
    const categoriesOptions = [
        {
            id: 1,
            name: "LIFE & POLITICS",
            value: 0
        },
        {
            id: 2,
            name: "FASHION & ART",
            value: 1
        },
        {
            id: 3,
            name: "CELEBRITIES",
            value: 2
        },
        {
            id: 4,
            name: "ENTERTAINMENT",
            value: 3
        },
        {
            id: 5,
            name: "NATURE",
            value: 4
        },
        {
            id: 6,
            name: "SCIENCE",
            value: 5
        },
        {
            id: 7,
            name: "BUSINESS & TECH",
            value: 6,
        },
        {
            id: 8,
            name: "SELF-IMPROVEMENT",
            value: 7,
        }
    ]

    const tagsOption = [
        {
            id: 1,
            name: "Local Estonian Content",
            value: "Local Estonian Content",
        },
        {
            id: 2,
            name: "NSFW",
            value: "NSFW",
        },
        {
            id: 3,
            name: "NSFL",
            value: "NSFL",
        }
    ]

    const [formState, setformState] = useState({
        title: '',
        category: '',
        tags: []
    });

    const [title, setTitle] = useState(null);
    const [category, setCategory] = useState(null);
    const [tags, setTags] = useState(null);

    const handleformChange = (e) => {
        console.log(e.target.value);
        setformState({
            ...formState,
            [e.target.name]: e.target.value,
        })
        console.log(formState)
    };

    const handleMultiSelectChange = (e) => {
        e.preventDefault();
        console.log(e.target.options);
        let options = e.target.options;
        let value = [];
        for (let i = 1, l = options.length; i < l; i++) {
            console.log(i)
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        console.log(value);
        setTags(value);
        //console.log("formState: ", formState)
    };

    const blankCat = { name: '', age: '' };
    const [catState, setCatState] = useState([
        { ...blankCat },
    ]);

    const addCat = () => {
        setCatState([...catState, { ...blankCat }]);
    };

    const handleCatChange = (e) => {
        const updatedCats = [...catState];
        updatedCats[e.target.dataset.idx][e.target.className] = e.target.value;
        setCatState(updatedCats);
    };

    const blanknewscredits = { url: '', link_text: '' };
    const [newscreditState, setnewscreditState] = useState([
        { ...blanknewscredits },
    ]);

    const addNewscredits = () => {
        setnewscreditState([...newscreditState, { ...blanknewscredits }]);
    };

    const handleNewscreditsChange = (e) => {
        let index = 0;
        if (e.target.dataset.idx.length > 0) {
            index = e.target.dataset.idx;
        }
        const updatednewscreditState = [...newscreditState];
        updatednewscreditState[index][e.target.dataset.classx] = e.target.value;
        setnewscreditState(updatednewscreditState);
    };


    const blankvisualcredits = { url: '', link_text: '' };
    const [visualcreditState, setvisualcreditState] = useState([
        { ...blankvisualcredits },
    ]);

    const addVisualcredit = () => {
        setvisualcreditState([...visualcreditState, { ...blankvisualcredits }]);
    };

    const handleVisualcreditsChange = (e) => {
        const updatedVisualcreditState = [...visualcreditState];
        updatedVisualcreditState[e.target.dataset.idx][e.target.dataset.classx] = e.target.value;
        setvisualcreditState(updatedVisualcreditState);
    };


    const blankdescription = { language: '', sentence1: '', sentence2: '', sentence3: '' };
    const [descriptionState, setdescriptionState] = useState([
        { ...blankdescription },
    ]);

    const addDescription = () => {
        setdescriptionState([...descriptionState, { ...blankdescription }]);
    };

    const handleDescriptionsChange = (e) => {
        let index = 0;
        if (e.target.dataset.idx.length > 0) {
            index = e.target.dataset.idx;
        }
        const updatedDescriptionState = [...descriptionState];
        updatedDescriptionState[index][e.target.dataset.classx] = e.target.value;
        setdescriptionState(updatedDescriptionState);
    };

    const addNewItem = () => {
        let formData = {};
        let newsCreditArray = [];
        let visualCreditArray = [];
        let descriptionArray = [];
        newscreditState.map((val, idx) => {
            let dataInfo = { 'url': '', 'link_text': '' };
            dataInfo.url = val.url;
            dataInfo.link_text = val.link_text;
            newsCreditArray.push(dataInfo);

        }

        )

        visualcreditState.map((val, idx) => {
            let dataInfo = { 'url': '', 'link_text': '' };
            dataInfo.url = val.url;
            dataInfo.link_text = val.link_text;
            visualCreditArray.push(dataInfo);
            console.log(val, idx);

        }

        )

        descriptionState.map((val, idx) => {
            let dataInfo = { language: '', sentence1: '', sentence2: '', sentence3: '' };
            dataInfo.language = val.language;
            dataInfo.sentence1 = val.sentence1;
            dataInfo.sentence2 = val.sentence2;
            dataInfo.sentence3 = val.sentence3;
            descriptionArray.push(dataInfo);

        }

        )

        formData.title = title;
        formData.category = category;
        formData.tags = tags;
        formData.news_credits = newsCreditArray;
        formData.visual_credits = visualCreditArray;
        formData.descriptions = descriptionArray;

        console.log(formData);

        fetchService.newDataSave(formData);
    }

    return (
        <div className="w-full max-w-screen-lg mx-auto h-full">
            <div className="w-full md:flex space-x-4">
                <div className="w-full md:w-1/2 md:space-y-2">
                    <div className="w-full">
                        <label htmlFor="title" className="block text-sm font-medium leading-5 text-gray-700">Title</label>
                        <input 
                            value={title} 
                            onChange={(e) => {setTitle(e.target.value)}} 
                            name="title" 
                            id="title" 
                            placeholder="Enter Title" 
                            className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                        />
                    </div>
                    <div className="w-full">
                        <Select
                            title={"Category"}
                            name={"category"}
                            options={categoriesOptions}
                            value={category}
                            placeholder={"Select Category"}
                            onChange={(e) => {setCategory(e.target.value)}} 
                        />
                    </div>
                    {
                        descriptionState.map((val, idx) => (
                            <DescriptionInputs
                                key={`description-${idx}`}
                                idx={idx}
                                descriptionState={descriptionState}
                                handleDescriptionsChange={handleDescriptionsChange}
                            />
                        ))
                    }
                    <div className="w-full">
                        <div className="flex justify-end">
                            <button onClick={addDescription} className="px-1.5 py-1.5 rounded text-xs text-white bg-blue-600 hover:bg-blue-700">+ Add Description</button>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 md:space-y-2">
                    {
                        newscreditState.map((val, idx) => (
                            <NewcreditInputs
                                key={`newscredit-${idx}`}
                                idx={idx}
                                newscreditState={newscreditState}
                                handleNewscreditsChange={handleNewscreditsChange}
                            />
                        ))
                    }
                    <div className="w-full">
                        <div className="flex justify-end">
                            <button onClick={addNewscredits} className="px-1.5 py-1.5 rounded text-xs text-white bg-blue-600 hover:bg-blue-700">+ Add News Credits</button>
                        </div>
                    </div>
                    {
                        visualcreditState.map((val, idx) => (
                            <VisualcreditInputs
                                key={`visualcredit-${idx}`}
                                idx={idx}
                                visualcreditState={visualcreditState}
                                handleVisualcreditsChange={handleVisualcreditsChange}
                            />
                        ))
                    }
                    <div className="w-full">
                        <div className="flex justify-end">
                            <button onClick={addVisualcredit} className="px-1.5 py-1.5 rounded text-xs text-white bg-blue-600 hover:bg-blue-700">+ Add Visual Credits</button>
                        </div>
                    </div>
                    <div className="w-full">
                        <Select
                            title={"Tags"}
                            name={"tags"}
                            options={tagsOption}
                            value={tags}
                            multiple={true}
                            placeholder={"Select Tags"}
                            onChange={handleMultiSelectChange}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full border-t border-gray-300 mt-4 pt-4">
                <div className="flex justify-center md:justify-end">
                    <button onClick={() => addNewItem()} className="px-2 py-2 rounded text-sm text-white bg-green-600 hover:bg-green-700">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default TestForm;