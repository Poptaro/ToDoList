

document.addEventListener('DOMContentLoaded', () => {
    const btnAdd =  document.querySelector(".btnAdd");
    const listed = document.querySelector(".mainList");
    const inputField = document.querySelector(".inputField");
    const btnDel = document.querySelector('.deleto');



    btnAdd.addEventListener('click', () => {
        if(inputField.value.trim() === ''){
            alert("You need to put SOMETHING IN THE TEXT BOX!!!!");
        } else {
                const itemId = Date.now();
            listed.insertAdjacentHTML(
                'beforeend',
                `<li id="${itemId}">${inputField.value}</li>`
            );
        }

        inputField.value = '';
    });


    console.log(btnDel);
    btnDel.addEventListener('click', () => {
        if(listed.getElementsByTagName('li').length == 0){
            alert("There is nothing to delete!");
        } else {
            const lasty = document.querySelector('li:last-child');
            lasty.remove();
        }
    })
});