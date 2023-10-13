// Função genérica para criar input
function criarInput(id, name) {
    const elementoInput = document.createElement('input');
    elementoInput.setAttribute('type', 'text');
    elementoInput.setAttribute('name', name);
    elementoInput.setAttribute('id', id);
    elementoInput.setAttribute('autocomplete', 'off');
    return elementoInput;
}


// Função para adicionar input de objetivo
function objetivo() {
    const box2 = document.getElementById('box2');
    box2.appendChild(criarInput('txtobj', 'txtobj'));
}

// Função para editar um valor do input
function editarValor() {
    var input = document.getElementById('txtobj');
    var novoValor = prompt("Digite o novo valor:", input.value);
    if (novoValor !== null) {
        input.value = novoValor;
    }
}

// Função para remover um valor do input
function removerValor() {
    var input = Document.getElementById('txtobj');
    input.removeChild('txtobj', 'txtobj');
}

// Função para adicionar input de formação
function formacao() {
    const box3 = document.getElementById('box3');
    box3.appendChild(criarInput('txtformacao', 'txtformacao'));
}

// Função para adicionar input de curso
function curso() {
    const box4 = document.getElementById('box4');
    box4.appendChild(criarInput('txtcurso', 'txtcurso'));
}

// Função para adicionar input de experiência
function experiencia() {
    const box5 = document.getElementById('box5');
    box5.appendChild(criarInput('txtexperiencia', 'txtexperiencia'));
}

// Função para exibir o currículo
document.getElementById("submitBtn").addEventListener("click", function () {
    const campos = [
        'txtnome', 'txtnaturalidade', 'txtestadoCivil', 'txtidade',
        'txtemail', 'txtcontato', 'txtendereco', 'txtestado', 'txtpais',
        'txtobj', 'txtformacao', 'txtcurso', 'txtexperiencia'
    ];

    let output = "";
    campos.forEach(function (campo) {
        const valor = document.getElementById(campo).value;
        output += `<p><strong>${campo.charAt(3).toUpperCase() + campo.slice(4)}: </strong><br> ${valor}</p>`;
    });

    const curriculumOutput = document.getElementById("curriculumOutput");
    curriculumOutput.innerHTML = output;
    curriculumOutput.style.textAlign = 'center';
});

// Função para limpar os campos
function limpar() {
    const campos = [
        'txtnome', 'txtnaturalidade', 'txtestadoCivil', 'txtidade',
        'txtemail', 'txtcontato', 'txtendereco', 'txtestado', 'txtpais',
        'txtobj', 'txtformacao', 'txtcurso', 'txtexperiencia'
    ];

    campos.forEach(function (campo) {
        document.getElementById(campo).value = "";
    });
}



// var btn_adiconarObj = document.getElementById('adicionarObjetivo');
// var form3 = document.getElementById('form3');
// var box2 = document.getElementById('box2');
// function objetivo(creatInput){
//     var elementoObj = document.createElement('input')
//     elementoObj.setAttribute('Type', 'text');
//     elementoObj.setAttribute('name', 'txtobj');
//     elementoObj.setAttribute('id', 'txtobj');
//     elementoObj.setAttribute('autocomplete', 'off');
//     box2.appendChild(elementoObj);
//     return creatInput();
// }

// var btn_adiconarformacao = document.getElementById('adicionarformacao')
// var form4 = document.getElementById('form4');
// var box3 = document.getElementById('box3');
// function formacao(creatInput){
//     var elementoFormacao = document.createElement('input');
//     elementoFormacao.setAttribute('Type', 'li');
//     elementoFormacao.setAttribute('Type', 'text');
//     elementoFormacao.setAttribute('name', 'txtformacao');
//     elementoFormacao.setAttribute('id', 'txtformacao');
//     elementoFormacao.setAttribute('autocomplete', 'off');
//     box3.appendChild(elementoFormacao);
//     return creatInput();
// }

// var btn_adiconarCurso = document.getElementById('adicionarCursos');
// var form5 = document.getElementById('form5');
// var box4 = document.getElementById('box4');
// function curso(creatInput){
//     var elementoCurso = document.createElement('input');
//     elementoCurso.setAttribute('Type', 'text');
//     elementoCurso.setAttribute('name', 'txtcurso');
//     elementoCurso.setAttribute('id', 'txtcurso');
//     elementoCurso.setAttribute('autocomplete', 'off');
//     box4.appendChild(elementoCurso);
//     return creatInput();
// }

// var btn_adiconaExperiencia = document.getElementById('adicionarExperiencia');
// var form6 = document.getElementById('form6');
// var box5 = document.getElementById('box5');
// function experiencia(creatInput){
//     var elementoExperiencia = document.createElement('input');
//     elementoExperiencia.setAttribute('Type', 'text');
//     elementoExperiencia.setAttribute('name', 'txtexperiencia');
//     elementoExperiencia.setAttribute('id', 'txtexperiencia');
//     elementoExperiencia.setAttribute('autocomplete', 'off');
//     box5.appendChild(elementoExperiencia);
//     return creatInput();
// }

// document.getElementById("submitBtn").addEventListener("click", function () {
//     const inputNome = document.getElementById('txtnome').value;
//     const h1 = document.getElementsByTagName('h3');
//     const inputNaturalidade = document.getElementById('txtnaturalidade').value;
//     const inputEstadoCivil = document.getElementById('txtestadoCivil').value;
//     const inputIdade = document.getElementById('txtidade').value;
//     const inputEmail = document.getElementById('txtemail').value;
//     const inputContato = document.getElementById('txtcontato').value;
//     const inputEndereco = document.getElementById('txtendereco').value;
//     const inputEstado = document.getElementById('txtestado').value;
//     const inputPais = document.getElementById('txtpais').value;
//     const inputObjetivo = document.getElementById('txtobj').value;
//     const inputFormacao = document.getElementById('txtformacao').value;
//     const inputCurso = document.getElementById('txtcurso').value;
//     const inputExperiencia = document.getElementById('txtexperiencia').value;

//     const output = `
//         <p><strong>Nome:</strong> ${inputNome}</p>
//         <p><strong>Naturalidade:</strong> ${inputNaturalidade}</p>
//         <p><strong>EstadoCivil:</strong> ${inputEstadoCivil}</p>
//         <p><strong>Idade:</strong> ${inputIdade}</p>
//         <p><strong>Email:</strong> ${inputEmail}</p>
//         <p><strong>Contado:</strong> ${inputContato}</p>
//         <p><strong>Endereço:</strong> ${inputEndereco}</p>
//         <p><strong>Estado:</strong> ${inputEstado}</p>
//         <p><strong>Pais:</strong> ${inputPais}</p>
//         <p><strong>Objetivo:</strong> ${inputObjetivo}</p>
//         <p><strong>Formacao:</strong> ${inputFormacao}</p>
//         <p><strong>Curso:</strong> ${inputCurso}</p>
//         <p><strong>Experiencia:</strong> ${inputExperiencia}</p>
//     `;

//     document.getElementById("curriculumOutput").innerHTML = output;
//     document.getElementById("curriculumOutput").style.textAlign = 'center';
    
// });





// function limpar(){
//     var inputNome = document.getElementById('txtnome');
//     var inputNaturalidade = document.getElementById('txtnaturalidade')
//     var inputEstadoCivil = document.getElementById('txtestadoCivil')
//     var inputIdade = document.getElementById('txtidade')
//     var inputEmail = document.getElementById('txtemail')
//     var inputContato = document.getElementById('txtcontato')
//     var inputEndereco = document.getElementById('txtendereco')
//     var inputEstado = document.getElementById('txtestado')
//     var inputPais = document.getElementById('txtpais')
//     var inputObjetivo = document.getElementById('txtobj')
//     var inputFormacao = document.getElementById('txtformacao')
//     var inputCurso = document.getElementById('txtcurso')
//     var inputExperiencia = document.getElementById('txtexperiencia')
//     inputNome.value = "";
//     inputNaturalidade.value = "";
//     inputEstadoCivil.value = "";
//     inputIdade.value = "";
//     inputEmail.value = "";
//     inputContato.value = "";
//     inputEndereco.value = "";
//     inputEstado.value = "";
//     inputPais.value = "";
//     inputObjetivo.value = "";
//     inputFormacao.value = "";
//     inputCurso.value = "";
//     inputExperiencia.value = "";
// }
