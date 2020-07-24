// const Blog = require('../blog.model')
const Blog = require('../Blog.model')
const UserComment = require('../usercomment.model');

exports.setComment = (req, res) => {
  const { comment } = req.body

  UserComment.count({}, function (error, numOfDocs) {
    if (error) return callback(error);

    // set the data sequence
    comment.selfId = numOfDocs + 1
    comment.commentAllow = false

    UserComment.create(comment, function (err, result) {
      if (err) throw err;
      if (result) {
        _getBlogAndComment(comment.blogId, res)
      }
    });
  });
}

exports.getCommentListWithBlogName = (req, res) => {
  UserComment.find({ 'commentAllow': false }, async function (err, result) {
    if (err) throw err;

    var resp = []
    for (const record of result) {
      const doc = await Blog.findOne({ '_id': record.blogId });
      if (!doc) throw new Error('No record found.');

      resp.push({ ...record._doc, blogTitle: doc.blogTitle })
    }
    res.json(resp);
  });
}

exports.updateCommentAllow = (req, res) => {
  const comment = req.body;

  UserComment.findByIdAndUpdate({ '_id': comment.updateId },
    { commentAllow: true })
    .then(() => res.json('success'))
    .catch(err => console.log('update err ------------------', err))
}

exports.getBlogAndComment = (req, res) => {
  const { blogId } = req.body
  _getBlogAndComment(blogId, res)
}

function _getBlogAndComment(blog_id, res) {
  const results = {}

  Blog.find().where("_id", blog_id).exec(async function (err, blogs) {
    results.blogData = blogs
    const getCommentTree = (blogId, parentId) => {
      return new Promise(async (resolve, reject) => {
        const ret = []
        UserComment.find().where({ blogId, parentId }).exec(async function (err, comments) {
          if (err) {
            resolve([])
          } else {
            if (comments.length > 0) {
              for (const comment of comments) {
                const children = [...await getCommentTree(blogId, comment.selfId)]
                ret.push({ ...comment._doc, children })
              }
            }
            resolve(ret)
          }
        })
      })
    }
    const resJson = await getCommentTree(blog_id, 0);

    results.commentData = resJson
    res.json(results)
  });
}

exports.getBlogList = (req, res) => {
  Blog.find({}, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
}

exports.insertBlog = (req, res) => {
  const blog = req.body;

  const blogTitle = blog.blogTitle;
  const blogDescription = blog.blogDescription;
  const blogImage = blog.blogImage;
  const blogOtherImage = blog.blogOtherImage;

  let today = new Date().toLocaleDateString(undefined, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  Blog.create({ blogTitle, blogDescription, blogImage, blogOtherImage, curDate: today })
    .then(() => res.json('success'))
    .catch(err => console.log('create err ------------------', err))
}

exports.updateBlog = (req, res) => {
  const blog = req.body;

  Blog.findByIdAndUpdate({ '_id': blog.updateId },
    { blogTitle: blog.blogTitle, blogDescription: blog.blogDescription, blogImage: blog.blogImage, blogOtherImage: blog.blogOtherImage })
    .then(() => res.json('success'))
    .catch(err => console.log('update err ------------------', err))
}
