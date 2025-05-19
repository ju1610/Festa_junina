 function verificaPalavra(){
    const palavra = document.getElementById("palavra").value.toLowerCase().trim() 
    const palavraCorreta = "correio elegante"

    if (palavra == palavraCorreta){
        window.location.href = "correto.html"
    } else {
        window.location.href = "erro.html"
    }


}