// a list of past entries
// newest entry prominent
// click listener for each past entry item
//click lister for each new entry
// new entry button
// render past entries
// dummy data



const $newEntryTitleInput = document.querySelector('#newEntryTitle')
const $newEntryTextArea = document.querySelector('#newEntry')

const $newHabitCheckboxes = document.querySelectorAll('input[name="habitToBeTracked"]:checked')
const $newEntrySubmitButton = document.querySelector('#newEntrySubmitButton')

const $newMoodSelect = document.querySelector('#moodSelect')




const submitNewEntry = async(e) => {
    e.preventDefault()
    
const $newHabitCheckboxes = document.querySelectorAll('input[name="habitToBeTracked"]:checked')
    const checkedHabitValues = [];
    $newHabitCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            checkedHabitValues.push(checkbox.value);
        }
    });
    async function updateHabit (id){
       
        const options = {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            },
          };
          const response = await fetch(`/api/habits/${id}`, options)
          if(response.ok){
           return response.json()
          }
         
    }

   for(let i = 0 ;i < checkedHabitValues.length;i++){
            await updateHabit(checkedHabitValues[i])
    }

    const newSubmittedEntry = {
        title: $newEntryTitleInput.value,
        description: $newEntryTextArea.value,
        mood: $newMoodSelect.value
    }
    
    console.log(newSubmittedEntry)
    const url = '/api/entry/newEntry';
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newSubmittedEntry) 
    }
    console.log(newSubmittedEntry)
    try {
        const response = await fetch(url, fetchOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        // window.location.href = '/';
        return responseData;
    } catch (err) {
        console.error(err);
      
    }
}



    

 

$newEntrySubmitButton.addEventListener('click', submitNewEntry)


