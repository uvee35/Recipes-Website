var subscribers = [
  ['John', false],
  ['Jane', true],
  ['Bob', true],
  ['Betz', true]
];

function addSubscriber(name, status) {
  // Check if the subscriber already exists
  for (let i = 0; i < subscribers.length; i++) {
    if (subscribers[i][0] === name) {
      console.log(`${name} is already a subscriber.`);
      return;
    }
  }

  // Add the new subscriber
  subscribers.push([name, status]);
  console.log(`${name} added as a subscriber.`);
}

function removeSubscriber(name) {
  for (let i = 0; i < subscribers.length; i++) {
    if (subscribers[i][0] === name) {
      subscribers.splice(i, 1);
      console.log(`${name} has been removed from subscribers.`);
      return;
    }
  }

  console.log(`${name} was not found in subscribers.`);
}

function checkSubscriber(name) {
  for (const subscriber of subscribers) {
    if (subscriber[0] === name) {
      console.log(`${name} is ${subscriber[1] ? 'an active' : 'not an active'} subscriber.`);
      return subscriber[1];
    }
  }

  console.log(`${name} is not a subscriber.`);
  return false;
}

function handleAddSubscriber(event) {
  event.preventDefault(); // Prevent default form submission

  const nameInput = document.getElementById('subscriberName');
  if (nameInput && nameInput.value) {
    addSubscriber(nameInput.value, true);
    nameInput.value = ''; // Clear input
  }
}

// Event listener for the form submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('addSubscriberForm');
  if (form) {
    form.addEventListener('submit', handleAddSubscriber);
  }
});

export { addSubscriber, removeSubscriber, checkSubscriber };