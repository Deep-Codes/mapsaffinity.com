// credits: https://codepen.io/MadanBhandari/pen/vbaKGJ
export default function downloadPhoto(imageSrc: string) {
  fetch(imageSrc, {
    mode: "no-cors",
  })
    .then((response) => response.blob())
    .then((blob) => {
      let blobUrl = window.URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.download = imageSrc.replace(/^.*[\\\/]/, "");
      a.href = blobUrl;
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
}
