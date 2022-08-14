let inputVal = document.getElementById('input-js').value;
let totalSum = 0
let allNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let ableToDot = true

function evaluate(fx){
    return new Function('return ' + fx)()
}

function addToInput(num){
    if(num == '0'){
        if(inputVal.length >= 1){
            inputVal += num
            document.getElementById('input-js').value = inputVal
        }
    }else if(num == '.'){
        if(inputVal.length == 0){
            inputVal += '0.'
            ableToDot = false
        }else if(inputVal[inputVal.length - 1] in allNums && ableToDot){
            inputVal += '.'
            ableToDot = false
        }
        document.getElementById('input-js').value = inputVal
    }else if(num == '%'){
        inputVal += '/100'
        document.getElementById('input-js').value = inputVal
        document.getElementById('sum-js').innerHTML = evaluate(inputVal)
    }else{
        inputVal += num
        document.getElementById('input-js').value = inputVal
    }
}

function toEnd(){
    let foo = document.getElementById('input-js')
    foo.focus()
}

function plusSign(){
    if(inputVal.length > 0){
        if(inputVal[inputVal.length - 1] in allNums){
            inputVal += '+'
            document.getElementById('input-js').value = inputVal
        }else{
            inputVal = inputVal.slice(0, -1) + '+'
            document.getElementById('input-js').value = inputVal
        }
    }
    ableToDot = true
}

function minusSign(){
    if(inputVal[inputVal.length - 1] in allNums){
        inputVal += '-'
        document.getElementById('input-js').value = inputVal
    }else{
        inputVal = inputVal.slice(0, -1) + '-'
        document.getElementById('input-js').value = inputVal
    }
    ableToDot = true
}

function divSign(){
    if(inputVal.length > 0){
        if(inputVal[inputVal.length - 1] in allNums){
            inputVal += '/'
            document.getElementById('input-js').value = inputVal
        }else{
            inputVal = inputVal.slice(0, -1) + '/'
            document.getElementById('input-js').value = inputVal
        }
    }
    ableToDot = true
}

function mulSign(){
    if(inputVal.length > 0){
        if(inputVal[inputVal.length - 1] in allNums){
            inputVal += '*'
            document.getElementById('input-js').value = inputVal
        }else{
            inputVal = inputVal.slice(0, -1) + '*'
            document.getElementById('input-js').value = inputVal
        }
    }
    ableToDot = true
}

function updateTotalSum(){
    if(evaluate(inputVal) || evaluate(inputVal) === 0){
        document.getElementById('sum-js').innerHTML = evaluate(inputVal)
    }
}

function delItem(){
    if(inputVal.length > 0){
        inputVal = inputVal.slice(0, -1)
        document.getElementById('input-js').value = inputVal
        if(inputVal[inputVal.length - 1] in allNums){
            document.getElementById('sum-js').innerHTML = evaluate(inputVal)
        }else{
            if(inputVal.length == 1 && inputVal[inputVal.length - 1] == '-'){
                document.getElementById('sum-js').innerHTML = 0
            }else if(inputVal.length > 0){
                document.getElementById('sum-js').innerHTML = evaluate(inputVal.slice(0, -1))
            }else{
                document.getElementById('sum-js').innerHTML = 0
            }
        }
    }
}

function clearAll(){
    inputVal = ''
    document.getElementById('sum-js').innerHTML = 0
    document.getElementById('input-js').value = inputVal
    ableToDot = true
}

function equalSum(){
    if(inputVal[inputVal.length - 1] in allNums){
        inputVal = '' + evaluate(inputVal)
    }else{
        if(inputVal.length > 0 && inputVal[inputVal.length - 1] != '-'){
            inputVal = '' + evaluate(inputVal.slice(0, -1))
        }
    }
    if(inputVal % 1 == 0){
        ableToDot = true
    }
    document.getElementById('input-js').value = inputVal
    document.getElementById('sum-js').innerHTML = 0
}


document.getElementById('one').addEventListener('click', function(){
    addToInput('1')
})

document.getElementById('two').addEventListener('click', function(){
    addToInput('2')
})

document.getElementById('three').addEventListener('click', function(){
    addToInput('3')
})

document.getElementById('four').addEventListener('click', function(){
    addToInput('4')
})

document.getElementById('five').addEventListener('click', function(){
    addToInput('5')
})

document.getElementById('six').addEventListener('click', function(){
    addToInput('6')
})

document.getElementById('seven').addEventListener('click', function(){
    addToInput('7')
})

document.getElementById('eight').addEventListener('click', function(){
    addToInput('8')
})

document.getElementById('nine').addEventListener('click', function(){
    addToInput('9')
})

document.getElementById('zero').addEventListener('click', function(){
    addToInput('0')
})

document.getElementById('dot').addEventListener('click', function(){
    addToInput('.')
})

document.getElementById('percent').addEventListener('click', function(){
    addToInput('%')
})

document.getElementById('del').addEventListener('click', delItem)
document.getElementById('c').addEventListener('click', clearAll)

document.getElementById('plus').addEventListener('click', plusSign)
document.getElementById('minus').addEventListener('click', minusSign)
document.getElementById('div').addEventListener('click', divSign)
document.getElementById('mul').addEventListener('click', mulSign)
document.getElementById('equal').addEventListener('click', equalSum)

document.getElementById('one').addEventListener('click', updateTotalSum)
document.getElementById('two').addEventListener('click', updateTotalSum)
document.getElementById('three').addEventListener('click', updateTotalSum)
document.getElementById('four').addEventListener('click', updateTotalSum)
document.getElementById('five').addEventListener('click', updateTotalSum)
document.getElementById('six').addEventListener('click', updateTotalSum)
document.getElementById('seven').addEventListener('click', updateTotalSum)
document.getElementById('eight').addEventListener('click', updateTotalSum)
document.getElementById('nine').addEventListener('click', updateTotalSum)
document.getElementById('zero').addEventListener('click', updateTotalSum)