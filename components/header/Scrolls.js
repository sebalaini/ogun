import { useEffect } from "react";

export default function Scrolls() {
  useEffect(function mount() {
  function updateNavigation () {
    let contentSections = document.querySelectorAll('.section')

    for (let i = 0; i < contentSections.length; i++) {
      let $this = contentSections[i]
      var activeSection = document.querySelectorAll(`a[href='#${$this.id}']`)[0]
      var scrollPosition = window.pageYOffset
      var midWindowLocation = (window.innerHeight / 2) + (window.innerHeight / 4)
      var sectionLocationTop = $this.offsetTop
      var sectionHeight = $this.clientHeight

      // the section location tells us how many pixels separate the top of the section element from the top of the document
      // the scrollPostion tells us the amount of pixels scrolled down, relative to the top of the window, or the area "above" the window
      // if the top of our section element was flush with the top of the window, these two values would be equal
      // the if statement first subtracts the distance to the middle of the window to offset this, meaning the first portion of the if statement returns true if the top of the section element is flush with the middle of the window, rather than the top of it
      // the second part of the if does the same for below the element

      if ((sectionLocationTop - midWindowLocation < scrollPosition) && (sectionLocationTop + sectionHeight - midWindowLocation > scrollPosition)) {
        activeSection.classList.add('selected')
      }
      else {
        activeSection.classList.remove('selected')
      }
    }
  }

    window.addEventListener("scroll", updateNavigation)

    return function unMount() {
      window.removeEventListener("scroll", updateNavigation)
    }
  })

  return null;
}
