document.querySelector('.form__link').addEventListener('click',(event)=>{
    event.preventDefault()
    let emailInp = document.querySelector('.email__inp')
    if( emailInp.value == ''){
        alert ('Enter email first plz')
        return false
    }
     else {
        document.getElementById('form__email').submit()
    }
})