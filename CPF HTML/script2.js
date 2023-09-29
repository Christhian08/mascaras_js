const inputcnpj = document.querySelector ("#cnpj")

inputcnpj.addEventListener("keypress" , () =>

{

let inputcnpjlength = inputcnpj.value.length
if (inputcnpjlength==2 || inputcnpjlength==6)

{

inputcnpj.value+="."


}

if (inputcnpjlength==10)

{

inputcnpj.value+="/"

}

if (inputcnpjlength==15)

{
inputcnpj.value+="-"
}


}
)