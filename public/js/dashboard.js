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
console.log(dummyData)
// renders the latest entry prominent on page
async function renderNewestEntry(){
    const $deleteBtn = document.createElement('button')
    const $editBtn = document.createElement('button')
    $deleteBtn.innerHTML= 'delete'
    $editBtn.innerHTML= 'edit'
    $deleteBtn.id = 'deleteBtn'
    $editBtn.id = 'editBtn'
    let newEntry = dummyData[dummyData.length - 1];


    
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
    const deleteEntry = async(e) => {
        if(e.target.id === 'deleteBtn'){ 
            $newEntriesContainer.removeChild($entryContainer)
            $newEntriesContainer.removeChild($deleteBtn)
            $newEntriesContainer.removeChild($editBtn)
          
           dummyData.pop()
           renderNewestEntry()
           renderPastEntries()
           console.log(dummyData)   
        }
      
    }
    deleteBtn.addEventListener('click',deleteEntry)
 };
 


 const $pastEntriesContainer = document.createElement('section')
 $pastEntriesContainer.id = 'pastEntriesContainer'
async function renderPastEntries() {
    let $deleteBtn = ''
    $pastEntriesContainer.innerHTML= ''
    for(let i = 0; i< dummyData.length-1; i++){
     $deleteBtn = document.createElement('button')
    const $editBtn = document.createElement('button')
    const $pastEntryCard = document.createElement('section')
    $deleteBtn.innerHTML= 'delete'
    $editBtn.innerHTML= 'edit'
    $deleteBtn.id = `deleteBtn-${i+1}`
    $editBtn.id = `editBtn-${i}`
        const sentences = dummyData[i].entry.split(/\. |\? |! /);

        const firstTwoSentences = sentences.slice(0, 2);
        $pastEntryCard.id= dummyData[i].id
        $pastEntryCard.innerHTML+=`
        <section id=>
        <h2>${dummyData[i].title}</h2>
        <p>${dummyData[i].mood}</p>
        <p>${firstTwoSentences}</p> 
          
        `;

        $pastEntryCard.appendChild($deleteBtn)
        $pastEntryCard.appendChild($editBtn)
    $pastEntriesContainer.appendChild($pastEntryCard)

    }
    const deletePastEntry = (e) => {
       ;
        if(e.target.id.includes('deleteBtn')){
           
            for(let i = 0; i< dummyData.length-1; i++){
              
                const btnId = parseInt(e.target.id.split('deleteBtn-')[1])
                console.log(btnId, dummyData[i].id)
                if(btnId === dummyData[i].id){
    
                    //console.log(parseFloat(dummyData[i].id))
                    dummyData= dummyData.filter((el) => el.id !== btnId)
                    renderPastEntries()
                }
            }
            console.log(dummyData)
        }
    }
    $pastEntriesContainer.addEventListener('click', deletePastEntry)
    $newEntriesContainer.insertAdjacentElement('afterend', $pastEntriesContainer);
}
renderNewestEntry()
renderPastEntries()