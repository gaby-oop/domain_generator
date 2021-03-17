//*primer event q ayuda al brosser*//

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-domain").innerHTML = domaingGenarator();
  });
  console.log("Hello Rigo from the console! "); 
};

//func./==>//
let domaingGenarator = () => {
  let prim = ["the", "our"];
  let secum = ["great", "big"];
  let trem = ["jogger", "raccon", "limon", "apple"];
  let comm = [".com", ".net", ".us", ".io", ".es"];

  let prim1 = [Math.floor(Math.random() * prim.length)];
  let secum1 = [Math.floor(Math.random() * secum.length)];
  let trem1 = [Math.floor(Math.random() * trem.length)];
  let comm1 = [Math.floor(Math.random() * comm.length)];

  return (
    prim[prim1] + secum[secum1] + trem[trem1] +  comm[comm1]
  );
};
