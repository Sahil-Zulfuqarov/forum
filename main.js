const form = document.querySelector('form')
form.addEventListener('submit',function(event){
    event.preventDefault()
    const fullName = document.querySelector('#full-name').value;
        const documentNumber = document.querySelector('#document-number').value;
        const gender = document.querySelector('#gender').value;
        const age = document.querySelector('#age').value;
        const email = document.querySelector('#email').value;
        const phoneNumber = document.querySelector('#phone-number').value;
        const symptomsDescription = document.querySelector('#symptoms-description').value;
        const isRepeatVisit = document.querySelector('#repeat-visit').checked;
            
        console.log('Tam Ad: ' + fullName);
        console.log('Vesiqə nömrəsi: ' + documentNumber);
        console.log('Cinsi: ' + gender);
        console.log('Yaşı: ' + age);
        console.log('E-poçt: ' + email);
        console.log('Telefon nömrəsi: ' + phoneNumber);
        console.log('Simptomların təsviri: ' + symptomsDescription);
        console.log('Təkrar qəbul: ' + (isRepeatVisit ? 'Bəli' : 'Xeyr'));
});