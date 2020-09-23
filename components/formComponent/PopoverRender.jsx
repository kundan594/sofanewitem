import React from "react";
import Popper from "popper.js";

const Popover = ({ color,dataInfo }) => {
  const [popoverShow, setPopoverShow] = React.useState(false);
  const btnRef = React.createRef();
  const popoverRef = React.createRef();
  const openPopover = () => {
    new Popper(btnRef.current, popoverRef.current, {
      placement: "bottom"
    });
    setPopoverShow(true);
  };
  const closePopover = () => {
    setPopoverShow(false);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full text-center">
          <a
           href="javascript:void(0);"
            className={
              ""
            }
            type="button"
            style={{ transition: "all .15s ease" }}
            onClick={() => {
              popoverShow ? closePopover() : openPopover();
            }}
            ref={btnRef}
          >
           Read More
          </a>
          <div
            className={
              (popoverShow ? "" : "hidden ") +
              " bg-white border-0 mb-3 block z-50 font-normal leading-normal text-sm max-w-lg text-left no-underline break-words rounded-lg"
            }
            ref={popoverRef}
          >
            <div>
              <div
                className={
                  " font-semibold p-3 mb-0 border-b border-solid border-gray-200 uppercase rounded-t-lg"
                }
              >
                 {dataInfo.title}
              </div>
              <div className=" p-3">
                   {dataInfo.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popover;

// export default function PopoverRender() {
//   return (
//     <>
//       return <Popover color="pink" />
//     </>
//   );
// }