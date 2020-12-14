let formInfo = {}

let inputTextValues = document.querySelectorAll('.mainFormText')
let inputCheckValues = document.querySelectorAll('.mainFormCheck')

let Agreemnet = document.querySelector('#agreementCheck')

document.querySelector('.sendFormBtn').addEventListener('click', (event) => {
    event.preventDefault()
    if (Agreemnet.checked === false) {
        alert('plz sign the agreement')
        return false
    }

    let y=0

    for (let x = 0; x < inputTextValues.length; x++) {
        if (isNotEmpty(inputTextValues[x]) === false) {
            y++
        }
    }

    if (y != 0) {
        alert('fill in the fields ')
        return false
    }
    else {
        inputTextValues.forEach(element => {
            formInfo[element.name] = element.value
        })    
    }



    inputCheckValues.forEach(element => {
        if (element.checked === true)
            formInfo[element.name] = element.value
    })


    function isNotEmpty(a) {
        return a.value != '';
    }
    // for (let x =0 ; x < inputValues.length ; x++){
    //     if( isNotEmpty(inputValues[x]) == false || Agreemnet.checked == false){
    //         y++
    //     }
    // }
    let xhr = new XMLHttpRequest();
    let oData = new FormData()
    oData.append('form', JSON.stringify(formInfo))
    xhr.open('POST', 'http://95.213.249.252/db', false)
    xhr.send(oData)

})

