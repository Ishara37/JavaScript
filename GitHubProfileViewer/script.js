 async function getProfile(){
    const username=document.getElementById("username").value.trim();
    const profileDiv=document.getElementById("profile");
    if(username===""){
        profileDiv.innerHTML="❌ Please ennter a username";
        return;
    }
    profileDiv.innerHTML="🔃Loading...";

    try{
        const response = await fetch(`https://api.github.com/users/${username}`);
        if(!response.ok){
            throw new Error("User not Found");

        }
        const data = await response.json();
        
        profileDiv.innerHTML = `
  <img src="${data.avatar_url}" alt="${data.login}" width="100" />
  <h2>${data.name || "No name provided"}</h2>
  <p><strong>@${data.login}</strong></p>
  <p>📦 Public Repos: ${data.public_repos}</p>
  <p>👥 Followers: ${data.followers}</p>
  <p>🌍 Location: ${data.location || "Not specified"}</p>
  <a href="${data.html_url}" target="_blank">🔗 View Profile</a>
`;}
        catch(error){
            profileDiv.innerHTML=`❌Error:${error.message}`;
        }
    }