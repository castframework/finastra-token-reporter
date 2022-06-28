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

  asXML(filename: string, dataObjToWrite: any) {
    const blob = new Blob([this.OBJtoXML(dataObjToWrite)], { type: 'text/xml' });
    const link = document.createElement('a');

    link.download = filename + '.xml';
    link.href = window.URL.createObjectURL(blob);
    link.dataset.downloadurl = ['text/xml', link.download, link.href].join(':');

    const evt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    });

    link.dispatchEvent(evt);
    link.remove();
  }

  OBJtoXML(obj: any) {
    var xml = '';
    for (var prop in obj) {
      xml += obj[prop] instanceof Array ? '' : '<' + prop + '>';
      if (obj[prop] instanceof Array) {
        for (var array in obj[prop]) {
          xml += '<' + prop + '>';
          xml += this.OBJtoXML(new Object(obj[prop][array]));
          xml += '</' + prop + '>';
        }
      } else if (typeof obj[prop] == 'object') {
        xml += this.OBJtoXML(new Object(obj[prop]));
      } else {
        xml += obj[prop];
      }
      xml += obj[prop] instanceof Array ? '' : '</' + prop + '>';
    }
    var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
    return xml;
  }
}
