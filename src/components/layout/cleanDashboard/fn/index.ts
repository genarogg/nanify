const btnRemove = () => {
    console.log("btnRemove");
    const btn = document.getElementById("btn-hamburguer-loki");
    btn?.classList.remove("active");
}

const toggleAside = () => {
    const container = document.getElementById("container-aside");
    container?.classList.toggle("sidebar-header");
}

export {
    toggleAside,
    btnRemove
}