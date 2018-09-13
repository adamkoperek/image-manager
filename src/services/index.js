import {ajaxPost} from "rxjs/internal/observable/dom/AjaxObservable";

export const api = 'http://localhost:3000/';
export const jsonHeader = {'Content-type': 'application/json'};

export const post = (action, body, header = jsonHeader) => {
  console.log(api + action, body, header);
  return ajaxPost(
    api + action, body, header
  );
};


