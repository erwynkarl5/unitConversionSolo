     const inputEl = document.getElementById('unit-input')
        const convertBtn = document.getElementById('convert-btn')
        const lengthEl = document.getElementById('length-el')
        const volumeEl = document.getElementById('volume-el')
        const massEl = document.getElementById('mass-el')

      
      convertBtn.addEventListener ('click', function ()  {
        const baseValue = Number(inputEl.value)
        const feet = (baseValue * 3.281).toFixed(3)
        const meters = (baseValue / 3.281).toFixed(3)
        const liters = (baseValue / 0.264).toFixed(3)
        const gallons = (baseValue * 0.264).toFixed(3)
        const pounds = (baseValue * 2.204).toFixed(3)
        const kilogram = (baseValue / 2.204).toFixed(3)
 
        lengthEl.innerHTML = `${baseValue} meters = ${feet} feet | ${baseValue} feet = ${meters} meters`
        volumeEl.innerHTML = `${baseValue} liters = ${gallons} gallons | ${baseValue} gallons = ${liters} liters`
        massEl.innerHTML = `${baseValue} Kilograms = ${pounds} pounds | ${baseValue} Pounds = ${kilogram} kilogram`
      })
        
     