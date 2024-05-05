function validate() {
   const inputField = document.querySelector("#email");

   inputField.addEventListener("change", onChange)

   function onChange(event) {
    const target = event.currentTarget;
    let pattern = /^[a-z]+@[a-z]+.[a-z]+/g;

    if (!pattern.test(target.value)) {
        target.classList.add("error");
    } else {
        target.classList.remove("error"); 
    }
        
   }
}