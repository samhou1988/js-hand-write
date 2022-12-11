function ajax({
  type,
  url,
  contentType,
  dataType,
  data,
  success,
  complete,
  error,
}) {
  const xhr = new XMLHttpRequest();
  xhr.open(type.toUpperCase(), url, true);
  xhr.setRequestHeader('Content-Type', contentType);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      complete(xhr);
      if (xhr.status === 200 || xhr.status === 304) {
        if (dataType === 'json') {
          success(JSON.parse(xhr.responseText));
        } else {
          success(xhr.responseText);
        }
      } else {
        error()
      }
    }
  }
  xhr.send(data);
}

ajax({
  type: 'post',
  url: '/xhr',
  contentType: 'application/json',
  dataType: 'json',
  data: JSON.stringify({
    a: 1
  }),
  success: function (response) {
    console.log(response);
  },
  complete: function (response) {
    console.log(response);
  },
  error: function () {
    console.log('error')
  }
})