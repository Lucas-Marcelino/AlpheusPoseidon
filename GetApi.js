function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function main(){
    let data = fazGet("URL AQUI")
    let jason = JSON.parse(data);

}