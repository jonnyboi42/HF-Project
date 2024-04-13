function markAsComplete(button) {
  var reminderContent = button.closest('.reminder').querySelector('.reminder-content');
  reminderContent.classList.toggle('complete-line');
}


function markAsComplete(button) {
  var reminderContent = button.parentElement.parentElement.previousElementSibling;
  reminderContent.style.textDecoration = 'line-through';
  // Trigger reflow
  void reminderContent.offsetWidth;
}



// function removeReminder(button) {
//   var reminder = button.parentElement.parentElement.parentElement;
//   reminder.style.opacity = '0'; // Set opacity to 0 for fading effect
//   setTimeout(function() {
//       reminder.remove(); // Remove the reminder after the fade-out effect
//       if (document.querySelectorAll('.reminder').length === 0) {
//           // If there are no more reminders, display the message
//           var noRemindersMessage = document.createElement('p');
//           noRemindersMessage.textContent = 'Currently No Reminders';
//           noRemindersMessage.classList.add('no-reminders'); // Add class to the message
//           var image = document.createElement('img');
//           image.setAttribute('src', 'png/relax.svg');
//           image.setAttribute('alt', 'Relax Image');
//           image.setAttribute('width', '50');
//           image.setAttribute('height', '50');
//           noRemindersMessage.appendChild(image); // Append image to the message
//           document.querySelector('.reminders').appendChild(noRemindersMessage);
//       }
//   }, 500); // Delay removal by 500 milliseconds (same as transition duration)
//   // Delay refreshing the list by 600 milliseconds
//   setTimeout(function() {
//       refreshReminders();
//   }, 600);
// }

function removeReminder(button) {
  var reminder = button.parentElement.parentElement.parentElement;
  reminder.style.opacity = '0'; // Set opacity to 0 for fading effect
  setTimeout(function() {
      reminder.remove(); // Remove the reminder after the fade-out effect
      if (document.querySelectorAll('.reminder').length === 0) {
          // If there are no more reminders, display the message
          var noRemindersMessage = document.createElement('p');
          noRemindersMessage.textContent = 'Currently No Reminders';
          noRemindersMessage.classList.add('no-reminders'); // Add class to the message
          noRemindersMessage.style.opacity = '0'; // Set opacity to 0 for fading in
          var image = document.createElement('img');
          image.setAttribute('src', 'png/relax.svg');
          image.setAttribute('alt', 'Relax Image');
          image.setAttribute('width', '50');
          image.setAttribute('height', '50');
          image.style.opacity = '0'; // Set opacity to 0 for fading in
          noRemindersMessage.appendChild(image); // Append image to the message
          document.querySelector('.reminders').appendChild(noRemindersMessage);
          // Fading in the message and image
          setTimeout(function() {
            noRemindersMessage.style.transition = 'opacity 0.9s ease';
            noRemindersMessage.style.opacity = '1';
            image.style.transition = 'opacity 1.3s ease';
            image.style.opacity = '1';
          }, 100); // Delay fading in by 100 milliseconds
      }
  }, 500); // Delay removal by 500 milliseconds (same as transition duration)
}