const token = "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";

document.addEventListener("DOMContentLoaded", async function () {
  const getUser = async function () {
    const result = await fetch("https://api.github.com/user", {
      method: "GET",
      headers: {
        Authorization: `token ${token}`,
      },
    });
  const data = await result.json()
  return data
  };


 const data =  await getUser()

 console.log(data)
 var img =  document.getElementById("avatar")

 console.log(img)
 img.src=data.avatar_url


 const para = document.createElement("p");
 para.innerText = data.login
 document.body.appendChild(para);


 for( var key in data ) {
    const para = document.createElement("p");
    para.innerText = data[key]
    document.body.appendChild(para);
   
 }

});
