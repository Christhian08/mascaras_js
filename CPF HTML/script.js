const input= document.querySelector ("#cpf")

input.addEventListener("keypress",() =>

{

let inputlenght = input.value.length
if (inputlenght==3 || inputlenght==7){

input.value+="."

}

    else if (inputlenght==11)
   
    {
        input.value+= "-"
    }


}
)



