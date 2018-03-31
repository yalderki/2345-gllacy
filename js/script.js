	var link = document.querySelector(".feedback-button");
	var popup = document.querySelector(".modal-feedback");
	var close = popup.querySelector(".modal-close");
	var form = popup.querySelector(".feedback-form");
	var feedbackname = popup.querySelector("[name=feedbackname]");
	var feedbackemail = popup.querySelector("[name=feedbackemail]");
	var feedbackcomment = popup.querySelector("[name=feedbackcomment]");
	var isStorageSupport = true;
	var storage = "";
	  
	try {
	  storage = localStorage.getItem("feedbackname");
	} catch (err) {
	  isStorageSupport = false;
	}
	link.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.add("modal-show");
		if (storage) {
			feedbackname.value = storage;
			feedbackemail.focus();
		} else {
			feedbackname.focus();
		}
	});
	close.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
	});
	form.addEventListener("submit", function (evt) {
		if (!feedbackname.value || !feedbackemail.value || !feedbackcomment.value) {
   			evt.preventDefault();
   			popup.classList.remove("modal-error");
   			popup.offsetWidth = popup.offsetWidth;
   			popup.classList.add("modal-error");
    			//console.log("Нужно ввести имя, почту и сообщение");
  			} else {
  				if (isStorageSupport) {
  					localStorage.setItem("feedbackname", feedbackname.value);
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