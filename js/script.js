	var link = document.querySelector(".feedback-button");
	var popup = document.querySelector(".modal-feedback");
	var close = popup.querySelector(".modal-close");
	var form = popup.querySelector(".feedback-form");
	var name = popup.querySelector("[name=username]");
	var email = popup.querySelector("[name=email]");
	var message = popup.querySelector("[name=feedback-comment]");
	var isStorageSupport = true;
	var storage = "";
	  
	try {
	  storage = localStorage.getItem("username");
	} catch (err) {
	  isStorageSupport = false;
	}
	link.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.add("modal-show");
		if (storage) {
			username.value = storage;
			email.focus();
		} else {
			username.focus();
		}
	});
	close.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
	});
	form.addEventListener("submit", function (evt) {
		if (!username.value || !email.value || !feedback-comment.value) {
   			evt.preventDefault();
   			popup.classList.remove("modal-error");
    			popup.offsetWidth = popup.offsetWidth;
   			popup.classList.add("modal-error");
    			console.log("Нужно ввести имя, почту и сообщение");
  			} else {
  				if (isStorageSupport) {
  					localStorage.setItem("username", username.value);
  				}
  			}
	});
	window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });