function getHomePathFromURL() {
  var path = window.location.pathname;
  var pathParts = path.split('/');
  return pathParts[0];
}

function createTags () {
  var numPlayersDropdown = document.getElementById('filter-players');
  var tagNumPlayers = "Players: " + String(numPlayersDropdown.options[numPlayersDropdown.selectedIndex].text);
  var partyLevelDropdown = document.getElementById('filter-party-level');
  var tagPartyLevel = "Level: " + String(partyLevelDropdown.options[partyLevelDropdown.selectedIndex].text);
  var settingDropdown = document.getElementById('filter-campaign-setting');
  var tagSetting = "Setting: " + String(settingDropdown.options[settingDropdown.selectedIndex].text);
  var tags = [tagNumPlayers, tagPartyLevel, tagSetting];
  return tags;
}

function addPost () {
  var title = document.getElementById('post-title-input').value.trim();
  var imageURL = document.getElementById('post-photo-input').value.trim();
  var summary = document.getElementById('post-summary-input').value.trim();
  var description = document.getElementById('post-contents-input').value.trim();
  var tags = createTags();

  if (!title || !summary || !description || !imageURL){
    alert("You must fill in all of the fields!")
  } else {
    var postRequest = new XMLHttpRequest();
    var requestURL = '/newPost/sendPost';
    postRequest.open('POST', requestURL);

    var requestBody = JSON.stringify({
      title: title,
      summary: summary,
      imageURL: imageURL,
      description: description,
      tags: tags
    });

    console.log('requestBody:', requestBody);
    postRequest.setRequestHeader('Content-Type', 'application/json');

    postRequest.addEventListener('load', function (event) {
      if (event.target.status !== 200) {
        var responseBody = event.target.response;
        alert("Error saving post on server side: " + responseBody);
      } else {
        alert("New Campaign Successfully Created!");
        var homePath = getHomePathFromURL() + '/';
        window.location.href = homePath;
      }
    });
    postRequest.send(requestBody);
  }
}

function goToSinglePostPage (event) {
  console.log('click event: ', event);
  var clickedPost = event.target;
  var index = clickedPost.getElementsByClassName('array-index');
  //console.log('index[0].textContent:', index[0].textContent);
  var destinationURL = '/post' + index[0].textContent;
  window.location.href = destinationURL;
}

function addComment (event) {
  var comment = document.getElementById('new-comment-text').value;
  console.log('comment: ', comment);
  if (!comment || comment == "New Comment.."){
    alert("Please enter text into the comment box and try again.");
  } else {
    var postRequest = new XMLHttpRequest();
    var requestURL = window.location.pathname + '/addComment';
    postRequest.open('POST', requestURL);

    var requestBody = JSON.stringify({
      text: comment
  });

    console.log('requestBody:', requestBody);
    postRequest.setRequestHeader('Content-Type', 'application/json');

    postRequest.addEventListener('load', function (event) {
      if (event.target.status !== 200) {
        var responseBody = event.target.response;
        alert("Error saving comment on server side: " + responseBody);
      } else {
        //alert("New Campaign Comment Created!");
        var commentTemplate = Handlebars.templates.comment;
        var newCommentHTML = commentTemplate({
          text: comment,
          value: 0
        });
        var commentContainer = document.getElementById('comments-label');
        commentContainer.insertAdjacentHTML('afterend', newCommentHTML);
      }
    });
    postRequest.send(requestBody);
  }
}

function addOne (event) {
  var clickedButton = event.target;
  var post = clickedButton.parentElement.parentElement;
  var indexArray = post.getElementsByClassName('comment-index');
  var index = indexArray[0].textContent;
  //console.log('index: ', index);
  var postRequest = new XMLHttpRequest();
  var requestURL = window.location.pathname + '/upvote';
  postRequest.open('POST', requestURL);
  var requestBody = JSON.stringify({
    index: index
  });
  console.log('requestBody:', requestBody);
  postRequest.setRequestHeader('Content-Type', 'application/json');

  postRequest.addEventListener('load', function (event) {
    if (event.target.status !== 200) {
      var responseBody = event.target.response;
      alert("Error upvoting: " + responseBody);
    } else {
      //alert("New Campaign Comment Created!");
      var values = post.getElementsByClassName('post-value');
      var valueString = values[0];
      valueString = valueString.textContent.substr(7);
      var value = Number(valueString);
      console.log('valueString:', valueString);
      value++;
    }
  });
  postRequest.send(requestBody);
}

function subOne (event) {
  var clickedButton = event.target;
  var post = clickedButton.parentElement.parentElement;
  var indexArray = post.getElementsByClassName('comment-index');
  var index = indexArray[0].textContent;
  //console.log('index: ', index);
  var postRequest = new XMLHttpRequest();
  var requestURL = window.location.pathname + '/downvote';
  postRequest.open('POST', requestURL);
  var requestBody = JSON.stringify({
    index: index
  });
  console.log('requestBody:', requestBody);
  postRequest.setRequestHeader('Content-Type', 'application/json');

  postRequest.addEventListener('load', function (event) {
    if (event.target.status !== 200) {
      var responseBody = event.target.response;
      alert("Error downvoting: " + responseBody);
    } else {
      //alert("New Campaign Comment Created!");
      var values = post.getElementsByClassName('post-value');
      var valueString = values[0];
      valueString = valueString.textContent.substr(7);
      var value = Number(valueString);
      console.log('valueString:', valueString);
      value++;
    }
  });
  postRequest.send(requestBody);
}
//Event Listeners for functions

window.addEventListener('DOMContentLoaded', function() {
  var createPostButton = document.getElementById('filter-update-button');
  if(createPostButton){
    createPostButton.addEventListener('click', addPost);
  }

  var posts = document.getElementsByClassName('post');
  if(posts){
    for (var i = 0; i < posts.length; i++) {
      posts[i].addEventListener('click', goToSinglePostPage);
    }
  }

  var createCommentButton = document.getElementById('add-comment-button');
  if(createCommentButton){
    createCommentButton.addEventListener('click', addComment);
  }

  var upvoteButtons = document.getElementsByClassName('upvote');
  //console.log('upvoteButtons: ', upvoteButtons);
  if(upvoteButtons){
    for (var i = 0; i < upvoteButtons.length; i++) {
      upvoteButtons[i].addEventListener('click', addOne);
    }
  }

  var downvoteButtons = document.getElementsByClassName('downvote');
  //console.log('downvoteButtons: ', downvoteButtons);
  if(downvoteButtons){
    for (var i = 0; i < downvoteButtons.length; i++) {
      downvoteButtons[i].addEventListener('click', subOne);
    }
  }
})
