export default class HttpMethod {

    public async get(url: string) {
        return await fetch(url, {
            // timeout: 80000,
            headers: {
                "Content-Type": "application/json",
                // "Authorization": `${import.meta.env.VITE_COMPANY_ID}`,
            }
        }).then(res => res.json());
    }


}