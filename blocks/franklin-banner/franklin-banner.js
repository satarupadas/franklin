import { createOptimizedPicture } from "../../scripts/lib-franklin.js";

export default function decorate(block) {
  /* change to ul, li */
    block.querySelectorAll(".franklin-banner > div").forEach((node) => {
      node.classList.add("franklin-banner__col");
    });
    
    
    const textImageCol = block.querySelector(".franklin-banner__col:last-child");
    console.log(textImageCol);
    [...textImageCol.children].forEach((div) => {
        if (div.children.length === 1 && div.querySelector('picture')) div.className = 'franklin-banner__image';
            else div.className = 'franklin-banner__links';
    });
}
