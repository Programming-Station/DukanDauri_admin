export class ApiResponse<T> {
    constructor(
        public data: T,
        public success: boolean,
        public message: string,
        public statusCode: number | string,
        public error?: string[]
    ) { }
}