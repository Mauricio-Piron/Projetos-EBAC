<script setup>
import { reactive } from 'vue';

const estado = reactive ({
  num1: '0',
  num2: '0' ,
  resultado: '0',
  calculoPossivel: true,
  operacao: 'soma'
});

const alteraOperacao = (evento) => {
  estado.operacao = evento.target.value.toString();
  calculaResultado();
}


const calculaResultado = () => {
  const { num1, operacao, num2 } = estado;
  estado.calculoPossivel = true;
  if (operacao === "soma") {
    estado.resultado = Number(num1) + Number(num2);
  } else if (operacao === "subtracao") {
    estado.resultado = Number(num1) - Number(num2);
  } else if (operacao === "multiplicacao") {
    estado.resultado = Number(num1) * Number(num2);
  } else {
    if (num2 != 0) {
      estado.resultado = Number(num1) / Number(num2);
    } else {
      estado.calculoPossivel = false;
    }
  }
}

</script>

<template>
  <div class="container d-flex justify-content-center">
    <header class="bg-light rounded-3">
    <h1 class="mb-20">Calcula Fácil</h1> <br>
    <p>Insira abaixo o valor que deseja calcular</p>
  </header>
</div>
<div>
    <input type="number" placeholder="Informe o primeiro valor" id="num1" class="n1" @keyup="evento => estado.num1 = evento.target.value" @change="calculaResultado"
            :value="estado.num1" > <br>
    <select class="operacao" id="operation" :value="estado.operacao" @change="alteraOperacao">
        <option value="soma">+</option> 
        <option value="subtracao">-</option> 
        <option value="multiplicacao">*</option>
        <option value="divisao">/</option>
    </select> <br>
    <input type="number" placeholder="Informe o segundo valor" id="num" class="n2" @keyup="evento => estado.num2 = evento.target.value" @change="calculaResultado"
            :value="estado.num2"> <br>
  </div>
    <div class="resultado"> 
    <h3>{{estado.resultado}}</h3>
  </div>
</template>

<style scoped>
.container {
  margin-top: 10em;
}
h1 {
  font-size: 50px;
  text-decoration: underline;
  color: brown;
}
p {
  font-size: 25px;
}
.n1, .n2 {
  width: 50%;
  text-align: center;
  margin-inline: 25%;
  font-size: 15pt;
}
.operacao , .resultado{
  
  text-align-last: center;
  margin-inline: 40%;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 20%;
  font-size: 15pt;
}  


</style>
