let formInfo = {}
let Activities = []
let memeberBecause = []
let inputTextValues = document.querySelectorAll('.mainFormText')
let inputCheckValuesActivities = document.querySelectorAll('.mainFormCheckActivities')
let inputCheckValuesMember = document.querySelectorAll('.mainFormCheckMember')
let Agreemnet = document.querySelector('#agreementCheck')
let inputTextArea = document.querySelector('.mainFormTextArea')
let notifications = document.querySelector('#notificationCheck')


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


    inputCheckValuesMember.forEach(element => {
        if (element.checked === true){
            memeberBecause.push(element.name)   
        }           
    })

    inputCheckValuesActivities.forEach(element => {
        if (element.checked === true){
            Activities.push(element.name)   
        }           
    })



    formInfo['Activities'] = Activities 
    formInfo['memberBecause'] = memeberBecause
    formInfo['otherReasonMembership'] = inputTextArea.value
    formInfo['notifications'] = notifications.checked

    function isNotEmpty(a) {
        return a.value != '';
    }
    

    let xhr = new XMLHttpRequest();
    let oData = new FormData()
    oData.append('form', JSON.stringify(formInfo))
    xhr.open('POST', 'http://95.213.249.252/db', false)
    xhr.send(oData)
    //http://95.213.249.252/db
    //http://127.0.0.1:5501/

    // xhr.addEventListener('loadend' , transferComplete ,false);
    // function transferComplete(evt){
    //     document.location.href = './index.html'
    // }

    document.location.href = './index.html'

})

