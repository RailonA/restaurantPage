/* eslint-disable no-param-reassign */
export function getDomElement(identifier) {
    return document.querySelector(identifier);
  }
  
  export function setInnerHTML(domElement, text) {
    domElement.innerHTML = text;
  }
  
  export function resetValue(domElement, val) {
    domElement.value = val;
  }
  
  export function getAllElementsOfType(type) {
    return document.querySelectorAll(type);
  }
  
  export function handleEvent(buttons, eventType, handler) {
    buttons.forEach((btn) => btn.addEventListener(eventType, handler));
  }