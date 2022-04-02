function buttonClicked(){
  // declaring variables and converting them to floats
  let valueA = parseFloat(document.getElementById("a-value").value)
  let valueB = parseFloat(document.getElementById("b-value").value)
  let valueC = parseFloat(document.getElementById("c-value").value)

  const NEGATIVE_B = (0 - valueB)
  const B_SQUARED = (valueB ** 2)
  const SECOND_THING_IN_SQRT = (4 * valueA * valueC)

  // temporary print to make sure there's no bugs
  document.getElementById('test').innerHTML = "your value is: " + NEGATIVE_B + "." +  B_SQUARED  + "." + SECOND_THING_IN_SQRT
}