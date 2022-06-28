import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

@Injectable({
  providedIn: 'root',
})
export class ExportService {
  constructor() {}

  asPdf(fileName: string, elem: HTMLElement) {
    html2canvas(elem).then((canvas) => {
      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jspdf('l', 'px', 'a4');
      let multiplier = 5;
      pdf.addImage(
        contentDataURL,
        'PNG',
        50,
        50,
        canvas.width / multiplier,
        canvas.height / multiplier
      );
      pdf.save(`${fileName}.pdf`);
    });
  }

  asJSON(filename: string, dataObjToWrite: any) {
    const blob = new Blob([JSON.stringify(dataObjToWrite)], { type: 'text/json' });
    const link = document.createElement('a');

    link.download = filename + '.json';
    link.href = window.URL.createObjectURL(blob);
    link.dataset.downloadurl = ['text/json', link.download, link.href].join(':');

    const evt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    });

    link.dispatchEvent(evt);
    link.remove();
  }
}
