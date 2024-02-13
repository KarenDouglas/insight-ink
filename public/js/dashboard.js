
const $newEntriesContainer = document.querySelector('#newEntryContainer')


let dummyData = [
    {
        id: 1,
        title: 'here is a title',
        mood: 'angry',
        habits: [
            'drink water',
            'go for a walk',
            'journal',
            'call parents'
        ],
        entry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus aliquam omnis porro, ad tempore earum deserunt eligendi voluptatem architecto alias sint sunt placeat et, ipsa debitis vitae veniam, repudiandae commodi. Repellendus blanditiis eveniet, dicta sequi facilis minima saepe libero fugiat! Error, cupiditate? Impedit atque eveniet labore expedita eos illum fugit fuga consequuntur nisi, est culpa quos, ex delectus repudiandae sint? Voluptatum cumque corporis hic cupiditate, excepturi, nulla perferendis ab doloribus officia error vitae fuga dolorum deleniti quaerat maiores optio velit obcaecati aspernatur expedita asperiores deserunt. Nemo quibusdam dolore neque exercitationem! Qui doloribus tempora rerum ad aliquid deserunt consequuntur nam, ipsam dolor sapiente excepturi eligendi sed pariatur sit quibusdam amet iste animi natus impedit veniam temporibus autem atque! Aspernatur, ut ipsum.'
    },
    {
        id: 2,
        title: 'IDGAF',
        mood: 'angry',
        habits: [
            'drink water',
            'go for a walk',
            'journal',
            'call parents'
        ],
        entry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus aliquam omnis porro, ad tempore earum deserunt eligendi voluptatem architecto alias sint sunt placeat et, ipsa debitis vitae veniam, repudiandae commodi. Repellendus blanditiis eveniet, dicta sequi facilis minima saepe libero fugiat! Error, cupiditate? Impedit atque eveniet labore expedita eos illum fugit fuga consequuntur nisi, est culpa quos, ex delectus repudiandae sint? Voluptatum cumque corporis hic cupiditate, excepturi, nulla perferendis ab doloribus officia error vitae fuga dolorum deleniti quaerat maiores optio velit obcaecati aspernatur expedita asperiores deserunt. Nemo quibusdam dolore neque exercitationem! Qui doloribus tempora rerum ad aliquid deserunt consequuntur nam, ipsam dolor sapiente excepturi eligendi sed pariatur sit quibusdam amet iste animi natus impedit veniam temporibus autem atque! Aspernatur, ut ipsum.'
    },
    {
        id: 3,
        title: 'a whole new world',
        mood: 'angry',
        habits: [
            'drink water',
            'go for a walk',
            'journal',
            'call parents'
        ],
        entry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus aliquam omnis porro, ad tempore earum deserunt eligendi voluptatem architecto alias sint sunt placeat et, ipsa debitis vitae veniam, repudiandae commodi. Repellendus blanditiis eveniet, dicta sequi facilis minima saepe libero fugiat! Error, cupiditate? Impedit atque eveniet labore expedita eos illum fugit fuga consequuntur nisi, est culpa quos, ex delectus repudiandae sint? Voluptatum cumque corporis hic cupiditate, excepturi, nulla perferendis ab doloribus officia error vitae fuga dolorum deleniti quaerat maiores optio velit obcaecati aspernatur expedita asperiores deserunt. Nemo quibusdam dolore neque exercitationem! Qui doloribus tempora rerum ad aliquid deserunt consequuntur nam, ipsam dolor sapiente excepturi eligendi sed pariatur sit quibusdam amet iste animi natus impedit veniam temporibus autem atque! Aspernatur, ut ipsum.'
    },
    {
        id: 4,
        title: 'everybody wants to be a cat',
        mood: 'angry',
        habits: [
            'drink water',
            'go for a walk',
            'journal',
            'call parents'
        ],
        entry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus aliquam omnis porro, ad tempore earum deserunt eligendi voluptatem architecto alias sint sunt placeat et, ipsa debitis vitae veniam, repudiandae commodi. Repellendus blanditiis eveniet, dicta sequi facilis minima saepe libero fugiat! Error, cupiditate? Impedit atque eveniet labore expedita eos illum fugit fuga consequuntur nisi, est culpa quos, ex delectus repudiandae sint? Voluptatum cumque corporis hic cupiditate, excepturi, nulla perferendis ab doloribus officia error vitae fuga dolorum deleniti quaerat maiores optio velit obcaec'
    },
    {
        id: 5,
        title: 'wassup',
        mood: 'angry',
        habits: [
            'drink water',
            'go for a walk',
            'journal',
            'call parents'
        ],
        entry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus aliquam omnis porro, ad tempore earum deserunt eligendi voluptatem architecto alias sint sunt placeat et, ipsa debitis vitae veniam, repudiandae commodi. Repellendus blanditiis eveniet, dicta sequi facilis minima saepe libero fugiat! Error, cupiditate? Impedit atque eveniet labore expedita eos illum fugit fuga consequuntur nisi, est culpa quos, ex delectus repudiandae sint? Voluptatum cumque corporis hic cupiditate, excepturi, nulla perferendis ab doloribus officia error vitae fuga dolorum deleniti quaerat maiores optio velit obcaec'
    },
    {
        id: 6,
        title: 'hello',
        mood: 'angry',
        habits: [
            'drink water',
            'go for a walk',
            'journal',
            'call parents'
        ],
        entry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus aliquam omnis porro, ad tempore earum deserunt eligendi voluptatem architecto alias sint sunt placeat et, ipsa debitis vitae veniam, repudiandae commodi. Repellendus blanditiis eveniet, dicta sequi facilis minima saepe libero fugiat! Error, cupiditate? Impedit atque eveniet labore expedita eos illum fugit fuga consequuntur nisi, est culpa quos, ex delectus repudiandae sint? Voluptatum cumque corporis hic cupiditate, excepturi, nulla perferendis ab doloribus officia error vitae fuga dolorum deleniti quaerat maiores optio velit obcaec'
    }
]
let data = dummyData



console.log(data)

// renders the latest entry prominent on page
async function renderNewestEntry(){
console.log('you made it to this page')
    //Delete and Edit Button in DOM
    const $deleteBtn = document.createElement('button')
    const $editBtn = document.createElement('button')
    $deleteBtn.innerHTML = 'delete'
    $editBtn.innerHTML = 'edit'
    $deleteBtn.id = 'deleteBtn'
    $editBtn.id = 'editBtn'

    let newEntry = data[data.length - 1];



    // Rendering habits list
    const renderHabitsList = () => {
        const $habitsListUl = document.createElement('ul');

        for (let i = 0; i < newEntry.habits.length; i++) {
            const $habitListItem = document.createElement('li');
            $habitListItem.textContent = newEntry.habits[i];
            $habitsListUl.appendChild($habitListItem);
        }

        return $habitsListUl;
    };
    // this is the ul to be appended to entry
    const habitList = renderHabitsList();

    // Render entry container
    const $entryContainer = document.createElement('section');
    $entryContainer.id = 'entryContainer';
    $entryContainer.innerHTML = `
         <h2>${newEntry.title}</h2>
         <p>${newEntry.mood}</p>
         <h3>Habits:</h3>
    `;
    // Append habits list to entry container
    $entryContainer.appendChild(habitList);

    // Add entry text
    const $entryText = document.createElement('p');
    $entryText.textContent = newEntry.entry;
    $entryContainer.appendChild($entryText);

    // Append entry container to the main container
    $newEntriesContainer.appendChild($entryContainer);
    $newEntriesContainer.appendChild($deleteBtn)
    $newEntriesContainer.appendChild($editBtn)
    //eventListeners and relevant functions


    // TODO: ADD DELETE FUNCTIONALITY TO $DELETEBTN WITH EVENT LISTENER HERE $deleteBtn ID : deleteBtn
    const deleteEntry = async(e) => {
        if(e.target.id === 'deleteBtn'){
            $newEntriesContainer.removeChild($entryContainer)
            $newEntriesContainer.removeChild($deleteBtn)
            $newEntriesContainer.removeChild($editBtn)
           data.pop()
           renderNewestEntry()
           renderPastEntries()
           console.log(data)
        }
    }
    deleteBtn.addEventListener('click',deleteEntry)
     // TODO: ADD EDIT BUTTON FUNCTIONALITY HERE  $editBtn ID: editBtn
 };
 


 const $pastEntriesContainer = document.createElement('section')
 $pastEntriesContainer.id = 'pastEntriesContainer'
    const handleEditEntry = (entryId) => {
        const editEntry = data.find(entry => entry.id === entryId);

        if (editEntry) {
            const $existingEntryContainer = document.getElementById('entryContainer');

            $existingEntryContainer.innerHTML = '';

            const $title = document.createElement('h2');
            $title.textContent = editEntry.title;

            const $mood = document.createElement('p');
            $mood.textContent = editEntry.mood;

            const $habitsCheckbox = document.createElement('ul');
            editEntry.habits.forEach(habit => { 
                const $habitsCheckboxItem = document.createElement('li');
                $habitsCheckboxItem.textContent = habit;
                $habitsCheckbox.appendChild($habitListItem);
            });
            const $habitsHeader = document.createElement('h3');
            $habitsHeader.textContent = 'Habits: ';

            const $entryText = document.createElement('p');
            $entryText.textContent = editEntry.entry;

            $existingEntryContainer.appendChild($title);
            $existingEntryContainer.appendChild($mood);
            $existingEntryContainer.appendChild($habitsHeader);
            $existingEntryContainer.appendChild($habitsCheckbox);
            $existingEntryContainer.appendChild($entryText);
        }
    };
};
    // TODO: ADD EDIT BUTTON FUNCTIONALITY HERE  $editBtn ID: editBtn
//     const handleEditEntry = (entryId) => {
//         // find form by entry id
//         const editEntry = data.find(entry => entry.id === entryId);

//         if (editEntry) {
//             //create form to edit
//             const $editForm = document.createElement('form');
//             // title input, created el, type, and value to represent the title, appended to 'input'; repeated general process. 
//             const $titleInput = document.createElement('input');
//             $titleInput.type = 'text';
//             $titleInput.value = editEntry.title;
//             $editForm.appendChild($titleInput);
//             // entry box
//             const $entryInput = document.createElement('textarea');
//             $entryInput.value = editEntry.entry;
//             $editForm.appendChild($entryInput);

//             // Habits checkbox
//             const $habitCheckboxes = document.createElement('div');
//             editEntry.habits.forEach(habit => {
//                 const $checkbox = document.createElement('input');
//                 $checkbox.type = 'checkbox';
//                 $checkbox.value = habit;
//                 $checkbox.checked = editEntry.habits.includes(habit);
//                 const $label = document.createElement('label');
//                 $label.textContent = habit;

//                 $habitCheckboxes.appendChild($checkbox);
//                 $habitCheckboxes.appendChild($label);
//             });
//             $editForm.appendChild($habitCheckboxes);
//             // mood
//             const $moodSelect = document.createElement('select');
//             const $moodOptions = [ 
//                 'happy',
//                 'angry',
//                 'calm',
//                 'anxious',
//                 'excited'
//             ];
//             $moodOptions.forEach(option => {
//                 const $option = document.createElement('input');
//                 $option.value = 'option';
//                 $option.textContent = option;
//                 $moodSelect.appendChild($option);
//             });
//             $editForm.appendChild($moodSelect);
//             $moodSelect.value = $moodOptions.mood;
            
//             // submit button
//             const $submitButton = document.createElement('button');
//             $submitButton.type = 'submit';
//             $submitButton.value = 'Save Changes';
//             $submitButton.addEventListener('click', () => {
//                 editEntry.title = $titleInput.value;
//                 editEntry.entry = $entryInput.value;
//                 editEntry.mood = $moodSelect.value;
//                 editEntry.habits = [...$habitCheckboxes.querySelectorAll('input:checked')].map(checkbox => checkbox.value);

//                 $editForm.remove();
//             });
//             $editForm.appendChild($submitButton);

//             $newEntriesContainer.appendChild($editForm);
//         } 

//     }

//     $editBtn.addEventListener('click', () => {
//         handleEditEntry();
//     });
// };



const $pastEntriesContainer = document.createElement('section');
$pastEntriesContainer.id = 'pastEntriesContainer';
async function renderPastEntries() {
    let $deleteBtn = ''
    $pastEntriesContainer.innerHTML = ''
    for (let i = 0; i < data.length - 1; i++) {
        $deleteBtn = document.createElement('button')
        const $editBtn = document.createElement('button')
        const $pastEntryCard = document.createElement('section')
        $deleteBtn.innerHTML = 'delete'
        $editBtn.innerHTML = 'edit'
        $deleteBtn.id = `deleteBtn-${data[i].id}`
        $editBtn.id = `editBtn-${data[i].id}`
        const sentences = data[i].entry.split(/\. |\? |! /);

        const firstTwoSentences = sentences.slice(0, 2);
        $pastEntryCard.id = data[i].id
        $pastEntryCard.innerHTML += `
        <section id=>
        <h2>${data[i].title}</h2>
        <p>${data[i].mood}</p>
        <p>${firstTwoSentences}</p> 
          
        `;

        $pastEntryCard.appendChild($deleteBtn)
        $pastEntryCard.appendChild($editBtn)
        $pastEntriesContainer.appendChild($pastEntryCard)

    }
    // TODO:ADD DELETE PAST ENTRIES BUTTON HERE WITH EVENT LISTENERS $deleteBtn ID: deleteBtn-${data[i].id}
    const deletePastEntry2 = (e) => {
        if(e.target.id.includes('deleteBtn')){
            let filteredList;
            const btnId = parseInt(e.target.id.split('deleteBtn-')[1])
            for(let i = 0; i < data.length -1; i++){
                if(btnId === data[i].id){
                 data =  data.filter((el)=>btnId !== el.id  )
                 renderPastEntries()
                }
            }
            console.log(data)
            return filteredList
        }
     }
     $pastEntriesContainer.addEventListener('click', deletePastEntry2)
    
    // TODO: ADD EDIT BUTTON FUNCTIONALITY HERE $editBtn ID: editBtn-${data[i].id}

    //DELETE BUTTON IS CALLED $   
    $newEntriesContainer.insertAdjacentElement('afterend', $pastEntriesContainer);
}
renderNewestEntry()
renderPastEntries()