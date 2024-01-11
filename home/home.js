

document.addEventListener('DOMContentLoaded', () => {
    const btnAdd =  document.querySelector(".btnAdd");
    const listed = document.querySelector(".mainList");
    const inputField = document.querySelector(".inputField");
    const btnDel = document.querySelector('.deleto');
    let listDel = document.querySelector('.liDel')



    btnAdd.addEventListener('click', () => {
        if(inputField.value.trim() === ''){
            alert("You need to put SOMETHING IN THE TEXT BOX!!!!");
        } else {
            const itemId = Date.now();
            listed.insertAdjacentHTML(
                'beforeend',
                `<li id="${itemId}">${inputField.value}<button class="strike">-</button><button class="liDel">X</button></li>`
            );
        }
        inputField.value = '';
    });

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('liDel')) {
            const listItem = event.target.closest('li');
            listItem.remove();
        }
        if (event.target.classList.contains('strike')) {
            const listItem = event.target.closest('li');
            if(listItem.style.textDecoration == "line-through"){
                listItem.style.textDecoration = "";
            } else {
                listItem.style.textDecoration = "line-through";
            }

        }
    });

    // btnDel.addEventListener('click', () => {
    //     if(listed.getElementsByTagName('li').length == 0){
    //         alert("There is nothing to delete!");
    //     } else {
    //         const lasty = document.querySelector('li:last-child');
    //         lasty.remove();
    //     }
    // })
});