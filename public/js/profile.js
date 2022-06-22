const newFormHandler = async (event) => {
  event.preventDefault()

  const title = document.querySelector('#post-name').value.trim()
  // const needed_funding = document.querySelector('#post-funding').value.trim();
  const post_content = document.querySelector('#post-desc').value.trim()

  if (title && post_content) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, post_content }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.ok) {
      document.location.replace('/profile')
    } else {
      alert('Failed to create post')
    }
  }
}

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id')

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    })

    if (response.ok) {
      document.location.replace('/profile')
    } else {
      alert('Failed to delete post')
    }
  }
}

// const updatePost = async (event) => {
//   event.preventDefault()

//   const titleEl = document.getElementById('title-text')
//   const contentEl = document.getElementById('content-text')
//   const title = titleEl.value
//   const content = contentEl.value
//   const id = post.getAttribute('data-postId')

//   const response = await fetch(`/dashboard/singlepost/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify({ title, content }),
//     headers: { 'Content-Type': 'application/json' },
//   })

//   if (response.ok) {
//     document.location.replace('/dashboard')
//   } else {
//     alert('Failed to update the post!')
//   }
// }

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler)

document.querySelector('.post-list').addEventListener('click', delButtonHandler)
// updateForm.addEventListener('submit', updatePost)
