document.addEventListener('DOMContentLoaded', function(){
    const endpoint = `https://api.github.com/users/Mauricio-Piron`
    
    fetch(endpoint).then(function(resposta){
        return resposta.json()
    })
    .then(function(json){
        const avatar = json.avatar_url
        $('#avatar').attr("src", avatar);
        
        
        const nome = json.login
        $('#name').html(`@${nome}`)

        const repositorio = json.public_repos
        $('#repositories').html(`${repositorio}`)

        const seguidores = json.followers
        $('#followers').html(seguidores)

        const seguindo = json.following
        $('#following').html(seguindo)

        const link = json.html_url
        console.log(link)
        $('#link').attr("href", link)
    })
})