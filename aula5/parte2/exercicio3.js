const pedidos = [
    { id: 1, prato: "x-bacon", status: "entregue" },
    { id: 2, prato: "sundae", status: "em preparo" },
    { id: 3, prato: "fritas média", status: "a caminho" },
    { id: 4, prato: "nuggets", status: "entregue" },
    { id: 5, prato: "x-tudo", status: "a caminho" },
  ];

pedidos.forEach(element => {

    if (element.status == "em preparo") {
        console.log(`O pedido ${element.id}: "${element.prato}" está sendo preparado! Aguarde`);
        
    } else if (element.status == "a caminho") {
        console.log(`O pedido ${element.id}: "${element.prato}" está a caminho, fique atento!`);

    } else if (element.status == "entregue") {
        console.log(`O pedido ${element.id}: "${element.prato}" foi entregue! Obrigado`);
    
    }     
    
});