const para = document.getElementsByTagName("p");
let count = 0;
function incr() {
  if (count < 25) {
    count++;
    if (count % 2 == 0) {
      para[0].textContent = "EVEN";
    } else {
      para[0].textContent = "ODD";
    }
    para[1].textContent = count;
    para[2].textContent = "Incremented";
  } else {
    alert("Count cannot be increased more than 25");
  }
}
function decr() {
  if (count > 0) {
    count--;
    if (count % 2 == 0) {
      para[0].textContent = "EVEN";
    } else {
      para[0].textContent = "ODD";
    }
    para[1].textContent = count;
    para[2].textContent = "Decremented";
  } else {
    alert("Value cannot be decreased less than 0");
  }
}
function reset() {
  count = 0;
  para[0].textContent = "";
  para[1].textContent = count;
  para[2].textContent = "";
}
