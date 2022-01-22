
window.onerror = (err) => {
  const myNotification = window.createNotification({
    theme: 'error',
    showDuration: 5000
  });

  myNotification({
    message: err.toString()
  });
}



function handleXMLHttp() {
  var sendx = XMLHttpRequest.prototype.send;
  window.XMLHttpRequest.prototype.send = function () {
    handleAsync(this);
    return sendx.apply(this, arguments);
  };
}

