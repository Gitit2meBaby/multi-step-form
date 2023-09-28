// declare variables for total updates - set arcade values in case user doesnt actually click
let selectedPlan = 'arcade'
let planPrice = '15'
let planTime = '(monthly)'
let planTimeDisplay = '/mo'
let planTimeSummaryDisplay = '/mo'
let isPlanTimeClicked = false
let isOnlineClicked = false
let isStorageClicked = false
let isCustomClicked = false
let total = 0

//set the plan time as monthly or yearly (pass isClicked for maths later on)
const planTimeToggle = document.querySelector('#switch')
planTimeToggle.addEventListener('click', () => {
    const cardDropdowns = document.querySelectorAll('.yearly-dropdown')
    cardDropdowns.forEach((dropdown) => {
        dropdown.classList.toggle('hidden')
    })
    //change text color
    const monthlyText = document.querySelector('#monthly')
    const yearlyText = document.querySelector('#yearly')
    yearlyText.classList.toggle('active-text')
    monthlyText.classList.toggle('active-text')

    isPlanTimeClicked = !isPlanTimeClicked;

    updatePlanTime(isPlanTimeClicked);

    //update the text content in the plan section
    const arcadePrice = document.querySelector('#arcadePrice')
    const advancedPrice = document.querySelector('#advancedPrice')
    const proPrice = document.querySelector('#proPrice')

    if (isPlanTimeClicked) {
        arcadePrice.textContent = '$90/yr'
        advancedPrice.textContent = '$120/yr'
        proPrice.textContent = '$150/yr'
        planTimeDisplay = '/yr'
    } else {
        arcadePrice.textContent = '$9/mo'
        advancedPrice.textContent = '$12/mo'
        proPrice.textContent = '$15/mo'
        planTimeDisplay = '/mo'
    }
    console.log(isPlanTimeClicked)
})

// choosing the plan type and passing the data-plan attribute
const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    card.addEventListener('click', (e) => {
        cards.forEach((otherCard) => {
            otherCard.classList.remove('active-card');
        });

        card.classList.add('active-card');

        const dataPlan = card.getAttribute('data-plan');
        const dataPrice = card.getAttribute('data-price')
        selectedPlan = dataPlan
        planPrice = dataPrice
        console.log(planPrice)
    });
});

// picking add ons
const onlineService = document.querySelector('#onlineService')
onlineService.addEventListener('click', () => {
    const containerChosen = onlineService.closest('.radio-container')
    containerChosen.classList.toggle('active-card')
    isOnlineClicked = !isOnlineClicked;
})

const storage = document.querySelector('#storage')
storage.addEventListener('click', () => {
    const containerChosen = storage.closest('.radio-container')
    containerChosen.classList.toggle('active-card')
    isStorageClicked = !isStorageClicked;
})

const custom = document.querySelector('#custom')
custom.addEventListener('click', () => {
    const containerChosen = custom.closest('.radio-container')
    containerChosen.classList.toggle('active-card')
    isCustomClicked = !isCustomClicked;
})

// change the text content of the add ons section depending on the year/month click
function updatePlanTime(isPlanTimeClicked) {
    const onlineAddOn = document.querySelector('#onlineAddOn')
    const storageAddOn = document.querySelector('#storageAddOn')
    const customAddOn = document.querySelector('#customAddOn')
    if (isPlanTimeClicked) {
        onlineAddOn.textContent = '+10/yr'
        storageAddOn.textContent = '+$20/yr'
        customAddOn.textContent = '+$20/yr'
    } else {
        onlineAddOn.textContent = '+1/mo'
        storageAddOn.textContent = '+$2/mo'
        customAddOn.textContent = '+$2/mo'
    }
}

// Get the booleans to update static textContent in Summary
function summaryDisplay() {
    const planDisplay = document.querySelector('#plan')
    const planTimeDisplay = document.querySelector('#planTime')
    const planCostDisplay = document.querySelector('#planCost')
    const totalsPlanTimeDisplay = document.querySelector('#totalText')
    const totalTimeDisplay = document.querySelector('#totalTime')

    if (isPlanTimeClicked === false) {
        planTime = '(monthly)'
        totalsPlanTimeDisplay.textContent = 'Total(per month)'
        totalTimeDisplay.textContent = '/mo'
        planTimeSummaryDisplay = '/mo'
    } else {
        planTime = '(yearly)'
        planPrice = planPrice * 10
        totalsPlanTimeDisplay.textContent = 'Total(per year)'
        totalTimeDisplay.textContent = '/yr'
        planTimeSummaryDisplay = '/yr'
    }

    planDisplay.textContent = `${selectedPlan} ${planTime}`
    planTimeDisplay.textContent = planTimeSummaryDisplay
    planCostDisplay.textContent = planPrice
    total = planPrice
}

// html template for the addons on summary screen
function appendAddOnsTemplate(addOn, price) {
    const addOnTemplate = document.createElement('div');
    addOnTemplate.classList.add('append-plan');
    addOnTemplate.innerHTML = `
        <div class="append-plan-title">
            <p>${addOn}</p>
        </div>
        <div class="plan-cost">
            <p>${price}</p>
        </div>
    `;
    return addOnTemplate;
}

// appending the chosen add ons to summary screen and updating the total
function updateSummaryDisplay() {
    const planDisplay = document.querySelector('.final-container');

    if (isStorageClicked) {
        addOn = 'Larger storage';
        if (!isPlanTimeClicked) {
            price = '+$2/yr';
            total = parseInt(total) + 2
        } else {
            price = '+$20/yr';
            total = parseInt(total) + 20
        }
        planDisplay.appendChild(appendAddOnsTemplate(addOn, price));
    }

    if (isOnlineClicked) {
        addOn = 'Online service';
        if (!isPlanTimeClicked) {
            price = '+$1/yr';
            total = parseInt(total) + 1
        } else {
            price = '+$10/yr';
            total = parseInt(total) + 10
        }
        planDisplay.appendChild(appendAddOnsTemplate(addOn, price));
    }

    if (isCustomClicked) {
        addOn = 'Customizable profile';
        if (!isPlanTimeClicked) {
            price = '+$2/yr';
            total = parseInt(total) + 2
        } else {
            price = '+$20/yr'
            total = parseInt(total) + 20
        }
        planDisplay.appendChild(appendAddOnsTemplate(addOn, price));
    }
    const totalDisplay = document.querySelector('#total')
    totalDisplay.textContent = total
}

//remove the chosen plans from the screen incase the user goes back
function removeAppendedPlans() {
    const finalContainer = document.querySelector('.final-container');
    const appendedPlans = finalContainer.querySelectorAll('.append-plan');
    const totalDisplay = document.querySelector('#total')


    // Iterate over the appended plans and remove them, subtracting their prices from the total
    appendedPlans.forEach((plan) => {
        const priceElement = plan.querySelector('.plan-cost p');
        const priceText = priceElement.textContent;
        const price = parseInt(priceText.replace(/\D/g, ''), 10);
        total -= price;
        plan.remove();
    });
}
// Function to handle screen transitions
function handleScreenTransition(fromSectionId, toSectionId) {
    const fromSection = document.querySelector(fromSectionId);
    const toSection = document.querySelector(toSectionId);

    fromSection.classList.add('hidden');
    toSection.classList.remove('hidden');
}

// Buttons for plan section
const nextBtnPlan = document.querySelector('#nextBtnPlan');
nextBtnPlan.addEventListener('click', () => {
    handleScreenTransition('#planSection', '#addOnsSection');
    summaryDisplay();
});

const backBtnPlan = document.querySelector('#backBtnPlan');
backBtnPlan.addEventListener('click', () => {
    handleScreenTransition('#planSection', '#infoSection');
});

// Buttons for add ons section
const nextBtnAddOns = document.querySelector('#nextBtnAddOns');
nextBtnAddOns.addEventListener('click', () => {
    handleScreenTransition('#addOnsSection', '#summarySection');
    updateSummaryDisplay()
});

const backBtnAddOns = document.querySelector('#backBtnAddOns');
backBtnAddOns.addEventListener('click', () => {
    handleScreenTransition('#addOnsSection', '#planSection');
});

// Buttons for summary section
const confirmBtn = document.querySelector('#confirmBtn');
confirmBtn.addEventListener('click', () => {
    handleScreenTransition('#summarySection', '#finalSection');
});

const backBtnSummary = document.querySelector('#backBtnSummary');
backBtnSummary.addEventListener('click', () => {
    handleScreenTransition('#summarySection', '#addOnsSection');
    removeAppendedPlans();
});

const changeBtn = document.querySelector('#changeBtn');
changeBtn.addEventListener('click', () => {
    removeAppendedPlans();
    handleScreenTransition('#summarySection', '#planSection');
});




