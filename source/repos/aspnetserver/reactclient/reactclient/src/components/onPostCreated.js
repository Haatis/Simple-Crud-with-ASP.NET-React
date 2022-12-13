import React from 'react'

function onPostCreated(createdPost) {
  if(createdPost == null) {
    return;
  }
  alert("post successfully created '${createdPost.title}' will be added to the table");

}

export default onPostCreated