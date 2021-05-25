const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

let items = [];

function handleSubmit(e) {
    e.preventDefault();
    const name = e.currentTarget.item.value;
    if (!name) return;
    const item = {
        name,
        id: Date.now(),
        complete: false,
    };
    // push items into state
    items.push(item)
    console.log(`there are now ${items.length} items in state`);
    // clear the form
    e.target.reset();
    // fire off custom event that items have been updated
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
    const html = items
        .map(
            item => `<li class="shopping-item">
            <input 
                value="${item.id}" 
                type="checkbox"
                ${item.complete ? 'checked' : ''}
                />
            <span class="itemName">${item.name}</span>
            <button aria-label="Remove ${item.name}" value="${item.id}">&times;</button>
            </li>`)
        .join('');
    list.innerHTML = html;
}

function mirrorToLocalStorage() {
    localStorage.setItem('items', JSON.stringify(items))
}

function restoreFromLocalStorage() {
    const savedItems = JSON.parse(localStorage.getItem('items'));
    if (savedItems && savedItems.length) {
        items.push(...savedItems);
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
    }
}

function deleteItem(id) {
    items = items.filter(item => item.id !== id);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
    items = items.map(item => {
        if (item.id === id) {
            item.complete = !item.complete;
        }
        return item;
    })

    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
list.addEventListener('click', function(e) {
    const id = parseInt(e.target.value)
    if (e.target.matches('button')) {
        deleteItem(id);
    }
    if (e.target.matches('input[type="checkbox"]')) {
        markAsComplete(id);
    }
});

restoreFromLocalStorage();