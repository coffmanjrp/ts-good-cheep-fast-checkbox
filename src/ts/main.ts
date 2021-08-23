const toggles = document.querySelectorAll(
  '.toggle'
) as NodeListOf<HTMLInputElement>;
const good = document.querySelector('#good') as HTMLInputElement;
const cheep = document.querySelector('#cheep') as HTMLInputElement;
const fast = document.querySelector('#fast') as HTMLInputElement;

function doTheTrick(theClickedOne: EventTarget | null) {
  if (good.checked && cheep.checked && fast.checked) {
    if (good === theClickedOne) {
      fast.checked = false;
    }
    if (cheep === theClickedOne) {
      good.checked = false;
    }
    if (fast === theClickedOne) {
      cheep.checked = false;
    }
  }
}

toggles.forEach((toggle) => {
  toggle.addEventListener('change', (e) => doTheTrick(e.target));
});
