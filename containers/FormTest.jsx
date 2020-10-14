import React, { useState } from 'react';
import CatInputs from './CatInputs';
import NewcreditInputs from './NewscreditsData';
import DescriptionInputs from './DescriptionInputs';
import VisualcreditInputs from './VisualCreditInput';



const TestForm = () => {
    const [formState, setformState] = useState({
        title: '',
        category: '',
        tags:[]
    });

    const handleformChange = (e) => setformState({
        ...formState,
        [e.target.name]: [e.target.value],
    });

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
        const updatednewscreditState = [...newscreditState];
        updatednewscreditState[e.target.dataset.idx][e.target.className] = e.target.value;
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
        updatedVisualcreditState[e.target.dataset.idx][e.target.className] = e.target.value;
        setvisualcreditState(updatedVisualcreditState);
    };


    const blankdescription = { language: '', sentence1: '',sentence2: '', sentence3: '' };
    const [descriptionState, setdescriptionState] = useState([
        { ...blankdescription },
    ]);

    const addDescription = () => {
        setdescriptionState([...descriptionState, { ...blankdescription }]);
    };

    const handleDescriptionsChange = (e) => {
        const updatedDescriptionState = [...descriptionState];
        updatedDescriptionState[e.target.dataset.idx][e.target.className] = e.target.value;
        setdescriptionState(updatedDescriptionState);
    };

    const addNewItem = () => {
        let formData = {};
        let newsCreditArray = [];
        let visualCreditArray = [];
        let  descriptionArray = [];
        newscreditState.map((val, idx) => 
            {
               let  dataInfo = {'url':'','link_text':''};
                dataInfo.url = val.url;
                dataInfo.link_text = val.link_text;
                newsCreditArray.push(dataInfo);

            }
            
        )

        visualcreditState.map((val, idx) => 
            {
               let  dataInfo = {'url':'','link_text':''};
               dataInfo.url = val.url;
               dataInfo.link_text = val.link_text;
               visualCreditArray.push(dataInfo);
                console.log(val, idx);

            }
            
        )

        descriptionState.map((val, idx) => 
        {
            let  dataInfo = { language: '', sentence1: '',sentence2: '', sentence3: '' };
            dataInfo.language = val.language;
            dataInfo.sentence1 = val.sentence1;
            dataInfo.sentence2 = val.sentence2;
            dataInfo.sentence3 = val.sentence3;
            descriptionArray.push(dataInfo);

        }
        
    )

        formData.title = formState.title;
        formData.category = formState.category;
        formData.tags = formState.tags;
        formData.news_credits = newsCreditArray;
        formData.visual_credits = visualCreditArray;
        formData.descriptions = descriptionArray;

        console.log(formData);
    }

   

    

    return (
        <form>
            <label htmlFor="form">Title</label>
            <input
                type="text"
                name="title"
                id="title"
                value={formState.title}
                onChange={handleformChange}
            />
            <label htmlFor="category">category</label>
            <input
                type="text"
                name="category"
                id="category"
                value={formState.category}
                onChange={handleformChange}
            />
                <input
                type="button"
                value="Add News"
                onClick={addNewscredits}
            />
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

            <input
                type="button"
                value="Add Visuals"
                onClick={addVisualcredit}
            />
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

                <input
                type="button"
                value="Add Desc "
                onClick={addDescription}
            />
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
            <input type="button" value="add" onClick={() => addNewItem()} />
        </form>
    );
};

export default TestForm;