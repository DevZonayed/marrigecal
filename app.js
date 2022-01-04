const done = document.querySelector('#send');
const resultover = document.querySelector('.resultoverlay');
const closepop = document.querySelector('#result span');
const output = document.querySelector('#output');
const namee = document.querySelector('#nam');

done.onclick = () =>{

    if((marageability() == 'yes')){
        (gender.value != 'other')
        ? output.innerHTML = `Hello ${namee.value}, you are elegible for merrage`
        : output.innerHTML = `Hello ${namee.value}, you are elegible for merrage but you should't`
    }else{
        output.innerHTML = `Hello ${namee.value}, you are not elegible for merrage`
        
    }

    resultover.style.cssText = `
        opacity : 1;
        visibility : visible;
    `


}

closepop.onclick = () => {
    resultover.style.cssText = `
        opacity : 0;
        visibility : hidden;
    `
}