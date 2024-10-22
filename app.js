
/**
 * Gets the amount if it exists, otherwise returns null
 * @returns {number || null} the amount as a number, or null if empty
 */
function getAmount() {
    let amount = document.getElementById(`amount`).value;
    if (amount === "") {
        return null;
    }
    amount = parseInt(amount);
    return amount;
}

/**
 * Gets the from unit if it is specified, otherwise returns null
 * @returns {string || null} the unit as a string, or null if unspecified
 */
function getFromUnit() {
    const fromUnit = document.getElementById(`op-unit-from`).value;
    if (fromUnit === "Please specify a unit") {
        return null;
    }
    return fromUnit;
}

/**
 * Gets the to unit if it is specified, otherwise returns null
 * @returns {string || null} the unit as a string, or null if unspecified
 */
function getToUnit() {
    const toUnit = document.getElementById(`op-unit-to`).value;
    if (toUnit === "Please specify a unit") {
        return null;
    }
    return toUnit;
}

/**
 * This function is called whenever the user presses the "Convert!" button.
 * It should alert the user if any of the fields are null or if the amount is negative.
 * Otherwise, it should call getResult and alert the user of the result.
 * e.g. "2 Pint is equal to 4 Cup"
 */
function convert() {
   const amount = getAmount();
   const fromUnit = getFromUnit();
   const toUnit = getToUnit();

   if (amount === null || fromUnit === null || toUnit === null) {
    alert("Please complete all fields before continuing!");
    
   }
    
   else if (amount < 0) {
    alert("Please enter a positive amount!")
  
   }

   else {
    const result = getResult(amount, fromUnit, toUnit);
    alert (amount + " " + fromUnit + " Is equal to " + result + " " + toUnit);
   }
}

/**
 * This function should take the amount, fromUnit, and toUnit, and
 * return the result of the conversion. You should use the
 * getUnitInFlOz function in your calculation.
 * 
 * e.g. arguments of 2, "Pint", "Cup" should return 4
 * 
 * @param {number} amount The amount to convert
 * @param {string} fromUnit The unit we are coming from
 * @param {string} toUnit The unit we are going to
 * @returns {number} the resulting amount, in toUnit units
 */
function getResult(amount, fromUnit, toUnit) {
    const fromInFlOz = getUnitInFlOz(fromUnit);
    const toInFlOz = getUnitInFlOz(toUnit);
    const totalFlOz = amount * fromInFlOz/toInFlOz;
    return totalFlOz;
}

/**
 * Gets the number of fl oz in the given unit
 * @param {string} unit the unit, e.g. "Fl Oz", "Cup", etc.
 * @returns {number || null} the number of fl oz or null if invalid unit
 */
function getUnitInFlOz(unit) {
    if (unit === 'Fl Oz') {
        return 1;
    } else if (unit === 'Cup') {
        return 8;
    } else if (unit === 'Pint') {
        return 16;
    } else if (unit === 'Quart') {
        return 32;
    } else if (unit === 'Gallon') {
        return 128;
    } else {
        return null;
    }
}


