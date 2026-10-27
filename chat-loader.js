// Loads the Salesforce Enhanced Web Chat bootstrap once, only when configured.
(function () {
  var c = window.FOA_CHAT || {};
  var btn = document.getElementById("open-chat");
  if (!c.scriptUrl) { btn.addEventListener("click", function(){ alert("Chat is not configured yet."); }); return; }
  var s = document.createElement("script");
  s.src = c.scriptUrl; s.async = true;
  s.onload = function () {
    window.addEventListener("onEmbeddedMessagingReady", function () {});
    embeddedservice_bootstrap.settings.language = "en_US";
    embeddedservice_bootstrap.init(c.orgId, c.deploymentDevName, c.siteUrl, { scrt2URL: c.scrt2Url });
  };
  document.head.appendChild(s);
  btn.addEventListener("click", function () {
    if (window.embeddedservice_bootstrap && embeddedservice_bootstrap.utilAPI) embeddedservice_bootstrap.utilAPI.launchChat();
  });
})();
