const express = require('express')
const router = express.Router()
const Post = require('../models/Post');


//GETS BACK ALL THE POSTS
router.get('/', async(req, res) => {
   try{ 
    const posts = await Post.find();
    res.json(posts);
   }catch(err) {
       res.send({ message: err})
   }
})

//CREATES A NEW POST
router.post('/', async (req, res) => {
    const { title, description } = req.body;
   const post = new Post({
       title,
       description
   })
   try{
       const savedPost = await post.save();
       res.json(savedPost)
   }catch(err) {
    res.json({ message: err})
   }
})


router.get('/:postId', async(req, res) => {
    const { postId } = req.params;
    try {
        const post = await Post.findById(postId)
        res.json(post);
    }catch(err) {
        res.json({ message: err})
    }
})


router.delete('/:postId', async(req, res) => {
    const { postId } = req.params;
    try {
        const post = await Post.remove({ _id: postId })
        res.json(post);
    }catch(err) {
        res.json({ message: err})
    }
})


router.patch('/:postId', async(req, res) => {
    const { postId } = req.params;
    const { title } = req.body;
    try {
        const post = await Post.updateOne(
            { _id: postId }, 
            { $set: { title }
        });
        res.json(post);
    }catch(err) {
        res.json({ message: err})
    }
})
module.exports = router