let total = 0

document.querySelector('#fruits').addEventListener('click', fruitsUn)

// ***************** DOM ADDITIONS ********************************
document.querySelector('#bananas').addEventListener('click', Add5)
document.querySelector('#bananas1').addEventListener('click', Add10)
document.querySelector('#bananas2').addEventListener('click', Add15)
document.querySelector('#bananas3').addEventListener('click', Add20)
document.querySelector('#bananas4').addEventListener('click', Add25)
// ***************** DOM SUBSTRACTION ********************************
document.querySelector('#soursop').addEventListener('click', Sub5)
document.querySelector('#soursop1').addEventListener('click', Sub10)
document.querySelector('#soursop2').addEventListener('click', Sub15)
document.querySelector('#soursop3').addEventListener('click', Sub20)
document.querySelector('#soursop4').addEventListener('click', Sub25)


// ******************** FUNCTION ***************************
function fruitsUn() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}
// **************** FUNCTION ABOUT ADDITION ******************************
function Add5() {
  total = total + 5
  document.querySelector('#placeToPutResult').innerText = total
}
function Add10() {
  total = total + 10
  document.querySelector('#placeToPutResult').innerHTML = total
}
function Add15() {
  total = total + 15
  document.querySelector('#placeToPutResult').innerHTML = total
}
function Add20() {
  total = total + 20
  document.querySelector('#placeToPutResult').innerHTML = total
}
function Add25() {
  total = total + 25
  document.querySelector('#placeToPutResult').innerHTML = total
}


// **************** FUNCTION ABOUT SUBSTRACTION ***************************
function Sub5() {
  total = total - 5
  document.querySelector('#placeToPutResult').innerHTML = total
  }
  function Sub10() {
    total = total - 10
    document.querySelector('#placeToPutResult').innerHTML = total
    }
    function Sub15() {
      total = total - 15
      document.querySelector('#placeToPutResult').innerHTML = total
      }
      function Sub20() {
        total = total - 20
        document.querySelector('#placeToPutResult').innerHTML = total
        }
        function Sub25() {
          total = total - 25
          document.querySelector('#placeToPutResult').innerHTML = total
          }


