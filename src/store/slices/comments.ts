import { IPaginationResponse } from '../../api/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '..';
import { postApi } from '../../api/post';
import { commentApi, IComment } from '../../api/comment';
import { mediaApi } from '../../api/media';

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [] as IComment[],
        total_count: 0,
        total_pages: 4,
        failure: false,
        loading: false,
        attachments: [] as string[],
    },
    reducers: {
        setComments: (
            state,
            action: PayloadAction<IPaginationResponse<IComment>>
        ) => {
            state.comments.push(...action.payload.result);
            state.total_count = action.payload.total_count;
            state.total_pages = action.payload.total_pages;
        },
        setFailure: (state, action) => {
            state.failure = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        reset: (state) => {
            state.comments = [];
            state.total_count = 0;
            state.total_pages = 1;
        },
        append: (state, action: PayloadAction<IComment>) => {
            state.comments.push(action.payload);
        },
        remove: (state, action: PayloadAction<number>) => {
            state.comments = state.comments.filter(
                (comment) => comment.comment_id !== action.payload
            );
        },
        update: (state, action: PayloadAction<IComment>) => {
            const comment = action.payload;
            const i = state.comments.findIndex(
                (c) => c.comment_id === comment.comment_id
            );
            state.comments[i] = comment;
        },
        setAttachments: (state, action: PayloadAction<string[]>) => {
            state.attachments = action.payload;
        },
        resetAttachments: (state) => {
            state.attachments = [];
        },
    },
});

const {
    setComments,
    setFailure,
    setLoading,
    append,
    remove,
    update,
    resetAttachments,
} = commentsSlice.actions;
export const loadComments =
    (id: number, page: number): AppThunk =>
    async (dispatch) => {
        try {
            dispatch(setLoading(true));
            const res = await postApi.getCommenets(id, page);
            dispatch(setComments(res.data));
            dispatch(setFailure(false));
        } catch (err) {
            dispatch(setFailure(true));
        } finally {
            dispatch(setLoading(false));
        }
    };

export const addComment =
    (id: number, text: string): AppThunk =>
    async (dispatch, getState) => {
        try {
            dispatch(setLoading(true));
            const res = await postApi.addComment(id, { message: text });
            res.data.attachments = getState().posts.attachments;
            console.log(res.data);
            dispatch(append(res.data));
            await mediaApi.attach({
                body: getState().posts.attachments,
                comment_id: res.data.comment_id,
            });
            dispatch(resetAttachments());
            dispatch(setFailure(false));
        } catch (err) {
            dispatch(setFailure(true));
        } finally {
            dispatch(setLoading(false));
        }
    };

export const removeComment =
    (id: number): AppThunk =>
    async (dispatch) => {
        try {
            await commentApi.deleteById(id);
            dispatch(remove(id));
            dispatch(setFailure(false));
        } catch (err) {
            dispatch(setFailure(true));
        } finally {
        }
    };

export const updateComment =
    (id: number): AppThunk =>
    async (dispatch) => {
        try {
            const res = await commentApi.getById(id);
            dispatch(update(res.data));
        } catch (error) {
            throw error;
        }
    };

export const commentActions = commentsSlice.actions;

export default commentsSlice.reducer;
