exports.getPosts = (req, res, next) => {
    res.status(200).json([
        { title: 'First Post', content: 'This is the first post!', imageUrl: 'images/image1.png' },
        { title: 'Second Post', content: 'This is the second post!', imageUrl: 'images/image1.png' },
        { title: 'Third Post', content: 'This is the third post!', imageUrl: 'images/image1.png' },
    ])
};

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    res.status(201).json({
        message: 'Post created successfully!',
        post: {
            id: new Date().toISOString,
            title,
            content
        }
    });
};