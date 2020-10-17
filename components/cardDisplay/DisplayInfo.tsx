import React, { useState, useEffect, useRef, useCallback } from "react";
import FetchDataService from "../../pages/api/fetch.service";
import Link from "next/link";
import PreviewClip from '../previewClip/PreviewClip';

import { config as f_config, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import FormContainer from "../../containers/FormContainer";
import TestForm from "../../containers/FormTest";

f_config.autoAddCss = false;
library.add(fas, fab);

const DisplayInfo = () => {
	const [DataAll, setfetchData] = useState(null);
	const [video, setVideo] = useState(null);
	const inputRef = useRef(null);
	const [isClips, setIsClips] = useState(false);
	const [clips, setClips] = useState({ video: null, thumbnails: null });
	const [isAddItem, setIsAddItem] = useState(false);

	const [newsItem, setNewsItem] = useState(null);
	const status  = {
		'new': 'New',
		'awaiting_review_by_lead_journalist': 'Awaiting review by lead journalist',
		'awaiting_video_upload': 'Awaiting video upload',
		'awaiting_review_by_lead_video_editor': 'Awaiting review by lead video editor',
		'ready_for_push': 'Ready For Push',
		'pushed_to_feed': 'Pushed To Feed',
		'removed_from_feed': 'Removed From Feed'			
		   };
	const [paginationData, setPaginationData] = useState(
		{
			limit: 100,
			last_id: "",
			total_data: 0
		}
	);

	

	useEffect(() => {
		fetchData1();
	}, []);

	useEffect(() => {
		document.addEventListener("keyup", keyUpFunction, false);
		return () => {
			document.removeEventListener("keyup", keyUpFunction, false);
		};
	});

	const keyUpFunction = useCallback((event) => {
		if (event.keyCode === 27) {
			setIsClips(false);
		}
	}, []);

	const handleVideoPreview = (e) => {
		let video_as_base64 = URL.createObjectURL(e.target.files[0]);
		let video_as_files = e.target.files[0];

		setVideo({
			video_preview: video_as_base64,
			video_file: video_as_files,
		});
	};

	function actionPerformed(item, apiEndPoint, e) {
		if (apiEndPoint == "Preview Clips") {
			console.log(item.clips, "item====");
			setIsClips(true);
			setClips({ video: item.clips, thumbnails: item.thumbnails });
			return false;
		}
		e.preventDefault();
		processedDataInfo(item, apiEndPoint, e);
	}

	function processedDataInfo(item, apiEndPoint, e) {
		e.preventDefault();		
		let data = FetchDataService.processedData(item, apiEndPoint)
			.then((response) => {
				fetchData1();

			})
			.catch((e) => {
				console.log(e);
			});
	}

	function deleteItem(item, apiEndPoint, e){
		e.preventDefault();
		let data = FetchDataService.deleteData(item.id)
			.then((response:any) => {
				console.log(response);
				if(response.data.success==true){
					console.log(response,"onssdsdas");
					transformNewItems(item,"delete");
				}
				//fetchData1();

			})
			.catch((e) => {
				console.log(e);
			});
	}

	function decrement_ordinal(item, apiEndPoint, e){
		e.preventDefault();
		let data = FetchDataService.decrement_increment_ordinal(item,apiEndPoint)
			.then((response:any) => {
				console.log(response);
				if(response.data.success==true){
					console.log(response,"onssdsdas");
					transformNewItems(item,"decrement_ordinal");
				}
				//fetchData1();

			})
			.catch((e) => {
				console.log(e);
			});

	}

	function increment_ordinal(item, apiEndPoint, e){
		e.preventDefault();
		let data = FetchDataService.decrement_increment_ordinal(item,apiEndPoint)
			.then((response:any) => {
				console.log(response);
				if(response.data.success==true){				
					transformNewItems(item,"increment_ordinal");
				}
				//fetchData1();

			})
			.catch((e) => {
				console.log(e);
			});

	}


	function SearchIdIndex(item,itemValue){

	}

	function transformNewItems(itemValue,actionType){
		let arr = {"news_items" :[] };	
		let old_index,new_index;
		
		switch(actionType) {
			case "delete":	
			  arr.news_items = DataAll.news_items.filter(item => item.id !=itemValue.id);
			  setfetchData(arr);
			  break;
			  case "decrement_ordinal":
				  
				  old_index  = DataAll.news_items.findIndex(item => item.id ==itemValue.id);
				  new_index  = old_index + 1;
				  arr.news_items =  array_move(DataAll.news_items,old_index,new_index);
				  setfetchData(arr);
			  break;

			  case "increment_ordinal":				
				  old_index  = DataAll.news_items.findIndex(item => item.id ==itemValue.id);
				  new_index  = old_index - 1;
				  arr.news_items =  array_move(DataAll.news_items,old_index,new_index);
				  setfetchData(arr);
				break;

			  
			default:
			  // code block
		  }

	}
	function array_move(arr, old_index, new_index) {
		console.log(arr, old_index, new_index);
		if (new_index >= arr.length) {
			var k = new_index - arr.length + 1;
			while (k--) {
				arr.push(undefined);
			}
		}
		arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
		console.log(arr);
		return arr; // for testing
	};

	function fetchData1() {
		let data = FetchDataService.getAll1(paginationData)
			.then(response => {
				setfetchData(response.data);
				setPaginationData({
					...paginationData,
					total_data: response.data.total_items
				});
				// console.log(response.data,"response ");
				console.log(response.data, "response.data.data");
			})
			.catch(e => {
				console.log(e);
			});
	}

	function uplaodVideo(item, apiEndPoint, e) {
		e.preventDefault();
		const formData = new FormData();
		formData.append("source_file", video.video_file);
		const config = {
			headers: {
				'content-type': 'multipart/form-data',
				'Accept': 'multipart/form-data',
			}
		};
		let data = FetchDataService.uplaodVideo(item, apiEndPoint, formData, config)
			.then((response) => {
				//console.log("upload response: ", response);
				if (response.data.success) {
					fetchData1();
				}
			})
			.catch((e) => {
				console.log(e);
			});
	}


	function handleClick() {
		inputRef.current.click();
	}

	 function showStatus(itemkey){
		 let statusReturn = '';
		Object.keys(status).forEach(key => {			
			if(itemkey==key){				  
				   statusReturn =  status[key];
			}
		  });

		  return statusReturn;
	}

	

	function actionRender(item) {		
		switch (item.state) {
			case "new": {
				return (
					<span onClick={(e) => actionPerformed(item, "submit", e)} className="px-2 py-0.5 my-1 inline-flex text-xs leading-5 font-semibold rounded-full border border-indigo-800 bg-indigo-100 hover:bg-indigo-200 text-indigo-800 cursor-pointer">
						Submit
					</span>
				);
			}
			case "awaiting_review_by_lead_journalist": {
				// return  'Approve | Reject'
				return (
					<div className="flex space-x-2 items-center justify-center">
						<svg onClick={(e) => actionPerformed(item, "lead_journalist_approve", e)} className="h-8 w-8 text-green-400 hover:text-green-600 cursor-pointer" x-description="Heroicon name: check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
						</svg>
						<svg onClick={(e) => actionPerformed(item, "lead_journalist_reject", e)} className="h-8 w-8 text-red-500 hover:text-red-600 cursor-pointer" x-description="Heroicon name: x-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
						</svg>
					</div>
				);
			}
			case "awaiting_video_upload": {
				return (
					<div className="block text-center justify-center items-center">
						{video != null ? (
							<>
								<div className="flex justify-center items-center">
									<video className="w-4/6" controls src={video.video_preview} />
								</div>
								<div className="flex justify-center space-x-1">
									<span onClick={(e) => uplaodVideo(item, 'upload_video', e)} className="px-2 my-1 inline-flex text-xs leading-5 font-semibold rounded-full border border-blue-800 bg-blue-100 hover:bg-blue-200 text-blue-800 cursor-pointer">
										Upload
									</span>
									<span onClick={() => setVideo(null)} className="px-2 my-1 inline-flex text-xs leading-5 font-semibold rounded-full border border-blue-800 bg-blue-100 hover:bg-blue-200 text-blue-800 cursor-pointer">
										Cancel
									</span>
								</div>

							</>
						) : (
								<>
									<div className="w-40">
										<input
											ref={inputRef}
											className="invisible"
											type="file"
											onChange={handleVideoPreview}
										>
										</input>
										<span onClick={handleClick} className="px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full border border-blue-800 bg-blue-100 hover:bg-blue-200 text-blue-800 cursor-pointer">Upload a video</span>
									</div>

								</>
							)}
					</div>

				);
				// return  (<form encType="multipart/form-data" method="POST" action="/news_items/upload_video?token=abcdef" > <input name='source_file' type='file'/><input type="submit"/> </form>)
			}
			case "awaiting_review_by_lead_video_editor": {
				return (
					<div className="flex space-x-2 items-center justify-center">
						<span onClick={(e) => actionPerformed(item, "Preview Clips", e)} className="px-2 my-1 inline-flex text-xs leading-5 font-semibold rounded-full border border-blue-800 bg-blue-100 hover:bg-blue-200 text-blue-800 cursor-pointer">
							Preview Clips
						</span>
						<svg onClick={(e) => actionPerformed(item, "lead_video_editor_approve", e)} className="h-8 w-8 text-green-400 hover:text-green-600 cursor-pointer" x-description="Heroicon name: check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
						</svg>
						<svg onClick={(e) => actionPerformed(item, "lead_video_editor_reject", e)} className="h-8 w-8 text-red-500 hover:text-red-600 cursor-pointer" x-description="Heroicon name: x-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
						</svg>
					</div>
				);
			}
			case "ready_for_push": {
				return (
					<span onClick={(e) => actionPerformed(item, "push_to_feed", e)} className="px-2 py-0.5 my-1 inline-flex text-xs leading-5 font-semibold rounded-full border border-green-800 bg-green-100 hover:bg-green-200 text-green-800 cursor-pointer">
						Push To Feed
					</span>
				);
			}
			case "pushed_to_feed": {
				return (
					<span onClick={(e) => actionPerformed(item, "remove_from_feed", e)} className="px-2 py-0.5 my-1 inline-flex text-xs leading-5 font-semibold rounded-full border border-red-800 bg-red-100 hover:bg-red-200 text-red-800 cursor-pointer">
						Remove Feed
					</span>
				);
			}
			case "removed_from_feed": {
				return (
					<span onClick={(e) => actionPerformed(item, "push_to_feed", e)} className="px-2 py-0.5 my-1 inline-flex text-xs leading-5 font-semibold rounded-full border border-green-800 bg-green-100 hover:bg-green-200 text-green-800 cursor-pointer">
						Push To Feed
					</span>
				);
			}
			
			default: {
				return "";
			}
		}
	}

	const fetchDataInfo = DataAll?.news_items?.map((item, i) => (
		<li key={i} className="cursor-default">
			<div className="w-full block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out cursor-default">
				<div className="px-4 py-4 sm:px-6">
					<div className="w-full md:flex">
						<div className="w-full md:w-1/5 block">
							<div className="block">
								<div className="text-base leading-5 font-medium text-indigo-600 flex-initial break-words">
									{item.title}
								</div>
								<div className="flex ml-2 py-2">
									{item.thumbnails.length > 0 && (
										<img className="w-1/2 h-full" src={item.thumbnails[0].url} />
									)}
								</div>
							</div>
						</div>
						<div className="w-full md:w-2/5 md:ml-6 pl-2 block">
							<div className="flex items-center justify-between">
								<div className="text-sm leading-5 font-semibold text-gray-800 truncate">
									Description
								</div>
							</div>
							<div className="block">
								{item.descriptions.map((description, i) => (
									<div key={i} className="my-1">
										<span className="text-gray-700 font-medium text-sm capitalize">{description.language}</span>
										<ul className="text-gray-600 text-sm">
											{description.sentences.map((sentence, i) => (
												<li key={i} className="flex items-center">
													<span className="w-2 h-2 mr-2 bg-gray-400 rounded-full"></span>
													<span className="flex-initial break-words">{sentence}</span>
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>
						<div className="w-full md:w-1/5 md:ml-6 pl-2 block">
							<div>
								<span className="text-gray-700 font-medium text-sm">News Credits</span>
								<ul className="text-gray-600 text-sm">
									{item.news_credits.map((news, i) => (
										<>
											{news.link_text.length > 1 && news.link_text != "" && (
												<li key={i} className="flex items-center">
													<span className="w-2 h-2 mr-2 bg-gray-400 rounded-full"></span>
													<span className="break-words cursor-pointer"><a href={news.url != "" ? news.url : 'void(0)'} target="_blank">{news.link_text}</a></span>
												</li>
											)}
										</>
									))}
								</ul>
							</div>
							<div className="mt-2">
								<span className="text-gray-700 font-medium text-sm">Visual Credits</span>
								<ul className="text-gray-600 text-sm">
									{item.visual_credits.map((visual, i) => (
										<>
											{visual.link_text.length > 1 && visual.link_text != "" && (
												<li key={i} className="flex items-center">
													<span className="w-2 h-2 mr-2 bg-gray-400 rounded-full"></span>
													<span className="break-words cursor-pointer"><a href={visual.url != "" ? visual.url : 'void(0)'} target="_blank">{visual.link_text}</a></span>
												</li>
											)}
										</>
									))}
								</ul>
							</div>
						</div>
						<div className="hidden w-1/5 md:flex items-center justify-center pl-2 block">
							<div className="w-full flex items-center justify-center">
								{/* <button className="w-auto px-2 py-2 bg-indigo-600 text-sm text-white rounded">Remove from feed</button> */}
								{actionRender(item)}
							</div>
						</div>
					</div>
					<div className="w-full mt-3">
						<div className="md:flex">
							<div className="flex items-center mr-2">
								<span className="text-gray-800 font-medium text-sm mr-1">Category: </span>
								<div className="space-x-2 flex flex-wrap items-center">
									<span className="px-2 my-1 inline-flex text-xs leading-5 font-semibold rounded-full border border-green-800 bg-green-100 text-green-800">
										LIFE & POLITICS
									</span>
								</div>
							</div>
							<div className="flex items-center mr-2">
								<span className="text-gray-800 font-medium text-sm mr-1">Tags:</span>
								<div className="space-x-2 flex flex-wrap items-center">
									{item.tags.length > 0 && (
										<>
											{item.tags.map((tag, i) => (
												<span key={i} className="px-2 my-1 inline-flex text-xs leading-5 font-semibold rounded-full border border-green-800 bg-green-100 text-green-800 uppercase">
													{tag}
												</span>
											))}
										</>
									)}
								</div>
							</div>
							<div className="flex items-center mr-2">
								<span className="text-gray-800 font-medium text-sm mr-1">Current Status:</span>
								<div className="space-x-2 flex flex-wrap items-center">
									<span className="px-2 my-1 inline-flex text-xs leading-5 font-semibold rounded-full border border-gray-800 bg-cool-gray-100 text-cool-gray-800">
										{showStatus(item.state)}
									</span>
								</div>
							</div>						
						</div>
					</div>
					<div className="w-full flex items-center justify-center pt-2 mt-2 pl-2 block border-t-2 border-gray-200 ">
					<div className="w-full flex items-center justify-center">
					<span onClick={(e) => deleteItem(item, "DELETE", e)} className="px-2 py-0.5 my-1 inline-flex text-xs leading-5 font-semibold rounded-full border border-red-800 bg-red-100 hover:bg-red-200 text-red-800 cursor-pointer">
						Delete
					</span>
					<span onClick={(e) => decrement_ordinal(item, "decrement_ordinal", e)} className="px-2 py-0.5 my-1 inline-flex text-xs leading-5 font-semibold rounded-full border border-red-800 bg-red-100 hover:bg-red-200 text-red-800 cursor-pointer">
					decrement ordinal
					</span>
					<span onClick={(e) => increment_ordinal(item, "increment_ordinal", e)} className="px-2 py-0.5 my-1 inline-flex text-xs leading-5 font-semibold rounded-full border border-red-800 bg-red-100 hover:bg-red-200 text-red-800 cursor-pointer">
					increment ordinal
					</span>
						</div>
						<div className="w-full flex items-center justify-center">
							{actionRender(item)}
						</div>
					</div>
				</div>
			</div>
		</li>
	));
	return (
		<div>
			<div className="col-md-6">
				<div className="mt-2 md:flex md:items-center md:justify-between">
					<div className="flex-2 min-w-0">
						<h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
							News Items
        				</h2>
					</div>
					<div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
						<span className="md:ml-3 shadow-sm rounded-md">
							<button onClick={fetchData1} type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out">
								Fetch Items
          						</button>
						</span>
						<span className="ml-3 shadow-sm rounded-md">
							<button
								onClick={() => { setIsAddItem(true) }}
								type="button"
								className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-700 active:bg-blue-700 transition duration-150 ease-in-out"
							>
								Add item
          					</button>
						</span>
					</div>
				</div>
				<div className="mt-2 bg-white shadow overflow-hidden sm:rounded-md">
					<ul className="divide-y divide-gray-500">
						{fetchDataInfo}
					</ul>
				</div>
				<div className="w-full">
					<nav className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
						<div className="hidden sm:block">
							<p className="text-sm leading-5 text-gray-700">
								Showing
            					<span className="font-medium mx-1">1</span>
								to
								<span className="font-medium mx-1">{DataAll?.news_items.length}</span>
								of
								<span className="font-medium mx-1">{paginationData.total_data}</span>
								results
							</p>
						</div>
						<div className="flex-1 flex justify-between sm:justify-end">
							<a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
								Previous
        					</a>
							<a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
								Next
        					</a>
						</div>
					</nav>
				</div>
			</div>
			{isClips && (
				<div className="fixed z-10 inset-0 overflow-y-auto">
					<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
						<div className="fixed inset-0 transition-opacity">
							<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
						</div>
						<span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
						<div className="w-full h-screen overflow-y-auto inline-block align-bottom bg-white rounded-lg px-4 pb-4 text-left overflow-hidden shadow-xl transform transition-all md:align-middle md:max-w-6xl" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
							<div>
								<div className="flex py-4 top-0 sticky bg-white z-10">
									<div className="w-1/2 px-4 sm:px-6 flex justify-start">
										<h2 className="text-gray-500 text-base font-bold uppercase tracking-wide">Clips</h2>
									</div>
									<div className="w-1/2 flex justify-end">
										<FontAwesomeIcon onClick={() => setIsClips(false)} className="w-4 h-4 text-gray-400 hover:text-indigo-600 cursor-pointer" icon={['fas', 'times']} />
									</div>
								</div>
								<div className="mt-2">

									<div className="h-full overflow-y-auto align-middle md:flex flex-wrap min-w-full px-4 sm:px-6 md:px-6 py-4">
										{/* {clips?.video.sort((a, b) => a.aspect_ratio - b.aspect_ratio)
											.map((clip, i) => (
												<div key={i} className="mx-auto sm:mx-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-82 sm:pr-4 mb-4">
													<div className="w-full text-sm text-center">Aspect Ratio: {clip.aspect_ratio}</div>
													<PreviewClip videoUrl={clip.url} />
												</div>
											))} */}
										{clips?.video.map((clip, i) => (
											<div key={i} className="mx-auto sm:mx-0 w-full md:w-1/4 lg:w-1/5 h-82 sm:pr-4 mb-4">
												<div className="w-full text-sm text-center">Aspect Ratio: {clip.aspect_ratio}</div>
												<PreviewClip videoUrl={clip.url} image={clips.thumbnails[i].url} />
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			{isAddItem && (
				<div className="fixed z-10 inset-0 overflow-y-auto">
					<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
						<div className="fixed inset-0 transition-opacity">
							<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
						</div>
						<span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
						<div className="h-screen overflow-y-auto inline-block align-bottom bg-white rounded-lg px-4 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-6xl sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
							<div>
								<div className="flex py-4 top-0 sticky bg-white z-10">
									<div className="w-1/2 px-4 sm:px-6 flex justify-start">
										<h2 className="text-gray-500 text-base font-bold uppercase tracking-wide">Add News Item</h2>
									</div>
									<div className="w-1/2 flex justify-end">
										<FontAwesomeIcon onClick={() => setIsAddItem(false)} className="w-4 h-4 text-gray-400 hover:text-indigo-600 cursor-pointer" icon={['fas', 'times']} />
									</div>
								</div>
								<div className="mt-2">
									{/* <FormContainer /> */}
									<TestForm />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default DisplayInfo;
