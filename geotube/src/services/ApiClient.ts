/*
*   Copyrights (C) 2021 Shota Shimazu, All Rights Reserved.
*
*/

const DeviceAgent: string = 'WebShell/0.0.1 PnstrWebFront/0.0.2';

const BearerTokenAccessor: string = 'PnstrBearerToken';

export class APIClient {

    static POST(entry: string, structure: any, func: any, additionalHeaders: any) {

        const method = "POST";
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Device-Agent': DeviceAgent,
            additionalHeaders
        };

        var body = JSON.stringify(structure);

        this.requestAPI(entry, method, headers, body, func);
    }

    static GET(entry: any, func: any, additionalHeaders: any) {
        const method = "GET";
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Device-Agent': DeviceAgent,
            additionalHeaders
        };

        this.requestAPI(entry, method, headers, "", func);
    }

    static requestAPI(entry: any, method: any, headers: any, body: any, func: any) {
        fetch(this.entryHost() + entry, { method, headers, body })
            .then(res => res.json())
            .then((data) => {
                func(data)
            })
            .catch(console.log)
    }

    static entryHost() {
        var hostName = document.location.hostname;

        return (
            (hostName === "localhost" || hostName === "127.0.0.1") ?
                "http://localhost:8080" : "https://l.pnstr.com"
        );
    }
} 


export function AuthToken() {
    return "Bearer " + localStorage.getItem(BearerTokenAccessor);
}
