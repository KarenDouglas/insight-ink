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



const url = 'endpoint';
const newSubmittedEntry = {
    title: $newEntryTitleInput.value,
    description: $newEntryTextArea.value,
    mood: $newMoodSelect.value
}
const fetchOptions = {
    method: 'POST',
  headers: {
    'Content-Type': 'application/json' 
  },
  body: JSON.stringify(newSubmittedEntry) //  
}


const submitNewEntry = async(e) => {
    e.preventDefault()

    try {
        const response = await fetch(url, fetchOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        window.location.href = '/';
        return responseData;
    } catch (err) {
        console.error(err);
    }
}



    

 

$newEntrySubmitButton.addEventListener('click', submitNewEntry)


