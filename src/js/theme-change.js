    const saveLs = (key, value) => {
    try {
        const themeState = JSON.stringify(value);
        localStorage.setItem(key, themeState);
    } catch (error) {
        console.error('Set state error: ', error.message);
    }
    };

    const loadLs = key => {
    try {
        const themeState = localStorage.getItem(key);
        return themeState === null ? undefined : JSON.parse(themeState);
    } catch (error) {
        console.error('Get state error: ', error.message);
    }
    };


const themeBtn = document.getElementById('toggle-theme-btn');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const filmCard = document.querySelector('.gallery-films__item');



const themeValue = loadLs('theme') ? loadLs('theme') : 'light';
saveLs('theme', themeValue);
document.body.classList.add(themeValue);
if (themeValue === 'light') {
	moon.style.visibility = 'hidden';
} else {
	sun.style.visibility = 'hidden';
}
themeBtn.addEventListener('click', (e) => {
	e.preventDefault()
	const val = loadLs('theme');
	if (val === 'light') {
        document.body.classList.add('dark');
        
		sun.style.visibility = 'hidden';
		moon.style.visibility = 'visible';
		saveLs('theme', 'dark');
	} else {
		document.body.classList.remove('dark');

		moon.style.visibility = 'hidden';
		sun.style.visibility = 'visible';
		saveLs('theme', 'light');
	}
});