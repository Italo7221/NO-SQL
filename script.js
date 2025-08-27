// Comunicação com o Banco de Dados - No-SQL(JSON)

fetch('dados.json').then(resposta => resposta.json() ).then(banco =>{
    console.log(banco)
    //FRONT-END
    document.getElementById('imagem').innerHTML = banco[3].imagemProdutos.imagem2

    document.getElementById('vendedor').innerHTML = banco[1].vendedor.vend456

    document.getElementById('preco').innerHTML =  banco[2].preco.preco789

    document.getElementById('produto').innerHTML = banco[0].produtos.prod123

    document.getElementById('cliente').innerHTML = banco[4].cliente.clin1


    document.getElementById('imagem2').innerHTML = banco[3].imagemProdutos.imagem3

    document.getElementById('vendedor2').innerHTML = banco[1].vendedor.vend457

    document.getElementById('preco2').innerHTML =  banco[2].preco.preco1

    document.getElementById('produto2').innerHTML = banco[0].produtos.prod124

    document.getElementById('cliente2').innerHTML = banco[4].cliente.clin2


    document.getElementById('imagem3').innerHTML = banco[3].imagemProdutos.imagem4

    document.getElementById('vendedor3').innerHTML = banco[1].vendedor.vend458

    document.getElementById('preco3').innerHTML =  banco[2].preco.preco2

    document.getElementById('produto3').innerHTML = banco[0].produtos.prod125

    document.getElementById('cliente3').innerHTML = banco[4].cliente.clin3
})