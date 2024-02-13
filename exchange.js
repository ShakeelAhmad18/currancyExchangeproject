document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').onsubmit = function () {
        const convert=document.querySelector('#convert').value.toUpperCase();
        fetch(`https://v6.exchangerate-api.com/v6/fc0f82e7d0c24dd9de5fe649/latest/${convert}`)
            .then(response => response.json())
            .then(data => {
                const currancy = document.querySelector('#currancy').value.toUpperCase()
                const rate = data.conversion_rates[currancy]
                if (rate !== undefined) {
                    document.querySelector('#result').innerHTML = `1 ${convert} is Equal to ${rate.toFixed(3)} ${currancy}`;
                }
                else {
                    document.querySelector('#result').innerHTML = `invalid Currancy`;
                }
            })
            .catch(error => {
                console.log('error:', error)
            })
        return false
    }
})