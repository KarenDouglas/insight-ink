const deleteIcons = document.querySelectorAll('.fa-regular');

deleteIcons.forEach((icon) => {
    icon.addEventListener('click', async (event) => {
        event.preventDefault();

        const habitId = icon.dataset.habitId; 

        await deleteHabit(habitId);
    });
});

const deleteHabit = async (habitId) => {
    const response = await fetch(`/api/habits/${habitId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/habits');
    } else {
        alert(response.statusText);
    }
};



