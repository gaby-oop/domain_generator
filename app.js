//*primer event q ayud al brosser*//
window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-domain").innerHTML = domaingGenarator();
  });
  console.log("Hello Rigo from the console! "); 
};

//func./==>
let domaingGenarator = () => {
  let prom = ["the", "our"];
  let sust = ["great", "big"];
  let adjv = ["jogger", "raccon", "limon", "apple"];
  let comm = [".com", ".net", ".us", ".io", ".es"];

//[Math.floor(Math.random/aleatorio
  let prim1 = [Math.floor(Math.random() * prom.length)];
  let secum1 = [Math.floor(Math.random() * sust.length)];
  let adjv2 = [Math.floor(Math.random() * adjv.length)];
  let comm1 = [Math.floor(Math.random() * comm.length)];

  return (
    prom[prim1] + sust[secum1] + adjv[adjv2] +  comm[comm1]
  );
};
