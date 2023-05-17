import { Posts } from './resources/posts';
export declare class Library {
    posts: Posts;
    constructor(config: {
        apiKey: string;
        baseUrl?: string;
    });
}
