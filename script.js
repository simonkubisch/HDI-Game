// Data based on UN 2021/2022 Report - ~191 Countries
// German Names, ISO alpha-2 Code (lowercase), and HDI value.
const countriesDataInput = [
    { name: "Schweiz", code: "ch", hdi: 0.962 },
    { name: "Norwegen", code: "no", hdi: 0.961 },
    { name: "Island", code: "is", hdi: 0.959 },
    { name: "Hongkong", code: "hk", hdi: 0.952 },
    { name: "Australien", code: "au", hdi: 0.951 },
    { name: "Dänemark", code: "dk", hdi: 0.948 },
    { name: "Schweden", code: "se", hdi: 0.947 },
    { name: "Irland", code: "ie", hdi: 0.945 },
    { name: "Deutschland", code: "de", hdi: 0.942 },
    { name: "Niederlande", code: "nl", hdi: 0.941 },
    { name: "Finnland", code: "fi", hdi: 0.940 },
    { name: "Singapur", code: "sg", hdi: 0.939 },
    { name: "Belgien", code: "be", hdi: 0.937 },
    { name: "Neuseeland", code: "nz", hdi: 0.937 },
    { name: "Kanada", code: "ca", hdi: 0.936 },
    { name: "Liechtenstein", code: "li", hdi: 0.935 },
    { name: "Luxemburg", code: "lu", hdi: 0.930 },
    { name: "Vereinigtes Königreich", code: "gb", hdi: 0.929 },
    { name: "Japan", code: "jp", hdi: 0.925 },
    { name: "Südkorea", code: "kr", hdi: 0.925 },
    { name: "Vereinigte Staaten", code: "us", hdi: 0.921 },
    { name: "Israel", code: "il", hdi: 0.919 },
    { name: "Malta", code: "mt", hdi: 0.918 },
    { name: "Slowenien", code: "si", hdi: 0.918 },
    { name: "Österreich", code: "at", hdi: 0.916 },
    { name: "Vereinigte Arabische Emirate", code: "ae", hdi: 0.911 },
    { name: "Spanien", code: "es", hdi: 0.905 },
    { name: "Frankreich", code: "fr", hdi: 0.903 },
    { name: "Zypern", code: "cy", hdi: 0.896 },
    { name: "Italien", code: "it", hdi: 0.895 },
    { name: "Estland", code: "ee", hdi: 0.890 },
    { name: "Tschechien", code: "cz", hdi: 0.889 }, // Tschechische Republik
    { name: "Griechenland", code: "gr", hdi: 0.887 },
    { name: "Polen", code: "pl", hdi: 0.876 },
    { name: "Bahrain", code: "bh", hdi: 0.875 },
    { name: "Litauen", code: "lt", hdi: 0.875 },
    { name: "Saudi-Arabien", code: "sa", hdi: 0.875 },
    { name: "Portugal", code: "pt", hdi: 0.866 },
    { name: "Lettland", code: "lv", hdi: 0.863 },
    { name: "Andorra", code: "ad", hdi: 0.858 },
    { name: "Kroatien", code: "hr", hdi: 0.858 },
    { name: "Chile", code: "cl", hdi: 0.855 },
    { name: "Katar", code: "qa", hdi: 0.855 },
    { name: "Slowakei", code: "sk", hdi: 0.848 },
    { name: "Ungarn", code: "hu", hdi: 0.846 },
    { name: "Argentinien", code: "ar", hdi: 0.842 },
    { name: "Türkei", code: "tr", hdi: 0.838 },
    { name: "Montenegro", code: "me", hdi: 0.832 },
    { name: "Kuwait", code: "kw", hdi: 0.831 },
    { name: "Brunei", code: "bn", hdi: 0.829 },
    { name: "Russland", code: "ru", hdi: 0.822 },
    { name: "Rumänien", code: "ro", hdi: 0.821 },
    { name: "Oman", code: "om", hdi: 0.816 },
    { name: "Bahamas", code: "bs", hdi: 0.812 },
    { name: "Kasachstan", code: "kz", hdi: 0.811 },
    { name: "Trinidad und Tobago", code: "tt", hdi: 0.810 },
    { name: "Costa Rica", code: "cr", hdi: 0.809 },
    { name: "Uruguay", code: "uy", hdi: 0.809 },
    { name: "Belarus", code: "by", hdi: 0.808 }, // Weißrussland
    { name: "Panama", code: "pa", hdi: 0.805 },
    { name: "Malaysia", code: "my", hdi: 0.803 },
    { name: "Georgien", code: "ge", hdi: 0.802 },
    { name: "Mauritius", code: "mu", hdi: 0.802 },
    { name: "Serbien", code: "rs", hdi: 0.802 },
    { name: "Thailand", code: "th", hdi: 0.800 },
    { name: "Albanien", code: "al", hdi: 0.796 },
    { name: "Bulgarien", code: "bg", hdi: 0.795 },
    { name: "Grenada", code: "gd", hdi: 0.793 },
    { name: "Barbados", code: "bb", hdi: 0.788 },
    { name: "Antigua und Barbuda", code: "ag", hdi: 0.788 },
    { name: "Seychellen", code: "sc", hdi: 0.785 },
    { name: "Sri Lanka", code: "lk", hdi: 0.782 },
    { name: "Bosnien und Herzegowina", code: "ba", hdi: 0.780 },
    { name: "St. Kitts und Nevis", code: "kn", hdi: 0.777 },
    { name: "Iran", code: "ir", hdi: 0.774 },
    { name: "Ukraine", code: "ua", hdi: 0.773 },
    { name: "Nordmazedonien", code: "mk", hdi: 0.770 },
    { name: "China", code: "cn", hdi: 0.768 },
    { name: "Dominikanische Republik", code: "do", hdi: 0.767 },
    { name: "Moldau", code: "md", hdi: 0.767 }, // Republik Moldau
    { name: "Palau", code: "pw", hdi: 0.767 },
    { name: "Kuba", code: "cu", hdi: 0.764 },
    { name: "Peru", code: "pe", hdi: 0.762 },
    { name: "Armenien", code: "am", hdi: 0.759 },
    { name: "Mexiko", code: "mx", hdi: 0.758 },
    { name: "Kolumbien", code: "co", hdi: 0.752 },
    { name: "Brasilien", code: "br", hdi: 0.754 },
    { name: "Aserbaidschan", code: "az", hdi: 0.745 },
    { name: "Algerien", code: "dz", hdi: 0.745 },
    { name: "Malediven", code: "mv", hdi: 0.747 },
    { name: "Ecuador", code: "ec", hdi: 0.740 },
    { name: "Mongolei", code: "mn", hdi: 0.739 },
    { name: "Libanon", code: "lb", hdi: 0.709 },
    { name: "Ägypten", code: "eg", hdi: 0.731 },
    { name: "Turkmenistan", code: "tm", hdi: 0.745 },
    { name: "Dominica", code: "dm", hdi: 0.720 },
    { name: "St. Lucia", code: "lc", hdi: 0.715 },
    { name: "Fidschi", code: "fj", hdi: 0.718 },
    { name: "Libyen", code: "ly", hdi: 0.718 },
    { name: "Usbekistan", code: "uz", hdi: 0.727 },
    { name: "St. Vincent und die Grenadinen", code: "vc", hdi: 0.751 },
    { name: "Jordanien", code: "jo", hdi: 0.720 },
    { name: "Paraguay", code: "py", hdi: 0.717 },
    { name: "Palästina", code: "ps", hdi: 0.715 }, // Staat Palästina
    { name: "Tonga", code: "to", hdi: 0.745 },
    { name: "Tunesien", code: "tn", hdi: 0.731 },
    { name: "Suriname", code: "sr", hdi: 0.714 },
    { name: "Indonesien", code: "id", hdi: 0.705 },
    { name: "Samoa", code: "ws", hdi: 0.707 },
    { name: "Jamaika", code: "jm", hdi: 0.709 },
    { name: "Südafrika", code: "za", hdi: 0.713 },
    { name: "Bolivien", code: "bo", hdi: 0.692 },
    { name: "Gabun", code: "ga", hdi: 0.693 },
    { name: "Philippinen", code: "ph", hdi: 0.699 },
    { name: "Botsuana", code: "bw", hdi: 0.693 },
    { name: "Marshallinseln", code: "mh", hdi: 0.708 },
    { name: "Venezuela", code: "ve", hdi: 0.690 },
    { name: "Irak", code: "iq", hdi: 0.673 },
    { name: "Belize", code: "bz", hdi: 0.683 },
    { name: "Marokko", code: "ma", hdi: 0.683 },
    { name: "Kirgisistan", code: "kg", hdi: 0.692 },
    { name: "Vietnam", code: "vn", hdi: 0.703 },
    { name: "Guyana", code: "gy", hdi: 0.714 },
    { name: "Tadschikistan", code: "tj", hdi: 0.685 },
    { name: "El Salvador", code: "sv", hdi: 0.675 },
    { name: "Nicaragua", code: "ni", hdi: 0.667 },
    { name: "Bhutan", code: "bt", hdi: 0.666 },
    { name: "Namibia", code: "na", hdi: 0.615 },
    { name: "Bangladesch", code: "bd", hdi: 0.661 },
    { name: "Tuvalu", code: "tv", hdi: 0.641 },
    { name: "Indien", code: "in", hdi: 0.633 },
    { name: "Ghana", code: "gh", hdi: 0.632 },
    { name: "Mikronesien", code: "fm", hdi: 0.628 }, // Föderierte Staaten von Mikronesien
    { name: "Guatemala", code: "gt", hdi: 0.627 },
    { name: "Kiribati", code: "ki", hdi: 0.628 },
    { name: "Honduras", code: "hn", hdi: 0.621 },
    { name: "São Tomé und Príncipe", code: "st", hdi: 0.618 },
    { name: "Kap Verde", code: "cv", hdi: 0.662 }, // Cabo Verde
    { name: "Kambodscha", code: "kh", hdi: 0.593 },
    { name: "Simbabwe", code: "zw", hdi: 0.593 },
    { name: "Angola", code: "ao", hdi: 0.586 },
    { name: "Myanmar", code: "mm", hdi: 0.585 },
    { name: "Syrien", code: "sy", hdi: 0.577 },
    { name: "Kamerun", code: "cm", hdi: 0.576 },
    { name: "Kenia", code: "ke", hdi: 0.601 },
    { name: "Republik Kongo", code: "cg", hdi: 0.571 },
    { name: "Sambia", code: "zm", hdi: 0.565 },
    { name: "Äquatorialguinea", code: "gq", hdi: 0.568 },
    { name: "Eswatini", code: "sz", hdi: 0.597 },
    { name: "Nepal", code: "np", hdi: 0.602 },
    { name: "Laos", code: "la", hdi: 0.607 },
    { name: "Vanuatu", code: "vu", hdi: 0.607 },
    { name: "Papua-Neuguinea", code: "pg", hdi: 0.558 },
    { name: "Komoren", code: "km", hdi: 0.586 },
    { name: "Osttimor", code: "tl", hdi: 0.566 }, // Timor-Leste
    { name: "Haiti", code: "ht", hdi: 0.535 },
    { name: "Uganda", code: "ug", hdi: 0.525 },
    { name: "Salomonen", code: "sb", hdi: 0.564 }, // Solomon Islands
    { name: "Ruanda", code: "rw", hdi: 0.534 },
    { name: "Benin", code: "bj", hdi: 0.504 },
    { name: "Tansania", code: "tz", hdi: 0.549 },
    { name: "Pakistan", code: "pk", hdi: 0.544 },
    { name: "Togo", code: "tg", hdi: 0.539 },
    { name: "Nigeria", code: "ng", hdi: 0.535 },
    { name: "Mauretanien", code: "mr", hdi: 0.540 },
    { name: "Elfenbeinküste", code: "ci", hdi: 0.550 }, // Cote d'Ivoire
    { name: "Lesotho", code: "ls", hdi: 0.514 },
    { name: "Senegal", code: "sn", hdi: 0.499 },
    { name: "Dschibuti", code: "dj", hdi: 0.509 },
    { name: "Sudan", code: "sd", hdi: 0.510 },
    { name: "Madagaskar", code: "mg", hdi: 0.487 },
    { name: "Gambia", code: "gm", hdi: 0.495 },
    { name: "Äthiopien", code: "et", hdi: 0.498 },
    { name: "Malawi", code: "mw", hdi: 0.512 },
    { name: "Guinea-Bissau", code: "gw", hdi: 0.483 },
    { name: "Liberia", code: "lr", hdi: 0.481 },
    { name: "DR Kongo", code: "cd", hdi: 0.479 }, // Demokratische Republik Kongo
    { name: "Guinea", code: "gn", hdi: 0.465 },
    { name: "Afghanistan", code: "af", hdi: 0.478 },
    { name: "Sierra Leone", code: "sl", hdi: 0.477 },
    { name: "Eritrea", code: "er", hdi: 0.475 },
    { name: "Jemen", code: "ye", hdi: 0.455 },
    { name: "Burkina Faso", code: "bf", hdi: 0.449 },
    { name: "Mosambik", code: "mz", hdi: 0.446 },
    { name: "Mali", code: "ml", hdi: 0.410 },
    { name: "Burundi", code: "bi", hdi: 0.426 },
    { name: "Zentralafrikanische Republik", code: "cf", hdi: 0.404 },
    { name: "Niger", code: "ne", hdi: 0.400 },
    { name: "Tschad", code: "td", hdi: 0.394 },
    { name: "Südsudan", code: "ss", hdi: 0.385 }
];


// --- Sort data and add ranks (remains the same) ---
const countriesData = countriesDataInput
    .filter(c => c.code && typeof c.hdi === 'number' && !isNaN(c.hdi))
    .sort((a, b) => b.hdi - a.hdi)
    .map((country, index) => ({
        ...country,
        rank: index + 1
    }));

const totalCountries = countriesData.length;


// --- DOM Elements (add marker) ---
const countryNameEl = document.getElementById('country-name');
const countryFlagEl = document.getElementById('country-flag');
const rankSlider = document.getElementById('rank-slider');
const sliderValueEl = document.getElementById('slider-value');
const maxRankEl = document.getElementById('max-rank');
const submitGuessBtn = document.getElementById('submit-guess');
const feedbackEl = document.getElementById('feedback');
const correctAnswerEl = document.getElementById('correct-answer');
const nextCountryBtn = document.getElementById('next-country');
const subtitleEl = document.querySelector('.subtitle');
const correctAnswerMarker = document.getElementById('correct-answer-marker'); // Get marker element

let currentCountry = null;
let availableCountries = [...countriesData];

// --- Functions ---
function getRandomCountry() { // (Logic remains the same)
     if (availableCountries.length === 0) {
        if (countriesData.length === 0) return null;
        availableCountries = [...countriesData];
        const lastCountryName = currentCountry ? currentCountry.name : null;
        if (lastCountryName) {
            availableCountries = availableCountries.filter(c => c.name !== lastCountryName);
            if (availableCountries.length === 0 && countriesData.length > 0) {
                 availableCountries = [...countriesData];
            }
        }
    }
    if (availableCountries.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * availableCountries.length);
    const selectedCountry = availableCountries[randomIndex];
    availableCountries.splice(randomIndex, 1);
    return selectedCountry;
}

function displayCountry(country) {
    if (!country) { // (Error handling remains)
        countryNameEl.textContent = "Keine Länder geladen!";
        countryFlagEl.src = ""; countryFlagEl.alt = "";
        rankSlider.disabled = true; submitGuessBtn.disabled = true;
        return;
    }

    currentCountry = country;
    countryNameEl.textContent = country.name; // Display German name
    countryFlagEl.src = `https://flagcdn.com/w320/${country.code.toLowerCase()}.png`;
    countryFlagEl.alt = `Flagge von ${country.name}`; // German alt text
    countryFlagEl.onerror = () => { // (Error handling remains)
        console.warn(`Flagge nicht gefunden für ${country.name} (${country.code})`);
        countryFlagEl.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        countryFlagEl.alt = `Flagge für ${country.name} nicht verfügbar`;
    };

    // Reset UI
    feedbackEl.textContent = ''; feedbackEl.className = '';
    correctAnswerEl.textContent = ''; correctAnswerEl.classList.add('hidden');
    correctAnswerMarker.classList.add('hidden'); // Hide marker

    // Slider Update (remains the same)
    rankSlider.disabled = false;
    rankSlider.max = totalCountries;
    maxRankEl.textContent = totalCountries;
    const midPoint = Math.ceil(totalCountries / 2);
    rankSlider.value = midPoint;
    sliderValueEl.textContent = midPoint;

    submitGuessBtn.disabled = false;
    nextCountryBtn.classList.add('hidden');
}

function checkGuess() {
    const userGuess = parseInt(rankSlider.value, 10);
    if (!currentCountry) return;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > totalCountries) {
        feedbackEl.textContent = `Ungültige Eingabe. Nutze den Regler (1-${totalCountries}).`; // German feedback
        feedbackEl.className = 'incorrect';
        return;
    }

    const correctRank = currentCountry.rank;
    rankSlider.disabled = true;
    submitGuessBtn.disabled = true;
    nextCountryBtn.classList.remove('hidden');

    // --- Show Correct Answer Marker ---
    const sliderWidth = rankSlider.offsetWidth;
    // Calculate percentage position (0 to 1)
    // Adjust for 1-based rank vs 0-based slider: (rank - 1) / (maxRank - 1)
    const percentage = (correctRank - 1) / (totalCountries - 1);
    const markerPosition = percentage * sliderWidth;

    correctAnswerMarker.style.left = `${markerPosition}px`;
    correctAnswerMarker.classList.remove('hidden');
    // --- End Marker Logic ---

    // German Correct Answer Text
    correctAnswerEl.textContent = `Korrekter Rang: ${correctRank} / ${totalCountries} | HDI: ${currentCountry.hdi.toFixed(3)}`;
    correctAnswerEl.classList.remove('hidden');

    // German Feedback
    if (userGuess === correctRank) {
        feedbackEl.textContent = "Korrekt! 🎉";
        feedbackEl.className = 'correct';
    } else {
        const difference = userGuess - correctRank;
        const direction = difference > 0 ? 'niedriger' : 'höher'; // German direction
        const closenessThreshold1 = totalCountries * 0.04;
        const closenessThreshold2 = totalCountries * 0.1;
        let closenessText = '';
        if (Math.abs(difference) < closenessThreshold1) {
            closenessText = 'Sehr nah! ';
        } else if (Math.abs(difference) < closenessThreshold2) {
            closenessText = 'Nah dran! ';
        }

        feedbackEl.textContent = `Falsch. ${closenessText}Der tatsächliche Rang ist ${direction}.`;
        feedbackEl.className = 'incorrect';
    }
}

function loadNextCountry() { // (Logic remains the same)
    currentCountry = getRandomCountry();
    displayCountry(currentCountry);
}

// --- Event Listeners (remain the same) ---
rankSlider.addEventListener('input', () => {
    sliderValueEl.textContent = rankSlider.value;
});
submitGuessBtn.addEventListener('click', checkGuess);
nextCountryBtn.addEventListener('click', loadNextCountry);
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        if (!submitGuessBtn.disabled) { checkGuess(); }
        else if (!nextCountryBtn.classList.contains('hidden')) { loadNextCountry(); }
    }
});

// --- Initial Load ---
window.onload = () => {
    if (subtitleEl) { // Update subtitle with German text
         subtitleEl.textContent = `Nutze den Schieberegler, um den Rang des Landes von ${totalCountries} einbezogenen Ländern zu raten (1 ist der höchste HDI).`;
    }
    // (Rest of initial load logic remains)
    if (maxRankEl) { maxRankEl.textContent = totalCountries > 0 ? totalCountries : '?'; }
    if (rankSlider) { rankSlider.max = totalCountries > 0 ? totalCountries : 1; }
    loadNextCountry();
};