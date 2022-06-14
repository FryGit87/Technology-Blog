const newFormHandler = async (event) => {
  event.preventDefault()

  const comment_text = document.querySelector('#comment-text').value.trim()
  // const needed_funding = document.querySelector('#post-funding').value.trim();
  //   const post_content = document.querySelector('#post-desc').value.trim()

  if (comment_text) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment_text }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.ok) {
      document.location.reload()
    } else {
      alert('Failed to create post')
    }
  }
}

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id')

//     const response = await fetch(`/api/posts/${id}`, {
//       method: 'DELETE',
//     })

//     if (response.ok) {
//       document.location.replace('/profile')
//     } else {
//       alert('Failed to delete post')
//     }
//   }
// }

document.querySelector('.btn-comment').addEventListener('click', newFormHandler)
