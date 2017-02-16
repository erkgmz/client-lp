import 'whatwg-fetch';
const mainApi = 'https://kailey-website-api.herokuapp.com/';

// exposed
export function postMessage(data) {
  return post('contact', data);
}

// private
function post(url, data) {
  // http://www.hartzis.me/fetch-post-express/
  const request = new Request(mainApi + url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
