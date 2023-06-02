import ReactQuill from "react-quill";


function Editor({ value, onHandleContent }) {
    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            ["link"],
            ["clean"],
        ],
    };


    return (
        <ReactQuill
            value={value}
            theme={"snow"}
            onChange={onHandleContent}
            modules={modules}
        />
    );
}

export default Editor;
