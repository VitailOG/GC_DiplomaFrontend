class BaseAPI {
    private readonly _baseUrl: string

    constructor(baseUrl: string) {
        this._baseUrl = baseUrl
    }

    get baseUrl(): string {
        return this._baseUrl;
    }

}

export default BaseAPI;
