// This function should be the one that sets up the event listener
  function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', clickAlert);
  }
  function clickAlert() {
    alert('I was clicked!');
  }
  //test