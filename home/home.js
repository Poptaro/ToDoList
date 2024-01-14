

document.addEventListener('DOMContentLoaded', () => {

    const btnAdd =  document.querySelector(".btnAdd");
    const listed = document.querySelector('.mainList');
    const inputField = document.querySelector(".inputField");
    let counted = document.querySelector(".amount");
    let counter = 10;



    btnAdd.addEventListener('click', () => {
        const itemId = Date.now();
        if(inputField.value.trim() === ''){
        } else {
            if (counter <= 0) {
                alert("There can only be 10 things listed at once.");
            } else {
                listed.insertAdjacentHTML(
                    'beforeend',
                    `<li id="${itemId}"><p class="listContainer" contenteditable="plaintext-only">${inputField.value}</p><button class="strike">Strikethrough</button><button class="liDel">Remove</button></li>`
                );
                counter--;
                counted.textContent = `You can add ${Math.abs(counter)} more items`;
            }
        inputField.value ="";
        }
    });

    //listItem grabs the dynamic id from Date.now()!!!!!!!!!!
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('liDel')) {
            const listItem = event.target.closest('li');
            listItem.remove();
            counter++;
            counted.textContent = `You can add ${Math.abs(counter)} more items to the list`;
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