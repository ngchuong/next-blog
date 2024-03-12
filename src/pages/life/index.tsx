import React, { useEffect, useState } from "react";
import { styled } from "@mui/material";

import { getPostsLife } from "@/api/api";
import ListPost from "../../components/list-post";

type TPostsProgram = {
    id: number;
    authorId: string;
    category: string;
    title: string;
    metaTitle: string;
    slug: string;
    summary: string;
    pulished: boolean;
    createdAt: string;
    updatedAt: string;
    puslishedAt: string;
    content: string;
}

const Life = () => {
    const [posts, setPosts] = useState<TPostsProgram[]>([]);

    useEffect(() => {
        getPostsLife().then((res) => {
            if (res.status === 200) {
                setPosts(res.data);
            }
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const openPost = (id: any) => () => {
        //redirect to
    }

    return (
        <div>
            <ListPost posts={posts} openPost={openPost} />
        </div>
    )
}

export default Life;