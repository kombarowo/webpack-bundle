export default class Request {
  constructor(url) {
    this.url = url;
  }

  async postData(data, dataType) {
    switch (dataType) {
      case "formData": {
        return await fetch(this.url, {
          method: 'POST',
          body: data
        });
      }
      case "json": {
        return await fetch(this.url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        });
      }
    }
  }

  async getData() {
    return await fetch(this.url);
  }
}