import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectPostIsLoading,
	selectPosts,
	selectPostsError,
} from '../../store/selectors';
import { addPost, removePost, updatePost } from '../../store/actions/';
import { loadPosts } from '../../store/reducers';

export const MainPage = () => {
	const posts = useSelector(selectPosts);
	const isLoading = useSelector(selectPostIsLoading);
	const error = useSelector(selectPostsError);
	const [data, setData] = useState('');
	const dispatch = useDispatch();

	const handleAddPost = () => {
		dispatch(addPost(data));
		setData('');
	};

	const handleUpdatePost = (id, value) => {
		dispatch(updatePost(id, value));
	};

	const handleRemovePost = (id) => {
		dispatch(removePost(id));
	};

	useEffect(() => {
		dispatch(loadPosts());
	}, []);

	if (error) {
		return <div>{error}</div>;
	}

	if (isLoading) {
		return <div>Загрузка...</div>;
	}

	return (
		<div>
			<h1>Posts</h1>
			<ul>
				{posts.map((post) => (
					<>
						<li key={post.id}>{post.title}</li>
						<button onClick={() => handleUpdatePost(post.id, 'updatedPost')}>
							Update Post
						</button>
						<button onClick={() => handleRemovePost(post.id)}>
							Delete Post
						</button>
					</>
				))}
			</ul>
			<input
				type="text"
				value={data}
				onChange={({ target }) => setData(target.value)}
			/>
			<button onClick={handleAddPost}>Add Post</button>
		</div>
	);
};
