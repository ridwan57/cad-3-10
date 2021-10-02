import React from "react";
import _ from "lodash";
import { nativeSelectClasses } from "@mui/material";
function flat(arr) {
  let ans = [];
  helper(arr, ans);
  return ans;
  function helper(arr, ans = []) {
    for (let element of arr) {
      console.log("element:", element);
      if (typeof element !== "object") {
        ans.push(element);
        console.log("ans:", ans);
      } else flat(_.flatten([...element], [...ans]));
    }
  }
}
const Loadash = () => {
  //   const arr = _.chunk(["a", "b", "c", "d"], 3);
  const arr = flat([1, 2, [3, 4]]);

  console.log("arr:", arr);
  return <div></div>;
};

export default Loadash;
