import 'whatwg-fetch';
const mainApi = 'https://kailey-website-api.herokuapp.com/';

// exposed
export function postMessage() {
  return post('contact');
}

// private
function post(url) {
  const request = new Request(mainApi + url, { method: 'POST' });
  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
