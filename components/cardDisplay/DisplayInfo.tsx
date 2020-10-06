import Head from "next/head";
import React, { useState, useEffect } from "react";
import FetchDataService from "../../pages/api/fetch.service";
import Link from "next/link";
import Router from "next/router";
import { useFileUpload } from 'use-file-upload';


import Popover from '../formComponent/PopoverRender';
import { PreviewDataService, messageService } from "../../pages/api/previewService";
const DisplayInfo = () => {
	const [DataAll, setfetchData] = useState(null);
	const [file, selectFile] = useFileUpload();
	useEffect(() => {
		fetchData1();
	}, []);



	useEffect(() => {
		let isSubscribed = true;
		FetchDataService.getAll1()
			// setfetchData(data);
			.then(response => {
				if (isSubscribed) {
					setfetchData(response.data);
				}
			})
			.catch(e => {
				console.log(e);
			});


	});

	function actionPerformed(item, apiEndPoint, e) {

		e.preventDefault();
		if (apiEndPoint == "Preview Clips") {
			console.log(item.clips, "item====");
			// PreviewDataService.clearData();
			PreviewDataService.setData(item.clips);
			return false;
			//messageService.sendMessage('Message from Home Page Component to App Component!');
			// Router.push(
			//   '/preview'
			//   );


		}
		processedDataInfo(item, apiEndPoint, e);
	}

	function processedDataInfo(item, apiEndPoint, e) {
		e.preventDefault();
		console.log(item, "asdas");
		let data = FetchDataService.processedData(item, apiEndPoint)
			.then((response) => {
				fetchData1();

			})
			.catch((e) => {
				console.log(e);
			});
	}

	function fetchData1() {
		let data = FetchDataService.getAll1()
			// setfetchData(data);
			.then(response => {
				setfetchData(response.data);
				// console.log(response.data,"response ");
				// console.log(response.data,"response.data.data");
			})
			.catch(e => {
				console.log(e);
			});
	}

	function uplaodVideo(item, apiEndPoint, source, name, size, file) {
		let data = FetchDataService.uplaodVideo(item, apiEndPoint, source, name, size, file)
			.then((response) => {
				fetchData1();
			})
			.catch((e) => {
				console.log(e);
			});

	}

	function actionRender(item) {
		switch (item.state) {
			case "new": {
				return (
					<a
						onClick={(e) => actionPerformed(item, "submit", e)}
						href="javascript:void(0);"
					>
						Submit
					</a>
				);
			}
			case "awaiting_review_by_lead_journalist": {
				// return  'Approve | Reject'
				return (
					<div>
						<a
							onClick={(e) => actionPerformed(item, "lead_journalist_approve", e)}
							href="javascript:void(0);"
						>
							Approve
            </a>{" "}
            |{" "}
						<a
							href="javascript:void(0);"
							onClick={(e) => actionPerformed(item, "lead_journalist_reject", e)}
						>
							Reject
            </a>{" "}
					</div>
				);
			}
			case "awaiting_video_upload": {

				return (
					<div>
						<button
							onClick={() => {

								selectFile({}, ({ source, name, size, file }) => {
									// file - is the raw File Object
									uplaodVideo(item, 'upload_video', source, name, size, file);
									console.log({ source, name, size, file }, "ppppppppppppppp");

								})
							}}
						>
							Click to Upload
      </button>

						{file ? (
							<div>
								<img src={file.source} alt='preview' />
								<span> Name: {file.name} </span>
								<span> Size: {file.size} </span>
							</div>
						) : (
								<span>No file selected</span>
							)}
					</div>

				);
				// return  (<form encType="multipart/form-data" method="POST" action="/news_items/upload_video?token=abcdef" > <input name='source_file' type='file'/><input type="submit"/> </form>)
			}
			case "awaiting_review_by_lead_video_editor": {
				return (
					<div>
						<a
							onClick={(e) => actionPerformed(item, "Preview Clips", e)}
							href="javascript:void(0);"
						>
							Preview Clips
            </a>{" "}
            |{" "}
						<a
							onClick={(e) =>
								actionPerformed(item, "lead_video_editor_approve", e)
							}
							href="javascript:void(0);"
						>
							Approve
            </a>{" "}
						<a
							href="javascript:void(0);"
							onClick={(e) => actionPerformed(item, "lead_video_editor_reject", e)}
						>
							Reject
            </a>{" "}
					</div>
				);
			}
			case "ready_for_push": {
				return (
					<a
						onClick={(e) => actionPerformed(item, "push_to_feed", e)}
						href="javascript:void(0);"
					>
						Push To Feed
					</a>
				);
			}
			case "pushed_to_feed": {
				return (
					<a
						onClick={(e) => actionPerformed(item, "remove_from_feed", e)}
						href="javascript:void(0);"
					>
						Remove from Feed
					</a>
				);
			}
			case "removed_from_feed": {
				return (
					<a
						onClick={(e) => actionPerformed(item, "push_to_feed", e)}
						href="javascript:void(0);"
					>
						Push To Feed
					</a>
				);
			}
			default: {
				return "no  state matched --- think that ";
			}
		}
	}

	const fetchDataInfo = DataAll?.news_items?.map((item, i) => (
		<>
			<li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow">
				<div className="flex-1 truncate p-2 space-y-2 text-sm">
					<p className="mt-1 text-gray-500 text-sm leading-5 truncate">New </p>
					<div className="flex content-between flex-wrap ">
						<div className="w-2/5 text-left ">
							<div className="text-gray-500">Title</div>
						</div>
						<div className="w-3/5  text-left ">
							<div className="text-gray-700  ">{item.title}</div>
						</div>
					</div>
					<div className="flex content-between flex-wrap ">
						<div className="w-2/5 text-left ">
							<div className="text-gray-500  ">Category</div>
						</div>
						<div className="w-3/5  text-left ">
							<div className="text-gray-700  ">{item.category}</div>
						</div>
					</div>
					<div className="flex content-between flex-wrap">
						<div className="w-2/5 text-left ">
							<div className="text-gray-500  ">News Credits</div>
						</div>
						<div className="w-3/5  text-left ">
							<div className="text-gray-700  ">
								{
									item.news_credits?.map((news_credit, index) => (
										<>
											<a href="{news_credit.url}">{news_credit.link_text}</a>
											<span> | </span>
										</>
									))
								}

							</div>

						</div>
					</div>
					<div className="flex content-between flex-wrap">
						<div className="w-2/5 text-left ">
							<div className="text-gray-500  ">Visual Credits</div>
						</div>
						<div className="w-3/5  text-left ">
							<div className="text-gray-700  ">
								{
									item.visual_credits?.map((visual_credit, index) => (
										<>
											<a href="{visual_credit.url}">{visual_credit.link_text}</a>
											<span> | </span>
										</>
									))
								}

							</div>
						</div>
					</div>
					<div className="flex content-between flex-wrap">
						<div className="w-2/5 text-left ">
							<div className="text-gray-700  ">Tags</div>
						</div>
						<div className="w-3/5  text-left ">
							<div className="text-gray-700  ">{item.tags}</div>
						</div>
					</div>

					<div className="flex content-between flex-wrap">
						<div className="w-2/5 text-left ">
							<div className="text-gray-700  ">State</div>
						</div>
						<div className="w-3/5  text-left ">
							<div className="text-gray-700  ">{item.state}</div>
						</div>
					</div>

					<div className="flex content-between flex-wrap">


						<div className="w-2/5 text-left ">
							<div className="text-gray-700  ">Description</div>
						</div>
						<div className="w-3/5  text-left ">
							<div className="text-gray-700  ">
								{item.descriptions.map(descitem => (

									descitem.sentences.map(sentence => (
										<span>  {sentence} </span>
									))

								))}
							</div>
						</div>
					</div>
				</div>
				<div className="border-t border-gray-200">
					<div className="-mt-px flex">
						<div className="w-0 flex-1 flex border-r border-gray-200">
							<a
								href="javascript:void(0);"
								className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
							>
								<span className="ml-3">{actionRender(item)}</span>
							</a>
						</div>
						<div className="-ml-px w-0 flex-1 flex">
							<a
								href="javascript:void(0);"
								className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
							>
								{/* <span className="ml-3">ReadMore</span> */}
								<Popover color="pink" dataInfo={item} />
							</a>
						</div>
					</div>
				</div>
			</li>
		</>
	));
	return (
		<div>
			<div className="col-md-6">
				<div className="mt-2 md:flex md:items-center md:justify-between">
					<div className="flex-2 min-w-0">
						<h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
							Fetch Data
        </h2>
					</div>
					<div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
						<span className="ml-3 shadow-sm rounded-md">
							<Link href="additem">
								<button
									type="button"
									className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
								>
									Add item
          </button>
							</Link>
						</span>
					</div>
				</div>
				<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{fetchDataInfo}
				</ul>

			</div>

		</div>



	);
};

export default DisplayInfo;
