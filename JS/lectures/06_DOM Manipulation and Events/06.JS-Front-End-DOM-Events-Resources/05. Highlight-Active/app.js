function focused() {
    const fields = Array.from(document.getElementsByTagName("input"));

    for (const field of fields) {
        field.addEventListener("focus", onFocus);
        field.addEventListener("blur", onBlur);
    }

    function onFocus(event) {
        const divParent = event.currentTarget.parentNode;
        divParent.classList.add("focused");
    }
    
    function onBlur(event) {
        const divParent = event.currentTarget.parentNode;
        divParent.classList.remove("focused");
    }
}