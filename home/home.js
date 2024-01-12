

document.addEventListener('DOMContentLoaded', () => {

    const btnAdd =  document.querySelector(".btnAdd");
    const listed = document.querySelector('.mainList');
    const inputField = document.querySelector(".inputField");
    let counter = 1;


    btnAdd.addEventListener('click', () => {
        const itemId = Date.now();
        if(inputField.value.trim() === ''){
        } else {
            if (inputField.value.length > 100){
                alert("too many characters. Please have less than 100.");
            } else {
                if (counter >= 10) {
                    alert("There can only be 10 things listed at once.");
                } else {
                    listed.insertAdjacentHTML(
                        'beforeend',
                        `<li id="${itemId}"><p class="listContainer" contenteditable="plaintext-only">${inputField.value}</p><button class="strike">-</button><button class="liDel">X</button></li>`
                    );
                    counter++;
                }
            }
        }
        inputField.value ="";
    });

    //listItem grabs the dynamic id from Date.now()!!!!!!!!!!
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('liDel')) {
            const listItem = event.target.closest('li');
            listItem.remove();
            counter--;
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
});