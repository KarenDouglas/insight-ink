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


const submitNewEntry = (e) => {
    e.preventDefault()
const newSubmittedEntry = {
    title: $newEntryTitleInput.value,
    description:$newEntryTextArea.value,
    mood:$newMoodSelect.value
}

    
console.log(newSubmittedEntry)
} 

$newEntrySubmitButton.addEventListener('click', submitNewEntry)


