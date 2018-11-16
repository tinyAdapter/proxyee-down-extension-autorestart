window.onError = function(request) {
  setTimeout(function() {
    pdown.resumeTask(request.id);
  }, pdown.settings.timeout || 1000);
};
