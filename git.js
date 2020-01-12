var input = document.getElementById('input');
var profile = document.getElementById('profile');
var names = document.getElementById('name');
var bio = document.getElementById('bio');
function gitsearch(username)
{
  console.log(username);
  fetch(`https://api.github.com/users/${username}`)
  .then((Response) => {
    if(Response.status==200)
    {
      return Response.json();
    }
    else
    {
      throw error;
    }
  })
  .then((gituser) => {
    console.log(gituser);
    profile.style.background = `url(${gituser.avatar_url})`;
    profile.style.backgroundSize = "cover";
    names.innerHTML = gituser.name;
    bio.innerHTML = gituser.bio;
  })
  .catch(error => {
    profile.style.background = "";
    names.innerHTML = "";
    bio.innerHTML = "ERROR";
 })
}
function searchfetch(){
    gitsearch(input.value);
    console.log(input.value);
    input.value = "";
}
