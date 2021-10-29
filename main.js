function bem_vindo(){
    alert(`Bem vindo, Aproveite a aplicação, voce pode altera a cor para seu agrado ,para não machuca Seus olhos.
der Valor as pequenas coisas da vida🙂`)
}
function detecta(){
   let ip = document.querySelector('#txt').value
   
   console.log(ip)
   
   let result = document.querySelector("#resultado")
   
     
 
  axios.get(`http://ip-api.com/json/${ip}`)
  .then(function (response) {
    result.innerHTML = `
    ip: ${response.data.query}<br>
    status: ${response.data.status}<br>
    pais: ${response.data.country}<br>
    codigo do pais: ${response.data.countryCode}<br>
    região: ${response.data.region}<br>
    nome da região: ${response.data.regionName}<br>
    cidade: ${response.data.city}<br>
    codigo postal: ${response.data.zip}<br>
    lat: ${response.data.lat}<br>
    lon: ${response.data.lon}<br>
    fuso horario: ${response.data.timezone}<br>
    isp: ${response.data.isp}<br>
    org: ${response.data.org}<br>
    as: ${response.data.as}<br>

`
  });
  
}


function fundo(){

    let cores = ['green', 'red', 'magenta', 'purple', 'blue', 'yellow', 'black', 'orange','#decb52','#bda639','#8c7d4a','#5a4d31','#6b6963','#de7131','#94e339','#84e7a5','#42aaa5','#527db5','#5a6573','#945dd6','#5a5163','#e70cff','#846d84','#ad2873','#7b717b','#ad2c73','#ad8ea5','#5af708'];

    const numero = Math.floor((Math.random() * cores.length) + 1);

    document.bgColor = cores[numero];
}
