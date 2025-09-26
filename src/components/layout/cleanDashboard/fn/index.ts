const btnRemove = () => {
    console.log("btnRemove");
    const btn = document.getElementById("btn-hamburguer-loki");
    btn?.classList.remove("active");
}

const toggleAside = () => {
    const container = document.getElementById("container-aside");
    const masterMain = document.getElementById("masterMain");
    container?.classList.toggle("active");
    masterMain?.classList.toggle("active")
}

export {
    toggleAside,
    btnRemove
}