import Head from "next/head";
import React, { useState, useEffect } from "react";
import FetchDataService from "../../pages/api/fetch.service";
import Link from "next/link";
import Router from "next/router";
const Table = () => {
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
        return "upload video";
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
    <tr className={i % 2 == 0 ? "bg-white" : "bg-gray-200"}>
      <td class="px-6 py-4  text-sm leading-5 font-medium text-gray-900">
        {item.title}
      </td>
      <td class="px-6 py-4  text-sm leading-5 text-gray-500">
        {item.description}
      </td>
      <td class="px-6 py-4  text-sm leading-5 text-gray-500">
        {item.category}
      </td>
      <td class="px-6 py-4  text-sm leading-5 text-gray-500">
        {item.news_credits}
      </td>
      <td class="px-6 py-4  text-sm leading-5 text-gray-500">
        {item.visual_credits}
      </td>
      <td class="px-6 py-4  text-sm leading-5 text-gray-500">{item.tags}</td>

      <td class="px-6 py-4  text-sm leading-5 text-gray-500">{item.state}</td>
      <td class="px-6 py-4   text-sm leading-5 font-medium">
        <a
          href="#"
          class="text-indigo-600 hover:text-indigo-900  text-left text-xs"
        >
          {actionRender(item)}
        </a>
      </td>
    </tr>
  ));
  return (
    <div class="flex flex-col">
      <div class="mt-2 md:flex md:items-center md:justify-between">
        <div class="flex-2 min-w-0">
          <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
            Fetch News Items
          </h2>
        </div>
        <div class="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
          <span class="ml-3 shadow-sm rounded-md">
            <Link href="/additem">
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Add News Items
              </button>
            </Link>
          </span>
        </div>
      </div>
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th class="px-6 py-3 flex-wrap bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th class="px-6 py-3 flex-no-wrap bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th class="px-6 py-3 flex-wrap bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    News Credits
                  </th>
                  <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    {" "}
                    Visual Credits
                  </th>
                  <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    {" "}
                    Tags
                  </th>
                  <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    {" "}
                    State
                  </th>
                  <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider0">
                    {" "}
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>{fetchDataInfo}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
