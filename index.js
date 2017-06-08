function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}


function increaseRankBy(n) {
  var className = document.querySelectorAll('ul.ranked-list li')
  for (var i = 0, l = className.length; i < l; i++) {
  className[i].innerHTML = parseInt(className[i].innerHTML, 10) + n
 }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}
