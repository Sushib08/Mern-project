import React, { useEffect, useState } from 'react';
import { getPosts } from '../actions/post.actions';
import {useDispatch, useSelector} from 'react-redux';
import { isEmpty } from "./Utils";
import { Card } from './Post/Card';

export const Thread = () => {

    const [loadPost, setLoadPost] = useState(true);
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postReducer);

    useEffect(() =>{
        if(loadPost){
            dispatch(getPosts());
            setLoadPost(false)
        }
    }, [loadPost, dispatch])

  return (
    <div className='thread_container'>
        <ul>
            {!isEmpty(posts[0]) &&
            posts.map((post) =>{
                return <Card post={post} key={post._id}/>
            })
            }
        </ul>
    </div>
  )
}
