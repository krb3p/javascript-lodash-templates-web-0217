function postComment() {
  var commenter = document.getElementById('commenter').value
  var comment = document.getElementById('commentText'). value

  var commentTemplate = '<div class="comment"><p><%= comment %></p>
    <p>Posted By: <span class="commenter>"<%= commenter %></span></p>
    </div>'

  var templateFn = _.template(commentTemplate)

  var commentsDiv = document.getElementById('comments')

  var templateHTML = templateFn( { 'comment': comment, 'commenter': commender })

  commentsDiv.innerHTML += templateHTML
}
