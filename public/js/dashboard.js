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
data = dummyData

console.log(data)
// renders the latest entry prominent on page
async function renderNewestEntry(){
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
    const deleteEntry = async (e) => {
        if (e.target.id === 'deleteBtn') {
            $newEntriesContainer.removeChild($entryContainer)
            $newEntriesContainer.removeChild($deleteBtn)
            $newEntriesContainer.removeChild($editBtn)
            data.pop()
            renderNewestEntry()
            renderPastEntries()
            console.log(data)
        }
      
    }
    $deleteBtn.addEventListener('click', deleteEntry);

    // TODO: ADD EDIT BUTTON FUNCTIONALITY HERE  $editBtn ID: editBtn 
    const $editEntriesContainer = document.createElement('section');
    $editEntriesContainer.id = 'pastEntriesContainer';

    const handleEditEntry = async (entryId) => {
        const $editEntriesContainer = document.getElementById('pastEntriesContainer');
        $editEntriesContainer.innerHTML = '';
        try {
            const response = await fetch(`/api/entry/${entryId}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch entry with ID ${entryId}`);
            }

                const editEntry = await response.json();

                const $title = document.createElement('h2');
                $title.textContent = editEntry.title;
                const $mood = document.createElement('p');
                $mood.textContent = editEntry.mood;
                const $habitsCheckbox = document.createElement('ul');
                editEntry.habits.forEach(habit => {
                    const $habitsCheckboxItem = document.createElement('li');
                    $habitsCheckboxItem.textContent = habit;
                    $habitsCheckbox.appendChild($habitsCheckboxItem);
                });
                const $habitsHeader = document.createElement('h3');
                $habitsHeader.textContent = 'Habits: ';
                const $entryText = document.createElement('p');
                $entryText.textContent = editEntry.entry;

                $editEntriesContainer.appendChild($title);
                $editEntriesContainer.appendChild($mood);
                $editEntriesContainer.appendChild($habitsHeader);
                $editEntriesContainer.appendChild($habitsCheckbox);
                $editEntriesContainer.appendChild($entryText);
            
        } catch (error) {
            console.error(error);
        }
    };
    
    $editBtn.addEventListener('click', async () => {
        const entryId = window.location.pathname.split('/').pop();

        try {
            await handleEditEntry(entryId);
            console.log('It working')
        } catch (error) {
            console.error(error);
        }
    });
};



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
        if (e.target.id.includes('deleteBtn')) {
            let filteredList;
            const btnId = parseInt(e.target.id.split('deleteBtn-')[1])
            for (let i = 0; i < data.length - 1; i++) {
                if (btnId === data[i].id) {
                    data = data.filter((el) => btnId !== el.id)
                    renderPastEntries()
                }
            }
            console.log(data)
        }
    }
    $pastEntriesContainer.addEventListener('click', deletePastEntry2)

    // TODO: ADD EDIT BUTTON FUNCTIONALITY HERE $editBtn ID: editBtn-${data[i].id}

    //DELETE BUTTON IS CALLED $   
    
}

//modal functionality
document.addEventListener('DOMContentLoaded', () => {
    const blogCards = document.querySelectorAll('.blog-card');
    const $modal = document.getElementById('entryModal');
    let editedBlogPost = null;

    blogCards.forEach(card => {
        card.addEventListener('click', async () => {
            const entryId = card.dataset.entryId;

            try {
                const response = await fetch(`/api/entry/${entryId}`);
                const olderEntryData = await response.json();

                renderBlogPostDetails(olderEntryData);
                openModal();

            } catch (error) {
                console.error('Error fetching post:', error);
            }
        });
    });

    function openModal() {
        $modal.style.display = 'block';
        document.getElementById('updateMessage').style.display = 'none';
    }

    function closeModal() {
        $modal.style.display = 'none';
    }

    function saveEdits() {
        // Checks if any edits were made
        if (editedBlogPost !== null) {
            // Get the edited values from the modal
            const editedTitle = document.getElementById('modalTitle').textContent;
            const editedMood = document.getElementById('modalMood').textContent;
            const editedEntry = document.getElementById('modalEntryText').textContent;

            // Updates the edited information in the original post data
            editedBlogPost.title = editedTitle;
            editedBlogPost.mood = editedMood;
            editedBlogPost.entry = editedEntry;

            // Re-renders the blog post with the edited information
            renderBlogPostDetails(editedBlogPost);

            // Resets the editedBlogPost variable after saving
            editedBlogPost = null;

            // Displays a message letting you know your post has been updated
            const updateMessage = document.getElementById('updateMessage');
            updateMessage.textContent = 'Your post has been updated!';
            updateMessage.style.display = 'block';

            // Closes the modal after saving edits
            setTimeout(() => {
                closeModal();
                updateMessage.style.display = 'none';
            }, 2000);
        }
    }

    // Add event listeners for close and submit buttons
    document.getElementById('closeBtn').addEventListener('click', closeModal);
    document.getElementById('submitBtn').addEventListener('click', saveEdits);
});
