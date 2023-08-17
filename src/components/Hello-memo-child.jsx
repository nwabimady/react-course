import React, { useEffect } from "react";

export const HelloMemoChild = React.memo(({ isChecked }) => {
  useEffect(() => {
    console.log("Memo-child rendered.");
  });

  return <></>;
});
