declare module '$lib/services/api' {
    interface API {
        get(url: string, options?: any): Promise<any>;
        // Define other methods similarly
    }

    const api: API;
    export default api;
}