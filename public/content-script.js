let wrapBtn = `<div id='openIframe' style="position: fixed;box-sizing: border-box;direction: ltr;z-index: 1000000000;background: rgba(0,0,0,0);width: fit-content;top: 10px;right: 10px;display: flex;">
<button draggable="true" id='openIframe' style="display: flex;align-items: center;justify-content: center;position: relative;
background: white;box-shadow: 0px 2px 12px rgba(0,0,0,0.5);border: none;border-radius:50%;width: 50px;height: 48px;padding: 0;margin: 0;">
<svg  width="40" height="35" viewBox="0 0 50 38" fill="none" xmlns="http:www.w3.org/2000/svg">
<g  clip-path="url(#clip0_10_72)">
<path  d="M22.4223 20.3101C23.2256 20.3101 23.8767 19.6569 23.8767 18.851C23.8767 18.0451 23.2256 17.3918 22.4223 17.3918C21.6191 17.3918 20.9679 18.0451 20.9679 18.851C20.9679 19.6569 21.6191 20.3101 22.4223 20.3101Z" fill="white"/>
<path  d="M47.9762 20.3101C48.7795 20.3101 49.4306 19.6569 49.4306 18.851C49.4306 18.0451 48.7795 17.3918 47.9762 17.3918C47.173 17.3918 46.5219 18.0451 46.5219 18.851C46.5219 19.6569 47.173 20.3101 47.9762 20.3101Z" fill="#E2B9EA"/>
<path  d="M44.2629 17.4601V20.2294C44.2629 21.0552 43.6131 21.6886 42.8085 21.6886C42.004 21.6886 41.3541 21.049 41.3541 20.2294V17.4601C41.3541 16.653 42.004 16.001 42.8085 16.001C43.6069 15.9948 44.2629 16.653 44.2629 17.4601Z" fill="#CE93D8"/>
<path  d="M39.1695 15.5291V22.1605C39.1695 22.9676 38.5196 23.6196 37.7151 23.6196C36.9105 23.6196 36.2607 22.9676 36.2607 22.1605V15.5291C36.2607 14.7219 36.9105 14.0699 37.7151 14.0699C38.5196 14.0637 39.1695 14.7219 39.1695 15.5291Z" fill="#5C6BC0"/>
<path  d="M34.0512 11.7726V14.132C34.0512 14.9392 33.4014 15.5912 32.5969 15.5912C31.7923 15.5912 31.1425 14.9392 31.1425 14.132V11.7353C31.1425 10.8288 31.9656 10.1147 32.9001 10.3072C33.5809 10.4438 34.0512 11.0771 34.0512 11.7726Z" fill="#5E35B1"/>
<path  d="M34.0512 23.9052V25.917C34.0512 26.6124 33.5809 27.2457 32.9001 27.3886C31.9656 27.581 31.1425 26.867 31.1425 25.9605V23.9052C31.1425 23.098 31.7923 22.4461 32.5969 22.4461C33.3952 22.4461 34.0512 23.098 34.0512 23.9052Z" fill="#5E35B1"/>
<path  d="M28.9949 5.26535V10.6673C28.9949 11.4745 28.3451 12.1265 27.5405 12.1265H27.5343C26.7298 12.1265 26.08 11.4745 26.08 10.6673V5.26535C26.08 4.43953 26.736 3.78757 27.5405 3.78757C28.3389 3.78757 28.9949 4.43953 28.9949 5.26535Z" fill="#5E35B1"/>
<path  d="M27.5343 25.4265C28.3451 25.4265 28.9949 26.0784 28.9949 26.8856V32.3994C28.9949 33.0948 28.5246 33.7281 27.8438 33.8709C26.9093 34.0634 26.0738 33.3494 26.0738 32.4428V26.8856C26.0799 26.0784 26.7298 25.4265 27.5343 25.4265Z" fill="#5E35B1"/>
<path  d="M18.8451 11.0958V26.6C18.8451 27.4258 18.1953 28.0778 17.3908 28.0778C16.5862 28.0778 15.9364 27.4258 15.9364 26.6V11.0958C15.9364 10.2886 16.5862 9.63661 17.3908 9.63661C18.1953 9.6304 18.8451 10.2886 18.8451 11.0958Z" fill="#5E35B1"/>
<path  d="M23.8705 1.81307V8.17124C23.8705 8.97843 23.2207 9.63039 22.4161 9.63039C21.6116 9.63039 20.9617 8.97843 20.9617 8.17124V1.76961C20.9617 0.86307 21.7849 0.149018 22.7194 0.341502C23.4002 0.478103 23.8705 1.11765 23.8705 1.81307Z" fill="#5E35B1"/>
<path  d="M22.4161 28.2516C23.2207 28.2516 23.8705 28.9036 23.8705 29.7108V35.8765C23.8705 36.5719 23.4002 37.2052 22.7194 37.3481C21.7849 37.5405 20.9617 36.8265 20.9617 35.9199V29.717C20.9556 28.9036 21.6116 28.2516 22.4161 28.2516Z" fill="#5E35B1"/>
<path  d="M13.7393 14.7405V22.9552C13.7393 23.7624 13.0895 24.4144 12.2849 24.4144C11.4618 24.4144 10.8305 23.7624 10.8305 22.9552V14.7405C10.8305 13.9333 11.468 13.2814 12.2849 13.2814C13.0895 13.2752 13.7393 13.9333 13.7393 14.7405Z" fill="#5C6BC0"/>
<path  d="M8.58398 17.0565V20.633C8.58398 21.4402 7.93414 22.0922 7.12959 22.0922C6.32503 22.0922 5.6752 21.4402 5.6752 20.633V17.0565C5.6752 16.2494 6.32503 15.5974 7.12959 15.5974C7.93414 15.5912 8.58398 16.2494 8.58398 17.0565Z" fill="#CE93D8"/>
<path  d="M3.36057 18.851C3.36057 19.6582 2.71074 20.3101 1.88762 20.3101C1.08306 20.3101 0.433228 19.6582 0.433228 18.851C0.433228 18.0438 1.08306 17.3918 1.88762 17.3918C2.71074 17.3918 3.36057 18.0438 3.36057 18.851Z" fill="#E2B9EA"/>
<path  d="M34.0512 18.8448C34.0512 19.1552 33.9089 19.4657 33.618 19.6644L29.8923 22.1232H29.8861L29.4034 22.4399C32.0522 20.6827 29.2053 18.8386 29.2053 18.8386L28.178 18.1618L24.0253 15.4111V15.4297L21.6487 13.8464C21.2155 13.5608 20.9556 13.0703 20.9556 12.5487C20.9556 11.3069 22.3357 10.5618 23.3692 11.2572L23.6168 11.4248L29.8799 15.5663H29.8861L33.6118 18.0252C33.9027 18.2238 34.0512 18.5343 34.0512 18.8448Z" fill="white"/>
<path  d="M29.3972 22.4461L23.623 26.2709L23.363 26.451C23.0845 26.6434 22.7875 26.7366 22.4904 26.7366C21.6982 26.7366 20.9617 26.1033 20.9617 25.2029C20.9617 24.7062 21.2031 24.2343 21.6116 23.9549L24.0252 22.2536V22.266L28.178 19.5216L28.2027 19.5029L28.9578 19.0062L29.2053 18.8448C29.1992 18.8448 32.0522 20.6889 29.3972 22.4461Z" fill="#5E35B1"/>
</g>
<defs>
<clipPath>
<rect  width="50" height="38" fill="white"/>
</clipPath>
</defs>
</svg>
</button>
<button id="close" style="border: none;background: transparent;display: flex;position: absolute;left: 44px;color:black;">
<svg id="close" style="background:white;border-radius:50%;box-shadow: 0px 2px 12px rgba(0,0,0,0.5);
font-size: small;" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http:www.w3.org/2000/svg">
<line id="close" x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
</button>
</div>`;
let div = document.createElement("div");
div.id = "huggingface-container";
let script = document.createElement("script");
let link = document.createElement("link");
let btn = document.createElement("div");
let container = document.createElement("huggingface_container");

const sendMessageToBackground = (msg) => {
  switch (msg) {
    case "close":
      chrome.runtime.sendMessage({ response: "close" });
      break;
    case "minimize":
      chrome.runtime.sendMessage({ response: "minimize" });
      break;
    default:
      chrome.runtime.sendMessage({ response: " " });
  }
};
const popup = (msg) => {
  switch (msg) {
    case "minimize":
      div.style.display = "none";
      btn.style.display = "block";
      sendMessageToBackground("minimize");
      break;
    case "openIframe":
      div.style.display = "block";
      btn.style.display = "none";
      sendMessageToBackground("open");
      break;
    default:
      container.insertAdjacentElement("afterbegin", div);
      container.insertAdjacentElement("beforeend", btn);
      btn.innerHTML = wrapBtn;
      btn.style.display = "none";
      document.body.insertAdjacentElement("afterend", container);
      link.rel = "stylesheet";
      link.href = chrome.runtime.getURL("static/css/main.541ee29e.css");
      document.head.appendChild(link);
      script.src = chrome.runtime.getURL("static/js/main.97d6ac9f.js");
      script.type = "text/javascript";
      document.body.appendChild(script);
      script.onload = function () {};
      sendMessageToBackground("open");
  }
};
const minimize = () => {
  container.insertAdjacentElement("beforeend", div);
  container.insertAdjacentElement("beforeend", btn);
  btn.innerHTML = wrapBtn;
  div.style.display = "none";
  btn.style.display = "block";
  document.body.insertAdjacentElement("afterend", container);
  link.rel = "stylesheet";
  link.href = chrome.runtime.getURL("static/css/main.541ee29e.css");
  document.head.appendChild(link);
  script.src = chrome.runtime.getURL("static/js/main.97d6ac9f.js");
  script.type = "text/javascript";
  document.body.appendChild(script);
  script.onload = () => {};
};
chrome.runtime.onMessage.addListener((request) => {
  switch (request.status) {
    case "minimize":
      minimize();
      break;
    case "close":
      container.remove();
      break;
    default:
      popup();
  }
  return Promise.resolve("popup Appeared");
});

container.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "close-button":
      container.remove();
      sendMessageToBackground("close");
      break;
    case "close":
      container.remove();
      div.style.display = "block";
      btn.style.display = "none";
      sendMessageToBackground("close");
      break;
    case "minimize-button":
      popup("minimize");
      break;
    default:
  }
});

container.addEventListener("click", function (e) {
  dragElement(document.getElementById("openIframe"));
  clickElemtent(document.getElementById("openIframe"));
  function clickElemtent(elmnt) {
    elmnt.onclick = function () {
      popup("openIframe");
    };
  }
  function dragElement(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
      elmnt.onclick = null;
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }
    function closeDragElement(e) {
      document.onmouseup = null;
      document.onmousemove = null;
      e.stopImmediatePropagation();
      e.stopPropagation();
      return true;
    }
  }
});

container.addEventListener("mouseover", function (e) {
  let id = document.getElementById("close");
  if (e.target.id === "openIframe") {
    id.style.display = "none";
  } else {
    id.style.display = "flex";
  }
});

div.addEventListener("click", function (e) {
  if (e.target.id === "loginButton") {
    chrome.runtime.sendMessage({ message: "login" });
  }
});

div.addEventListener("click", function (e) {
  if (e.target.id === "close-button") {
    chrome.runtime.sendMessage({ message: "enable" });
  }
});

div.addEventListener("click", function (e) {
  let closeIcon = document.getElementById("close");
  if (closeIcon) {
    chrome.runtime.sendMessage({ message: "enable" });
  }
});
