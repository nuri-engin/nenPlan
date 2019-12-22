import { CREATE_PROJECT } from "../actions/actionTypes/projectActionTypes";
import { CREATE_PROJECT_ERROR } from "../actions/actionTypes/projectActionTypes";

const initState = {
  projects: [
    { id: "1", title: "title 1", content: "foo bar zet content 1" },
    { id: "2", title: "title 2", content: "foo bar zet content 2" },
    { id: "3", title: "title 3", content: "foo bar zet content 3" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      console.log("Porject created; ", action.project);
      return state;
    case CREATE_PROJECT_ERROR:
      console.log("ERROR", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
