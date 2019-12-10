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
  // var numPlayers
  // var partyLevel
  // var setting
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
        var homePath = getHomePathFromURL() + '/';
        window.location.href = homePath;
      }
    });
    postRequest.send(requestBody);
  }
}

//Event Listeners for functions

window.addEventListener('DOMContentLoaded', function() {
  var createPostButton = document.getElementById('filter-update-button');
  if(createPostButton){
    createPostButton.addEventListener('click', addPost);
  }

})
