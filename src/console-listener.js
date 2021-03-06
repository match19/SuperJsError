
var exErr = console.error;
console.error = (...data) => {
  exErr(...data);
  const myNotification = window.createNotification({
    theme: 'error',
    showDuration: 5000
  });

  myNotification({
    message: data.toString()
  });
}

window.onerror = (err) => {
  if (err == "Uncaught EvalError: Possible side-effect in debug-evaluate" || err.includes("SyntaxError",)) {
    return;
  }
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

