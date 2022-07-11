class BaseAPI {

    constructor(private readonly _baseUrl: string) {}

    get baseUrl(): string {
        return this._baseUrl;
    }

}

export default BaseAPI;
