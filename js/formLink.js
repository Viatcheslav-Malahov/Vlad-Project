document.querySelector('.form__link').addEventListener('click',(event)=>{
    event.preventDefault()
    let emailInp = document.querySelector('.email__inp')
    if( emailInp.value == ''){
        alert ('Enter email first plz')
        return false
    }
     else {

        document.getElementById('form__email').submit()
    //     let xhr = new XMLHttpRequest();
    //     let oData = new FormData()
    //     oData.append('UserEmail' , emailInp.value)
    //     xhr.open('POST','http://95.213.249.252/vlad_form_parser',false)
    //     xhr.send(oData)
    }
})