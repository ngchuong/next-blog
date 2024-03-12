import SimpleMDECustom from "@/components/simple-mde/index";
import { useCallback, useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import Tags from "@/components/tags";

const CreatePost = () => {
  const [dataPost, setDataPost] = useState<{title: string, tags: string[], content: string}>({
    title: "",
    tags: [],
    content: "",
  });

  const onChangeTitle = (e: any) => {
    const value = e?.target?.value;
    setDataPost({ ...dataPost, title: value });
  };
  const onChangeTags = (data: string[]) => {
    setDataPost({ ...dataPost, tags: [...data] });
  };
  const onChangeContent = (value: string) => {
    setDataPost({ ...dataPost, content: value });
  };

  const publishPost = () => {
    // TODO: call api post
  }

  return (
    <div>
      <Box sx={{ marginBottom: "10px" }}>
        <TextField
          id="outlined-basic"
          fullWidth
          label="Title"
          variant="outlined"
          value={dataPost.title}
          onChange={onChangeTitle}
        />
      </Box>
      <Box sx={{ marginBottom: "10px" }}>
        <Tags value={dataPost.tags} onChange={onChangeTags} />
      </Box>
      <SimpleMDECustom value={dataPost.content} onChange={onChangeContent} />

      <Box>
        <Button variant="contained" onClick={publishPost}>Publish</Button>
      </Box>
    </div>
  );
};

export default CreatePost;
