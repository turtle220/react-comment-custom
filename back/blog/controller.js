const Blog = require('../blog.model')

// The callback that is invoked when the user submits the form on the client.
exports.collectBlog = (req, res) => {
  const { blogId } = req.body
  const title = 'title'
  const description = 'description'
  const image = 'image'
  const categories = 'updateTitle'

  Blog.findOne({ blogId })
    .then(blog => {
      if (blog==null) {
        console.log('blog: ', blog)
        Blog.create({ blogId, title, description, image, categories })
        .then(() => res.json())
        .catch(err => console.log('create err ===========', err))
      } else {
        console.log('blog: ', blog)
        Blog.findByIdAndUpdate(blog._id, { categories })
          .then(() => res.json())
          .catch(err => console.log('update err ===========', err))
      }
    })
    .catch(err => console.log('error ================', err))
}

// The callback that is invoked when the user visits the confirmation
// url on the client and a fetch request is sent in componentDidMount.
// exports.confirmEmail = (req, res) => {
//   const { id } = req.params

//   User.findById(id)
//     .then(user => {

//       // A user with that id does not exist in the DB. Perhaps some tricky
//       // user tried to go to a different url than the one provided in the
//       // confirmation email.
//       if (!user) {
//         res.json({ msg: msgs.couldNotFind })
//       }

//       // The user exists but has not been confirmed. We need to confirm this
//       // user and let them know their email address has been confirmed.
//       else if (user && !user.confirmed) {
//         User.findByIdAndUpdate(id, { confirmed: true })
//           .then(() => res.json({ msg: msgs.confirmed }))
//           .catch(err => console.log(err))
//       }

//       // The user has already confirmed this email address.
//       else  {
//         res.json({ msg: msgs.alreadyConfirmed })
//       }

//     })
//     .catch(err => console.log(err))
// }