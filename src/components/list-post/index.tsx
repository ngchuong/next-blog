
import React, { useEffect, useState, FC, MouseEventHandler } from "react";
import { styled } from "@mui/material";

const PostCont = styled('div')`
margin-bottom: 20px;
`;
const PostTitle = styled('div')`
border-bottom: 1px solid #ccc;
`;

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

interface IListPost {
    posts: TPostsProgram[];
    openPost: (id: any) => MouseEventHandler<HTMLDivElement>
}

const ListPost: FC<IListPost> = ({ posts, openPost }) => {
    return (
        <div>
            {posts?.map((post, index) => {
                return (
                    <PostCont key={post?.title}>
                        <PostTitle onClick={openPost(post?.id)}>{post?.title}</PostTitle>
                        <div>{post?.content}</div>
                    </PostCont>
                )
            })}
        </div>
    )
}

export default ListPost