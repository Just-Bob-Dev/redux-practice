export default function (state=null, action) {
  switch(action.type) {
    case "USER_SELECTED":
      console.log(action.payload.last);
      return action.payload;
    break;
  }
  return state;
}
