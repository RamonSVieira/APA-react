import "./hamburger.css";

export function Hamburger() {
  function showMenu() {
    const menu = document.querySelector(".menu.menu1");
    const body = document.querySelector("body");

    menu?.addEventListener("click", clickOnHamburguer);

    function clickOnHamburguer() {
      body?.classList.toggle("menu-expanded");
    }

    menu?.addEventListener("click", () => {
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        console.log("adicionando classe ativo");
      } else {
        menu.classList.add("active");
        console.log("removendo classe ativo");
      }
    });
  }

  return (
    <div className="menu menu1" onClick={showMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
