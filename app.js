function displayAdblockerAlert(containerID, websiteLogoURL, siteName) {
  var container = document.getElementById(containerID);
  var modalDiv = document.createElement("div");
  modalDiv.className = "adb-modal-div";
  modalDiv.innerHTML =
    `  <div class="adb-div">
        <div class="adb-logo-div">
          <div class="adb-logo-img-div">
            <img class="adb-logo-img" src="` +
    websiteLogoURL +
    `"/>
          </div>
          <span class="adb-title-adbolck-span"
            >It looks like your ad blocker is enabled.</span
          >
          <span class="adb-sub-title-adbolck-span">
            In order to continue to enjoy the contents of the site, please
            whitelist our site.
          </span>
        </div>
        <div class="adb-disable-adblock-div">
          <div>
            <span class="adb-turn-off-adblocker-span"
              >Disable Adblock:</span
            >
            <ul class="adb-turn-off-adblocker-ul">
              <li>Click the ad blocker at the top of the browser</li>
              <li>Unblock ` +
    siteName +
    `</li>
              <li>Reload your browser or click the button below to continue</li>
            </ul>
          </div>
          <div class="adb-img-btn-div">
          <img class="adb-img-adblock" src="./photos/adblock.png" />

          <div class="adb-btn-div">
            <button id="adb-reload-btn" class="adb-btn-adblock">Reload Website</button>
          </div>

          </div>
        </div>
      </div>`;

  container.appendChild(modalDiv);
  var reloadBtn = document.getElementById("adb-reload-btn");
  reloadBtn.addEventListener("click", () => {
    window.location.reload();
  });
  document.body.style.overflow = "hidden";
}
var openModalBtn = document.getElementById("adb-open-modal");
openModalBtn.addEventListener("click", () => {
  displayAdblockerAlert(
    "container",
    "./photos/logo_v2.jpg",
    "WordTraveling.com"
  );
});
