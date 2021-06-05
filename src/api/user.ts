import { IPost } from './post';
import { http } from './http-client';
export enum Roles {
    USER = 1,
    ADMIN = 3,
    MODERATOR = 2,
}

export interface IUser {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    avatar_url: string;
    createdAt: string;
    followers_count: number;
    following_count: number;
    background_image_url: string;
    followed_by_me: number | null;
    role: Roles;
}
const getById = (id: number) => http.get<IUser>(`/user/${id}`);

export type TSimpleUser = Pick<
    IUser,
    | 'id'
    | 'first_name'
    | 'username'
    | 'avatar_url'
    | 'last_name'
    | 'followed_by_me'
>;
const getFollowing = (id: number, page: number) =>
    http.get<IPaginationResponse<TSimpleUser>>(
        `user/${id}/following?page=${page}`
    );

const getFollowers = (id: number, page: number) =>
    http.get<IPaginationResponse<TSimpleUser>>(
        `user/${id}/followers?page=${page}`
    );

const follow = (id: number) => http.post(`user/${id}/follow`);

const unfollow = (id: number) => http.post(`user/${id}/unfollow`);

const search = (query: string, page: number) =>
    http.get<IPaginationResponse<TSimpleUser>>(
        `user/search?query=${query}&page=${page}`
    );
export interface IPaginationResponse<T> {
    page: number;
    result: T[];
    total_pages: number;
    total_count: number;
}
const getFolliwingPosts = (id: number, page: number) =>
    http.get<IPaginationResponse<IPost>>(
        `user/${id}/posts/following?page=${page}`
    );

const getPosts = (id: number, page: number) =>
    http.get<IPaginationResponse<IPost>>(`user/${id}/posts?page=${page}`);

export const userApi = {
    getById,
    getFollowing,
    getFollowers,
    follow,
    unfollow,
    getFolliwingPosts,
    getPosts,
    search,
};
