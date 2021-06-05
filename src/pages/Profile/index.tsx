import clsx from 'clsx';
import React from 'react';
import { useHistory, useParams } from 'react-router';
import { IPost, postApi } from '../../api/post';
import { IUser, userApi } from '../../api/user';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { CreatePostForm } from '../../components/CreatePostForm';
import { LeftPanel } from '../../components/LeftPanel';
import { MainBlock } from '../../components/MainBlock';
import { Post } from '../../components/Post';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useThrottledLazyLoading } from '../../hooks/useThrottleLazyLoading';
import { followUser, unfollowUser } from '../../store/slices/people';
import { loadUserWall, reset } from '../../store/slices/userPosts';
import { Right } from '../Index/Right';
import styles from './Profile.module.scss';

export const Profile: React.FC = () => {
    const params: { id: string } = useParams();
    const [user, setUser] = React.useState<IUser>({} as IUser);
    const loggedUser = useAppSelector((state) => state.user.user);
    const dispatch = useAppDispatch();
    const { posts, loading, total_pages, total_count } = useAppSelector(
        (state) => state.posts
    );
    const [page, setPage] = React.useState(1);
    const [total, setTotal] = React.useState(0);
    // const [isFetching, setFetching] = React.useState(false);
    React.useEffect(() => {
        (async () => {
            dispatch(reset());
            const res = (await userApi.getById(parseInt(params.id))).data;
            setUser(res);
            setFollowed(Boolean(res.followed_by_me));
        })();
    }, [params.id]);

    React.useEffect(() => {
        (async () => {
            dispatch(loadUserWall(parseInt(params.id), page));
        })();
    }, [page, params.id]);

    useThrottledLazyLoading(page, total_pages, setPage, 1000);

    const [isFollowed, setFollowed] = React.useState(
        Boolean(user.followed_by_me)
    );
    const toggleFollow = () => {
        if (isFollowed) {
            dispatch(unfollowUser(user));
        } else {
            dispatch(followUser(user));
        }
        setFollowed((t) => !t);
    };
    const hist = useHistory();

    const gotoFolowers = () => {
        hist.push(`/user/${user.id}/people`);
    };

    return (
        <div style={{ alignItems: 'flex-start' }} className="d-flex">
            <LeftPanel></LeftPanel>
            <div
                className="d-flex flex-column"
                style={{ maxWidth: '35vw', minWidth: '35vw' }}
            >
                <MainBlock
                    className={styles.userInfo}
                    style={{
                        position: 'relative',
                        overflow: 'hidden',
                        marginBottom: '20px',
                    }}
                >
                    <div
                        style={{
                            backgroundImage: `url(${process.env.REACT_APP_MEDIA_URL}/${user.background_image_url})`,
                        }}
                        className={styles.bgFon}
                    ></div>
                    <Avatar
                        className={styles.avatar}
                        height="90px"
                        width="90px"
                        src={
                            user.avatar_url &&
                            process.env.REACT_APP_MEDIA_URL + user.avatar_url
                        }
                        first_name={user.first_name}
                        last_name={user.last_name}
                    ></Avatar>
                    <div className={styles.infoBlock}>
                        <div className={styles.name}>
                            {user.first_name} {user.last_name}
                        </div>
                        <div className={styles.username}>{user.username}</div>
                        <div className={styles.description}>
                            Тут типа описание меня
                        </div>
                    </div>
                    <div className={styles.subscribeBtn}>
                        <Button onClick={gotoFolowers} variant="blue">
                            падпещики
                        </Button>
                        {loggedUser?.id !== user.id && (
                            <Button
                                onClick={toggleFollow}
                                variant={isFollowed ? 'white' : 'blue'}
                            >
                                {isFollowed ? 'Отписаться' : 'Подписаться'}
                            </Button>
                        )}
                    </div>
                </MainBlock>
                {loggedUser?.id === user.id && <CreatePostForm />}
                {loading && <div>Lodaing...</div>}
                {!posts.length && !loading && <div>Пока шо тут пусто...</div>}
                {posts &&
                    posts.map((post) => (
                        <Post key={post.post_id} {...post}></Post>
                    ))}
            </div>

            <Right />
        </div>
    );
};
