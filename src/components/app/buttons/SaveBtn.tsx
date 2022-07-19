import React from "react";
import Check from "../../../utils/icons/Check";

const SaveBtn = ({ changed, update }: { changed: boolean; update: any }) => {
  return (
    <>
      {changed && (
        <button onClick={update}>
          <Check className="text-white ml-2 " />
        </button>
      )}
    </>
  );
};

export default SaveBtn;
