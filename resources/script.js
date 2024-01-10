// Dados dos distribuidores (exemplo simplificado)
var distribuidores = [
    //{ nome: "Master 2500 D", potenciaTrator: "Até 75 cv", tipoTransmissao: "Mecânica", desligaIndividual: "Não", tipoFluxo: "Não", capacidadeCarga: "1,6 m³", tipoBitola: "Não", faixaAplica: "Até 22 m"  },
    { link:"https://piccin.com.br/equipamento/49/master-d", img: "master_5500d", nome: "Master 5500 D", potenciaTrator: "Até 75 cv", tipoTransmissao: "Mecânica", desligaIndividual: "Não", tipoFluxo: "Não", capacidadeCarga: "2,8 m³", tipoBitola: "Não", faixaAplica: "Até 22 m" },
    { link:"https://piccin.com.br/equipamento/49/master-d", img: "master_7500d", nome: "Master 7500 D", potenciaTrator: "Até 75 cv", tipoTransmissao: "Mecânica", desligaIndividual: "Não", tipoFluxo: "Não", capacidadeCarga: "3,75 m³", tipoBitola: "Não", faixaAplica: "Até 22 m" },
    { link:"https://piccin.com.br/equipamento/49/master-d", img: "master_10000d", nome: "Master 10000 D", potenciaTrator: "Até 75 cv", tipoTransmissao: "Mecânica", desligaIndividual: "Não", tipoFluxo: "Não", capacidadeCarga: "5,3 m³", tipoBitola: "Não", faixaAplica: "Até 22 m" },
    //{ nome: "Master 2500 DHEI", potenciaTrator: "Até 75 cv", tipoTransmissao: "Hidráulica", desligaIndividual: "Sim", tipoFluxo: "Sim", capacidadeCarga: "1,6 m³", tipoBitola: "Não", faixaAplica: "Até 22 m" },
    { link:"https://piccin.com.br/equipamento/43/master-dh-ei-bi", img: "master_5500dhei", nome: "Master 5500 DHEI", potenciaTrator: "Até 75 cv", tipoTransmissao: "Hidráulica", desligaIndividual: "Sim", tipoFluxo: "Sim", capacidadeCarga: "2,8 m³", tipoBitola: "Não", faixaAplica: "Até 22 m" },
    { link:"https://piccin.com.br/equipamento/47/master-dh-s-dh-s-inox", img:"master_7500dhsbr", nome: "Master 7500 DH S BR", potenciaTrator: "Até 75 cv", tipoTransmissao: "Hidráulica", desligaIndividual: "Não", tipoFluxo: "Sim", capacidadeCarga: "3,75 m³", tipoBitola: "Não", faixaAplica: "Mais de 22 m" },
    { link:"https://piccin.com.br/equipamento/71/master-dh-bi-s-dh-bi-s-inox", img: "master_7500dh1br", nome: "Master 7500 DH1 BR", potenciaTrator: "Até 75 cv", tipoTransmissao: "Semi-hidráulica", desligaIndividual: "Não", tipoFluxo: "Sim", capacidadeCarga: "3,75 m³", tipoBitola: "Sim", faixaAplica: "Até 22 m" },
    { link:"https://piccin.com.br/equipamento/71/master-dh-bi-s-dh-bi-s-inox", img: "master_5500dh1", nome: "Master 5500 DH1", potenciaTrator: "Até 75 cv", tipoTransmissao: "Semi-hidráulica", desligaIndividual: "Não", tipoFluxo: "Sim", capacidadeCarga: "3,75 m³", tipoBitola: "Não", faixaAplica: "Até 22 m" },
    { link:"https://piccin.com.br/equipamento/71/master-dh-bi-s-dh-bi-s-inox", img: "master_7500dh1", nome: "Master 7500 DH1", potenciaTrator: "Até 75 cv", tipoTransmissao: "Semi-hidráulica", desligaIndividual: "Não", tipoFluxo: "Sim", capacidadeCarga: "3,75 m³", tipoBitola: "Não", faixaAplica: "Até 22 m" },
    { link:"https://piccin.com.br/equipamento/71/master-dh-bi-s-dh-bi-s-inox", img: "master_10000dh1", nome: "Master 10000 DH1", potenciaTrator: "Até 75 cv", tipoTransmissao: "Semi-hidráulica", desligaIndividual: "Não", tipoFluxo: "Sim", capacidadeCarga: "3,75 m³", tipoBitola: "Não", faixaAplica: "Até 22 m" },
    { link:"https://piccin.com.br/equipamento/47/master-dh-s-dh-s-inox", nome: "Master 12000 DH S BR", potenciaTrator: "Acima de 75 cv", tipoTransmissao: "Hidráulica", desligaIndividual: "Não", tipoFluxo: "Sim", capacidadeCarga: "7,3 m³", tipoBitola: "Sim", faixaAplica: "Mais de 22 m" },
    { link:"https://piccin.com.br/equipamento/47/master-dh-s-dh-s-inox", img: "master_12000dhs", nome: "Master 12000 DH S", potenciaTrator: "Acima de 75 cv", tipoTransmissao: "Hidráulica", desligaIndividual: "Não", tipoFluxo: "Sim", capacidadeCarga: "7,3 m³", tipoBitola: "Não", faixaAplica: "Mais de 22 m" },
    { link:"https://piccin.com.br/equipamento/47/master-dh-s-dh-s-inox", img: "master_10000dhs", nome: "Master 10000 DH S", potenciaTrator: "Acima de 75 cv", tipoTransmissao: "Hidráulica", desligaIndividual: "Não", tipoFluxo: "Sim", capacidadeCarga: "5,3 m³", tipoBitola: "Não", faixaAplica: "Mais de 22 m" },
    { link:"https://piccin.com.br/equipamento/71/master-dh-bi-s-dh-bi-s-inox", img: "master_12000dhs", nome: "Master 12000 DH1", potenciaTrator: "Acima de 75 cv", tipoTransmissao: "Semi-hidráulica", desligaIndividual: "Não", tipoFluxo: "Sim", capacidadeCarga: "7,3 m³", tipoBitola: "Sim", faixaAplica: "Até 22 m" }
    // Outros distribuidores...
];

function inicializarDropdowns() {
    // Preencher os dropdowns com valores únicos de cada categoria
    // Exemplo para 'potenciaTrator'
    var potencias = [...new Set(distribuidores.map(d => d.potenciaTrator))];
    var selectPotencia = document.getElementById('potenciaTrator');
    potencias.forEach(function(potencia) {
        var option = document.createElement('option');
        option.value = potencia;
        option.text = potencia;
        selectPotencia.appendChild(option);
    });

    var transmissoes = [...new Set(distribuidores.map(d => d.tipoTransmissao))];
    var selectTransmissao = document.getElementById('tipoTransmissao');
    transmissoes.forEach(function(transmissao) {
        var option = document.createElement('option');
        option.value = transmissao;
        option.text = transmissao;
        selectTransmissao.appendChild(option);
    });

    var esteiras = [...new Set(distribuidores.map(d => d.desligaIndividual))];
    var selectEsteira = document.getElementById('desligaIndividual');
    esteiras.forEach(function(esteira) {
        var option = document.createElement('option');
        option.value = esteira;
        option.text = esteira;
        selectEsteira.appendChild(option);
    });

    var fluxos = [...new Set(distribuidores.map(d => d.tipoFluxo))];
    var selectFluxo = document.getElementById('tipoFluxo');
    fluxos.forEach(function(fluxo) {
        var option = document.createElement('option');
        option.value = fluxo;
        option.text = fluxo;
        selectFluxo.appendChild(option);
    });

    var capacidades = [...new Set(distribuidores.map(d => d.capacidadeCarga))];
    var selectCapacidade = document.getElementById('capacidadeCarga');
    capacidades.forEach(function(capacidade) {
        var option = document.createElement('option');
        option.value = capacidade;
        option.text = capacidade;
        selectCapacidade.appendChild(option);
    });

    var bitolas = [...new Set(distribuidores.map(d => d.tipoBitola))];
    var selectBitola = document.getElementById('tipoBitola');
    bitolas.forEach(function(bitola) {
        var option = document.createElement('option');
        option.value = bitola;
        option.text = bitola;
        selectBitola.appendChild(option);
    });

    var faixas = [...new Set(distribuidores.map(d => d.faixaAplica))];
    var selectFaixa = document.getElementById('faixaAplica');
    faixas.forEach(function(faixa){
        var option = document.createElement('option');
        option.value = faixa;
        option.text = faixa;
        selectFaixa.appendChild(option);
    });

    // Repita para outros dropdowns
}

function recomendarDistribuidor() {
    // Lógica para recomendar um distribuidor com base nas escolhas do usuário
    // Exibir a recomendação na div 'recomendacao'
    var potenciaSelecionada = document.getElementById('potenciaTrator').value;
    var transmissaoSelecionada = document.getElementById('tipoTransmissao').value;
    var esteiraSelecionada = document.getElementById('desligaIndividual').value;
    var fluxoSelecionada = document.getElementById('tipoFluxo').value;
    var capacidadeSelecionada = document.getElementById('capacidadeCarga').value;
    var bitolaSelecionada = document.getElementById('tipoBitola').value;
    var faixaSelecionada = document.getElementById('faixaAplica').value;

    var maxMatches = 0;
    var distribuidorRecomendado = [];

    distribuidores.forEach(function(distribuidor) {
    var matches = 0;
    var diferencas = [];
    if (potenciaSelecionada === "" || distribuidor.potenciaTrator === potenciaSelecionada) {
    matches++;
    } else {
        diferencas.push("Potência do trator: " + distribuidor.potenciaTrator);
    }
    if (transmissaoSelecionada === "" || distribuidor.tipoTransmissao === transmissaoSelecionada) {
    matches++;
    } else {
        diferencas.push("Tipo de transmissão: " + distribuidor.tipoTransmissao);
    }
    if (esteiraSelecionada === "" || distribuidor.desligaIndividual === esteiraSelecionada) {
    matches++;
    } else {
        diferencas.push("Possui desligamento de seção: " + distribuidor.desligaIndividual);
    }
    if (fluxoSelecionada === "" || distribuidor.tipoFluxo === fluxoSelecionada) {
    matches++;
    } else {
        diferencas.push("Fluxo maior que 60 L/min? " + distribuidor.tipoFluxo );
    }
    if (capacidadeSelecionada === "" || distribuidor.capacidadeCarga === capacidadeSelecionada) {
    matches++;
    } else {
        diferencas.push("Capacidade de carga: " + distribuidor.capacidadeCarga);
    }
    if (bitolaSelecionada === "" || distribuidor.tipoBitola === bitolaSelecionada) {
    matches++;
    } else {
        diferencas.push("Bitola regulável? " + distribuidor.tipoBitola );
    }
    if (faixaSelecionada === "" || distribuidor.faixaAplica === faixaSelecionada) {
    matches++;
    } else {
        diferencas.push("Faixa de aplicação: " + distribuidor.faixaAplica );
    }

    if (matches > maxMatches) {
    maxMatches = matches;
    distribuidorRecomendado = [{ distribuidor: distribuidor, diferencas: diferencas }];;
    } else if (matches === maxMatches) {
        distribuidorRecomendado.push({ distribuidor: distribuidor, diferencas: diferencas });
    }
});

var divRecomendacao = document.getElementById('recomendacao');
divRecomendacao.innerHTML = '';

if (distribuidorRecomendado.length > 0) {
    var topTresDistribuidores = distribuidorRecomendado.slice(0, 3);

    topTresDistribuidores.forEach(function(distribuidor) {
        var dr = distribuidor.distribuidor; // Supondo que você está tomando o primeiro recomendado
        var diferencas = distribuidor.diferencas.join("<br>");
        divRecomendacao.innerHTML += `
            <div class= "recomendacao-card"> 
                <img src="img/${dr.img}.jpeg" alt="${dr.img}" class="recomendacao-imagem"><br>
                <div class="recomendacao-detalhes">
                    <p><strong>${dr.nome}</strong></p>
                    <p>${diferencas}</p>
                    <p><a href="${dr.link}"> Saiba mais </a></p>
                </div>
            </div>
        `;
    });
} else {
    divRecomendacao.innerHTML = "Nenhum distribuidor encontrado que atenda aos critérios selecionados.";
}
}

function resetRecomenda(){
    document.getElementById('potenciaTrator').selectedIndex = 0;
    document.getElementById('tipoTransmissao').selectedIndex = 0;
    document.getElementById('desligaIndividual').selectedIndex = 0;
    document.getElementById('tipoFluxo').selectedIndex = 0;
    document.getElementById('capacidadeCarga').selectedIndex = 0;
    document.getElementById('tipoBitola').selectedIndex = 0;
    document.getElementById('faixaAplica').selectedIndex = 0;

    var divRecomendacao = document.getElementById('recomendacao');
    if (divRecomendacao) {
        divRecomendacao.innerHTML = '';
    }
}

// Inicialização
window.onload = inicializarDropdowns;
document.getElementById('potenciaTrator').addEventListener('change', filterOptions);
document.getElementById('tipoTransmissao').addEventListener('change', filterOptions);
document.getElementById('desligaIndividual').addEventListener('change', filterOptions);
document.getElementById('tipoFluxo').addEventListener('change', filterOptions);
document.getElementById('capacidadeCarga').addEventListener('change', filterOptions);
document.getElementById('tipoBitola').addEventListener('change', filterOptions);
document.getElementById('faixaAplica').addEventListener('change', filterOptions);

document.getElementById('potenciaTrator').addEventListener('change', recomendarDistribuidor);
document.getElementById('tipoTransmissao').addEventListener('change', recomendarDistribuidor);
document.getElementById('desligaIndividual').addEventListener('change', recomendarDistribuidor);
document.getElementById('tipoFluxo').addEventListener('change', recomendarDistribuidor);
document.getElementById('capacidadeCarga').addEventListener('change', recomendarDistribuidor);
document.getElementById('tipoBitola').addEventListener('change', recomendarDistribuidor);
document.getElementById('faixaAplica').addEventListener('change', recomendarDistribuidor);
