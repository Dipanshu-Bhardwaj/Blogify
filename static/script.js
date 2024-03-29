function redirectToLogin() {
    window.location.href = "/login";
}
function redirectToSignup(){
    window.location.href = "/signup";
}
function redirectToAddPost(){
    window.location.href = "/add_post";
}

document.querySelectorAll("textarea").forEach((el) => {
    el.style.height = el.setAttribute(
      "style",
      "height: " + el.scrollHeight + "px"
    );
    el.classList.add("auto");
    el.addEventListener("input", (e) => {
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    });
  });
  
//   trial 
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('upload-file').addEventListener('change', function() {
        var filename = this.value.split('\\').pop();
        document.getElementById('file-upload-name').textContent = filename;
        if (filename !== "") {
            setTimeout(function() {
                document.querySelector('.upload-wrapper').classList.add('uploaded');
            }, 600);
            setTimeout(function() {
                document.querySelector('.upload-wrapper').classList.remove('uploaded');
                document.querySelector('.upload-wrapper').classList.add('success');
            }, 1600);
        }
    });
});
