import fetch, { RequestInit, Response } from 'node-fetch';

abstract class Fetch {
    protected token: string
    protected baseURL = "https://www.guilded.gg/api/v1/"
    constructor(token: string) {
        this.token = token
    }
    protected async apiFetch(endpoint: string, options: RequestInit): Promise<Response> {
        const requestConfig: RequestInit = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.token}`
            },
        }
        const totalObj: RequestInit = { ...options, ...requestConfig }
        return fetch(`${this.baseURL}${endpoint}`, totalObj)
    }
};

export default Fetch