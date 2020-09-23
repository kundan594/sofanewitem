import Head from "next/head";
import React, { useState, useEffect } from "react";
import FetchDataService from "../../pages/api/fetch.service";
import Link from "next/link";
import Router from "next/router";
import Popover  from '../formComponent/PopoverRender'
const DisplayInfo = () => {
  const [DataAll, setfetchData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  function fetchData() {
    let data = FetchDataService.getAll();
    setfetchData(data);
    // .then(response => {
    //     setfetchData(response.data.data);
    // })
    // .catch(e => {
    //     console.log(e);
    // });
  }

  function actionPerformed(item, apiEndPoint) {
    processedDataInfo(item, apiEndPoint);
  }

  function processedDataInfo(item, apiEndPoint) {
    console.log(item, "asdas");
    let data = FetchDataService.processedData(item, apiEndPoint)
      .then((response) => {
        setfetchData(response.data.data);
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
            onClick={(e) => actionPerformed(item, "submit")}
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
              onClick={(e) => actionPerformed(item, "lead_journalist_approve")}
              href="javascript:void(0);"
            >
              Approve
            </a>{" "}
            |{" "}
            <a
              href="javascript:void(0);"
              onClick={(e) => actionPerformed(item, "lead_journalist_reject")}
            >
              Reject
            </a>{" "}
          </div>
        );
      }
      case "awaiting_video_upload": {
        return "Upload video";
      }
      case "awaiting_review_by_lead_video_editor": {
        return (
          <div>
            <a
              onClick={(e) => actionPerformed(item, "Preview Clips")}
              href="javascript:void(0);"
            >
              Preview Clips
            </a>{" "}
            |{" "}
            <a
              onClick={(e) =>
                actionPerformed(item, "lead_video_editor_approve")
              }
              href="javascript:void(0);"
            >
              Approve
            </a>{" "}
            <a
              href="javascript:void(0);"
              onClick={(e) => actionPerformed(item, "lead_video_editor_reject")}
            >
              Reject
            </a>{" "}
          </div>
        );
      }
      case "ready_for_push": {
        return (
          <a
            onClick={(e) => actionPerformed(item, "push_to_feed")}
            href="javascript:void(0);"
          >
            Push To Feed
          </a>
        );
      }
      case "pushed_to_feed": {
        return (
          <a
            onClick={(e) => actionPerformed(item, "remove_from_feed")}
            href="javascript:void(0);"
          >
            Remove from Feed
          </a>
        );
      }
      case "removed_from_feed": {
        return (
          <a
            onClick={(e) => actionPerformed(item, "push_to_feed")}
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
              <div className="text-gray-700  ">{item.news_credits}</div>
            </div>
          </div>
          <div className="flex content-between flex-wrap">
            <div className="w-2/5 text-left ">
              <div className="text-gray-500  ">Visual Credits</div>
            </div>
            <div className="w-3/5  text-left ">
              <div className="text-gray-700  ">{item.visual_credits}</div>
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
              <div className="text-gray-700  ">{item.description}</div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="-mt-px flex">
            <div className="w-0 flex-1 flex border-r border-gray-200">
              <a
                href="#"
                className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
              >                
                <span className="ml-3">{actionRender(item)}</span>
              </a>
            </div>
            <div className="-ml-px w-0 flex-1 flex">
              <a
                href="#"
                className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
              >                
                {/* <span className="ml-3">ReadMore</span> */}
                {/* <Popover color="gray" /> */}
              </a>
            </div>
          </div>
        </div>
      </li>
    </>
  ));
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {fetchDataInfo}
    </ul>
  );
};

export default DisplayInfo;
