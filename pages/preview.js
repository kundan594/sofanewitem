import Head from "next/head";
import React, { useState, useEffect } from "react";
import { PreviewDataService } from "./api/previewService";
import Link from "next/link";
import Router from "next/router";

const PreviewClip = () => {
	const [clipAll, setClipAll] = useState(null);
	let datainfo = null;
	let data = '';
	let clipDataInfo = null;
	useEffect(() => {
		/// PreviewDataService.clearData();
		let isSubscribed = true;
		//console.log("isSubscribed: ",isSubscribed);
		//console.log("datainfo: ",datainfo);
		if (datainfo == null) {

			let d = PreviewDataService.getData().subscribe(message => {
				console.log("message: ",message);
				if (isSubscribed) {
					console.log("in if isSubscribed: ",isSubscribed);
					datainfo = message.value;
					setClipAll(datainfo);
					console.log(datainfo, "datainfo");
					console.log("set clipAll", clipAll);
					isSubscribed = false;
				}

				//console.log(message.value);
			});
			//console.log("PreviewDataService: ",d);
		}
		return () => (isSubscribed)
	});

	useEffect(() => {
		let isSubscribed = true;
		console.log("bfr if clipAll", clipAll);
		if (clipAll != null && isSubscribed) {
			console.log("in if clipAll", clipAll);

			clipAll?.clips?.map((item, i) => {
				console.log("item: ", item);
			});
		}
		console.log("after if clipAll", clipAll);
		return () => (isSubscribed = false)
	}, [clipAll]);

	console.log(datainfo, "datainfo end");

	return (

		<div className="bg-white">
			<div className="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
				<div className="space-y-12">
					<div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
						<h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">Our Video clips </h2>
						{/* <p className="text-xl leading-7 text-gray-500">Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus quis et.</p> */}
					</div>
					<ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
						{/* <li>
							<div className="space-y-4">
								<div className="relative pb-2/3">
								<img className="absolute object-cover h-full w-full shadow-lg rounded-lg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
								</div>
							</div>
							</li>

							<li>
							<div className="space-y-4">
								<div className="relative pb-2/3">
								<img className="absolute object-cover h-full w-full shadow-lg rounded-lg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
								</div>
							</div>
							</li> */}

						{datainfo != null && (
							datainfo.clips.map((item, i) => {
								<li>
									<div className="space-y-4">
										<div className="relative pb-2/3">lllllllllllllllll
                         						<img className="absolute object-cover h-full w-full shadow-lg rounded-lg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" ></img>
										</div>
									</div>
								</li>
							})
						)}

						<li>
							<div className="space-y-4">
								<div className="relative pb-2/3">
									<img className="absolute object-cover h-full w-full shadow-lg rounded-lg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
								</div>
							</div>
						</li>


					</ul>
				</div>
			</div>
		</div>

	);
};

export default PreviewClip;