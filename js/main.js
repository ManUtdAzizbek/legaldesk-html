window.onload=function(){

document.getElementById("userAddUser").addEventListener("mouseenter", mouseEnter);
document.getElementById("userAddUser").addEventListener("mouseleave", mouseLeave);
        
    function mouseEnter() {
    document.getElementById("userAddUser").style.width = "max-content";
    }

    function mouseLeave() {
    document.getElementById("userAddUser").style.width = "24px";
    }
  }

  /* Modal window */


  const modalTriggerButtons = document.querySelectorAll("[data-modal-target]");
  const modals = document.querySelectorAll(".modal");
  const modalCloseButtons = document.querySelectorAll(".modal-close");
  
  modalTriggerButtons.forEach(elem => {
    elem.addEventListener("click", event => toggleModal(event.currentTarget.getAttribute("data-modal-target")));
  });
  modalCloseButtons.forEach(elem => {
    elem.addEventListener("click", event => toggleModal(event.currentTarget.closest(".modal").id));
  });
  modals.forEach(elem => {
    elem.addEventListener("click", event => {
      if(event.currentTarget === event.target) toggleModal(event.currentTarget.id);
    });
  });
  
  // Close Modal
  document.addEventListener("keydown", event => {
    if(event.keyCode === 27 && document.querySelector(".modal.modal-show")) {
      toggleModal(document.querySelector(".modal.modal-show").id);
    }
  });
  
  function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
  
    if(getComputedStyle(modal).display==="flex") {
      modal.classList.add("modal-hide");
      setTimeout(() => {
        document.body.style.overflow = "initial";
        modal.classList.remove("modal-show", "modal-hide");
        modal.style.display = "none";      
      }, 200);
    }
    else {
      document.body.style.overflow = "hidden";
      modal.style.display = "flex";
      modal.classList.add("modal-show");
    }
  }


/* */

function toggleNav() {
  const element = document.querySelector("nav");
  const elementHeight = element.scrollHeight;
  var isCollapsed = element.getAttribute('data-collapsed') === 'true';
  if (isCollapsed) {
    element.style.height = elementHeight + "px";
    element.setAttribute("data-collapsed", "false");
  } else {
        element.style.height = "0px";
    element.setAttribute("data-collapsed", "true");
  }
}