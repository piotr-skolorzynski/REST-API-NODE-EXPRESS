exports.getPosts = (req, res, next) => {
    //przesyłamy kod statusu oraz metodą json() zamieniamy kontent w JSON-a
    res.status(200).json([
        { title: 'First Post', content: 'This is the first post!' },
        { title: 'Second Post', content: 'This is the second post!' },
        { title: 'Third Post', content: 'This is the third post!' },
    ])
};

exports.createPost = (req, res, next) => {
    //dla przykładu dla odpowiedzi wykorzystane będzie co przychodzi z FE
    const title = req.body.title;
    const content = req.body.content;

    //create post in db

    res.status(201).json({
        message: 'Post created successfully!',
        post: {
            id: new Date().toISOString,
            title,
            content
        }
    });
};