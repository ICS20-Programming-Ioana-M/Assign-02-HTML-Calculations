// Note to self: make sure to mention that if NaN appears, it means theres an imaginary number and therefor the eqation cannot be solved

function buttonClicked(){
  // declaring variables and converting them to floats
  let valueA = parseFloat(document.getElementById("a-value").value)
  let valueB = parseFloat(document.getElementById("b-value").value)
  let valueC = parseFloat(document.getElementById("c-value").value)

  // inputing user's values into formula
  const NEG_B = (0 - valueB) // -b
  const B_SQUARED = (valueB ** 2) //b^2
  const FOUR_A_C = (-4 * valueA * valueC) //4ac
  const TWO_A = (2 * valueA) //2a

  // solving for the root 
  const ROOT = Math.sqrt(B_SQUARED + FOUR_A_C) //√b^a + (-4ac)

  // when subtracted option is calculated
  const NEG_TOP = (NEG_B - ROOT) // -b - √b^a + (-4ac)
  const MINUS_ANS = (NEG_TOP / TWO_A) // -b - √b^a + (-4ac) / 2

  // value for add in equation
  const POS_TOP = (NEG_B + ROOT) // -b + √b^a + (-4ac)
  const ADD_ANS = (POS_TOP / TWO_A) // -b + √b^a + (-4ac) / 2
  
  // temporary print to make sure there's no bugs
  document.getElementById('answer').innerHTML = "x = " + ADD_ANS + ", " + MINUS_ANS

  
}