let input = document.querySelector('input')
console.log(input);

let getCharacter = (ch)=>{
    if(input.value != 0)
        input.value += ch
    else
        input.value = ch
    console.log(ch);
}

let clearInput = ()=>{
    input.value=''
}

let calculate = ()=>{
    let data = input.value
    console.log(data);
    input.value = eval(data)
       
}

let removeLastChar = ()=>{
    let data = input.value
    input.value = data.slice(0,-1)

}