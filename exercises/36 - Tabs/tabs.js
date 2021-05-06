const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {
  // hide all tab panels
  tabPanels.forEach(panel => panel.hidden = true);

  // mark all tabs as unselected
  tabButtons.forEach(tab => tab.setAttribute('aria-selected', false));

  // mark clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);

  // find associated panel and show it
  const { id } = event.currentTarget;
  const matchingTabPanel = document.querySelector(`[aria-labelledby="${id}"`);
  matchingTabPanel.hidden = false;
}


tabButtons.forEach(button => button.addEventListener('click', handleTabClick));