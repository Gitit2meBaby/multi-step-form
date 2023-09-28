
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

    isPlanTimeClicked = !isPlanTimeClicked;

    updatePlanTime(isPlanTimeClicked);

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

console.log(selectedPlan, isPlanTimeClicked, isOnlineClicked, isStorageClicked, isCustomClicked)





// BUTTONS FOR PLAN SECTION
const nextBtnPlan = document.querySelector('#nextBtnPlan')
nextBtnPlan.addEventListener('click', () => {


    const planSelection = document.querySelector('#planSelection')
    const planSection = document.querySelector('#planSection')
    const addOnsSelection = document.querySelector('#addOnsSelection')
    const addOnsSection = document.querySelector('#addOnsSection')

    planSection.classList.add('hidden')
    planSelection.classList.remove('selected')
    addOnsSection.classList.remove('hidden')
    addOnsSelection.classList.add('selected')

    summaryDisplay()
})

const backBtnPlan = document.querySelector('#backBtnPlan')
backBtnPlan.addEventListener('click', () => {
    const infoSelection = document.querySelector('#infoSelection')
    const infoSection = document.querySelector('#infoSection')
    infoSection.classList.remove('hidden')
    infoSelection.classList.add('selected')

    const planSelection = document.querySelector('#planSelection')
    const planSection = document.querySelector('#planSection')
    planSection.classList.add('hidden')
    planSelection.classList.remove('selected')

})


// buttons for add ons section
const nextBtnAddOns = document.querySelector('#nextBtnAddOns')
nextBtnAddOns.addEventListener('click', () => {
    const summarySelection = document.querySelector('#summarySelection')
    const summarySection = document.querySelector('#summarySection')
    const addOnsSelection = document.querySelector('#addOnsSelection')
    const addOnsSection = document.querySelector('#addOnsSection')

    addOnsSection.classList.add('hidden')
    addOnsSelection.classList.remove('selected')
    summarySection.classList.remove('hidden')
    summarySelection.classList.add('selected')

    console.log(selectedPlan, isPlanTimeClicked, isOnlineClicked, isStorageClicked, isCustomClicked)
    updateSummaryDisplay()
})

const backBtnAddOns = document.querySelector('#backBtnAddOns')
backBtnAddOns.addEventListener('click', () => {
    const addOnsSelection = document.querySelector('#addOnsSelection')
    const addOnsSection = document.querySelector('#addOnsSection')

    addOnsSection.classList.add('hidden')
    addOnsSelection.classList.remove('selected')

    const planSelection = document.querySelector('#planSelection')
    const planSection = document.querySelector('#planSection')
    planSection.classList.remove('hidden')
    planSelection.classList.add('selected')

})

// buttons for summary section
const confirmBtn = document.querySelector('#confirmBtn')
confirmBtn.addEventListener('click', () => {

    const summarySection = document.querySelector('#summarySection')
    const finalSection = document.querySelector('#finalSection')
    summarySection.classList.add('hidden')
    finalSection.classList.remove('hidden')

    console.log(selectedPlan, isPlanTimeClicked, isOnlineClicked, isStorageClicked, isCustomClicked)
    summaryDisplay()
})

const backBtnSummary = document.querySelector('#backBtnSummary')
backBtnSummary.addEventListener('click', () => {

    const addOnsSelection = document.querySelector('#addOnsSelection')
    const addOnsSection = document.querySelector('#addOnsSection')

    addOnsSection.classList.remove('hidden')
    addOnsSelection.classList.add('selected')

    const summarySelection = document.querySelector('#summarySelection')
    const summarySection = document.querySelector('#summarySection')
    summarySection.classList.add('hidden')
    summarySelection.classList.remove('selected')
})




