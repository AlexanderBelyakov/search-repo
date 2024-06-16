class Api {
  private _baseUrl: string;

  constructor(options: { baseUrl: string }) {
    this._baseUrl = options.baseUrl;
  }

  private _checkResponse(res: Response) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  }

  getRepo(query: string) {
    return fetch(this._baseUrl + `/search/repositories?q=${query}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: "https://api.github.com",
});

export default api;
