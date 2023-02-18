function forceDownload(blobUrl: string, filename: string) {
  let a: any = document.createElement("a");
  a.download = filename;
  a.href = blobUrl;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

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
