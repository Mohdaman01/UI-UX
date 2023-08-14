const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('main');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    main.classList.toggle('active');
});


const sensitivityInput = document.getElementById('sensitivity');
const sensitivityValue = document.getElementById('sensitivity-value');
const resourcesInput = document.getElementById('resources');
const resourcesValue = document.getElementById('resources-value');

sensitivityInput.addEventListener('input', updateSensitivityValue);
resourcesInput.addEventListener('input', updateResourcesValue);

function updateSensitivityValue() {
    const newValue = sensitivityInput.value;
    sensitivityValue.textContent = newValue;
}

function updateResourcesValue() {
    const newValue = resourcesInput.value;
    resourcesValue.textContent = newValue + '%';
}

updateSensitivityValue();
updateResourcesValue();


document.addEventListener("DOMContentLoaded", () => {
    const notifications = document.querySelector(".notifications");
    const dropdown = document.querySelector(".notification-dropdown");

    notifications.addEventListener("click", () => {
        dropdown.classList.toggle("active");
    });
});

