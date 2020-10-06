import React, { useState, useEffect } from "react";
import ReactPlayer from 'react-player'
import {
  messageService,
  PreviewDataService,
} from "../../pages/api/previewService";

function PriviewClipData(props) {
  const [messages, setMessages] = useState([]);
  const [clipAll, setclipData] = useState(null);

//   useEffect(() => {
//     // subscribe to home component messages
//     const subscription = messageService.onMessage().subscribe((message) => {
//       if (message) {
//         // add message to local state if not empty
//         setMessages((messages) => [...messages, message]);
//       } else {
//         // clear messages when empty message received
//         setMessages([]);
//       }
//     });

   
//     return subscription.unsubscribe;
//   }, []);

  useEffect(() => {

    setclipData(props.clipData);
  
    // const subscription2 = PreviewDataService.getData().subscribe((clip) => {
    //   if (clip) {       
    //     setclipData(clip);
    //   } else {      
    //     setclipData(null);
    //   }
    // });

 
    // return subscription2.unsubscribe;
  }, []);

 

  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">
              Our Video clips{" "}
            </h2>
            {/* <p className="text-xl leading-7 text-gray-500">Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus quis et.</p> */}
          </div>

          <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {clipAll?.value.map((clip, index) => (
              <li>
                <div className="space-y-4">
                  <div className="relative pb-2/3">
                  <ReactPlayer url={clip.url+"?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"} />
                    {/* <img
                      className="absolute object-cover h-full w-full shadow-lg rounded-lg"
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                      alt=""
                    /> */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export { PriviewClipData };
