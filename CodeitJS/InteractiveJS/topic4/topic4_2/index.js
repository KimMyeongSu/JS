    fetch('데이터주소')
    .then((response)=> response.text())
    .then((result) => {
        const divApp = document.querySelector('#app')
        divApp.innerHTML = result;
    })



    const newMember = {
        name: 'jerry',
        email: 'jerry@codeitmall.kr',
        department: 'engineering',
    };


    fetch('데이터주소',{
        method: 'POST',
        body: JSON.stringify(newMember),
    })
    .then((response)=> response.text())
    .then((reslut)=> {
        const divApp = document.querySelector('#app')
        divApp.innerHTML = result;
    })
