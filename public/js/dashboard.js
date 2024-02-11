const $newEntriesContainer = document.querySelector('#newEntryContainer')


const dummyData = [
    {
        title: 'here is a title',
        mood: 'angry',
        habits: [
        'drink water',
        'go for a walk',
        'journal',
        'call parents'
        ],
        entry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus aliquam omnis porro, ad tempore earum deserunt eligendi voluptatem architecto alias sint sunt placeat et, ipsa debitis vitae veniam, repudiandae commodi.Repellendus blanditiis eveniet, dicta sequi facilis minima saepe libero fugiat! Error, cupiditate? Impedit atque eveniet labore expedita eos illum fugit fuga consequuntur nisi, est culpa quos, ex delectus repudiandae sint?Voluptatum cumque corporis hic cupiditate, excepturi, nulla perferendis ab doloribus officia error vitae fuga dolorum deleniti quaerat maiores optio velit obcaecati aspernatur expedita asperiores deserunt. Nemo quibusdam dolore neque exercitationem! Qui doloribus tempora rerum ad aliquid deserunt consequuntur nam, ipsam dolor sapiente excepturi eligendi sed pariatur sit quibusdam amet iste animi natus impedit veniam temporibus autem atque! Aspernatur, ut ipsum.'
    },
    {
        title: 'IDGAF',
        mood: 'angry',
        habits: [
        'drink water',
        'go for a walk',
        'journal',
        'call parents'
        ],
        entry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus aliquam omnis porro, ad tempore earum deserunt eligendi voluptatem architecto alias sint sunt placeat et, ipsa debitis vitae veniam, repudiandae commodi.Repellendus blanditiis eveniet, dicta sequi facilis minima saepe libero fugiat! Error, cupiditate? Impedit atque eveniet labore expedita eos illum fugit fuga consequuntur nisi, est culpa quos, ex delectus repudiandae sint?Voluptatum cumque corporis hic cupiditate, excepturi, nulla perferendis ab doloribus officia error vitae fuga dolorum deleniti quaerat maiores optio velit obcaecati aspernatur expedita asperiores deserunt. Nemo quibusdam dolore neque exercitationem! Qui doloribus tempora rerum ad aliquid deserunt consequuntur nam, ipsam dolor sapiente excepturi eligendi sed pariatur sit quibusdam amet iste animi natus impedit veniam temporibus autem atque! Aspernatur, ut ipsum.'
    },
    {
        title: 'a whole new world',
        mood: 'angry',
        habits: [
        'drink water',
        'go for a walk',
        'journal',
        'call parents'
        ],
        entry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus aliquam omnis porro, ad tempore earum deserunt eligendi voluptatem architecto alias sint sunt placeat et, ipsa debitis vitae veniam, repudiandae commodi.Repellendus blanditiis eveniet, dicta sequi facilis minima saepe libero fugiat! Error, cupiditate? Impedit atque eveniet labore expedita eos illum fugit fuga consequuntur nisi, est culpa quos, ex delectus repudiandae sint?Voluptatum cumque corporis hic cupiditate, excepturi, nulla perferendis ab doloribus officia error vitae fuga dolorum deleniti quaerat maiores optio velit obcaecati aspernatur expedita asperiores deserunt. Nemo quibusdam dolore neque exercitationem! Qui doloribus tempora rerum ad aliquid deserunt consequuntur nam, ipsam dolor sapiente excepturi eligendi sed pariatur sit quibusdam amet iste animi natus impedit veniam temporibus autem atque! Aspernatur, ut ipsum.'
    },
    {
        title: 'everybody wants to be a cat',
        mood: 'angry',
        habits: [
        'drink water',
        'go for a walk',
        'journal',
        'call parents'
        ],
        entry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus aliquam omnis porro, ad tempore earum deserunt eligendi voluptatem architecto alias sint sunt placeat et, ipsa debitis vitae veniam, repudiandae commodi.Repellendus blanditiis eveniet, dicta sequi facilis minima saepe libero fugiat! Error, cupiditate? Impedit atque eveniet labore expedita eos illum fugit fuga consequuntur nisi, est culpa quos, ex delectus repudiandae sint?Voluptatum cumque corporis hic cupiditate, excepturi, nulla perferendis ab doloribus officia error vitae fuga dolorum deleniti quaerat maiores optio velit obcaecati aspernatur expedita asperiores deserunt. Nemo quibusdam dolore neque exercitationem! Qui doloribus tempora rerum ad aliquid deserunt consequuntur nam, ipsam dolor sapiente excepturi eligendi sed pariatur sit quibusdam amet iste animi natus impedit veniam temporibus autem atque! Aspernatur, ut ipsum.'
    },
    {
        title: 'how ya doing',
        mood: 'angry',
        habits: [
        'drink water',
        'go for a walk',
        'journal',
        'call parents'
        ],
        entry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus aliquam omnis porro, ad tempore earum deserunt eligendi voluptatem architecto alias sint sunt placeat et, ipsa debitis vitae veniam, repudiandae commodi.Repellendus blanditiis eveniet, dicta sequi facilis minima saepe libero fugiat! Error, cupiditate? Impedit atque eveniet labore expedita eos illum fugit fuga consequuntur nisi, est culpa quos, ex delectus repudiandae sint?Voluptatum cumque corporis hic cupiditate, excepturi, nulla perferendis ab doloribus officia error vitae fuga dolorum deleniti quaerat maiores optio velit obcaecati aspernatur expedita asperiores deserunt. Nemo quibusdam dolore neque exercitationem! Qui doloribus tempora rerum ad aliquid deserunt consequuntur nam, ipsam dolor sapiente excepturi eligendi sed pariatur sit quibusdam amet iste animi natus impedit veniam temporibus autem atque! Aspernatur, ut ipsum.'
    },
    {
        title: 'wasssup',
        mood: 'angry',
        habits: [
        'drink water',
        'go for a walk',
        'journal',
        'call parents'
        ],
        entry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus aliquam omnis porro, ad tempore earum deserunt eligendi voluptatem architecto alias sint sunt placeat et, ipsa debitis vitae veniam, repudiandae commodi.Repellendus blanditiis eveniet, dicta sequi facilis minima saepe libero fugiat! Error, cupiditate? Impedit atque eveniet labore expedita eos illum fugit fuga consequuntur nisi, est culpa quos, ex delectus repudiandae sint?Voluptatum cumque corporis hic cupiditate, excepturi, nulla perferendis ab doloribus officia error vitae fuga dolorum deleniti quaerat maiores optio velit obcaecati aspernatur expedita asperiores deserunt. Nemo quibusdam dolore neque exercitationem! Qui doloribus tempora rerum ad aliquid deserunt consequuntur nam, ipsam dolor sapiente excepturi eligendi sed pariatur sit quibusdam amet iste animi natus impedit veniam temporibus autem atque! Aspernatur, ut ipsum.'
    },
]


// renders the latest entry prominent on page
const renderNewestEntry = async () => {
     const newEntry = dummyData[dummyData.length - 1];
 
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
 };
 

 
renderNewestEntry()
const renderPastEntries = async() => {
    const $pastEntriesContainer = document.createElement('section')
    $pastEntriesContainer.id = 'pastEntriesContainer'
    for(let i = 0; i<dummyData.length-1; i++){
        const sentences = dummyData[i].entry.split(/\. |\? |! /);

        const firstTwoSentences = sentences.slice(0, 2);

        $pastEntriesContainer.innerHTML += `
        <h2>${dummyData[i].title}</h2>
        <p>${dummyData[i].mood}</p>
        <p>${firstTwoSentences}</p>        
    `;

    }
    $newEntriesContainer.append($pastEntriesContainer)
}
renderPastEntries()