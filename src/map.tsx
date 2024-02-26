import Map from 'ol/Map';
import Vector from 'ol/layer/Vector';
import { Feature, Overlay } from 'ol';
import * as source from 'ol/source';
import * as geom from 'ol/geom';
import * as style from 'ol/style';
import * as interaction from 'ol/interaction';
import * as condition from 'ol/events/condition';
import Layer from 'ol/layer/Layer';
import LayerRenderer from 'ol/renderer/Layer';
import { findParentWithClass, stringifyPoint } from './utils';
import { cfg, icons } from './config';
import { MarkRes } from './config/static';

export class Marker {
  map: Map;
  defaultScale: number = 0.4;
  tooltip: Overlay | undefined;
  constructor(map: Map) {
    this.map = map;
    this.initTooltip();
  }
  initTooltip() {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    this.tooltip = new Overlay({
      element: tooltip, // HTML元素作为内容
      positioning: 'bottom-center', // 位置设置为底部中心
      offset: [0, -20], // 偏移量
      stopEvent: false, // 允许事件继续传播
    });
    this.map.addOverlay(this.tooltip);

    const resolutionChangeFn = () => {
      const p = this.map.getView().getZoom()! / (cfg.maxZoom - cfg.minZoom);
      let width = 20 * (1 + p) * p * 1.5;
      width = width > 32 ? 32 : width;
      width = width < 20 ? 20 : width;

      document.querySelectorAll('.mark').forEach((el) => {
        (el as HTMLElement).style.width = `${width}px`;
        (el as HTMLElement).style.height = `${width}px`;
        const $tooltip = (el as HTMLElement).querySelector(
          '.tooltip'
        ) as HTMLElement;
        if ($tooltip) {
          $tooltip.style.fontSize = `${width / 2}px`;
        }
      });
      console.log(this.tooltip!.getElement());
    };
    this.map.getView().on('change:resolution', resolutionChangeFn);
    setTimeout(() => {
      this.map.getView().dispatchEvent('change:resolution');
    }, 1);
  }
  showTooltip() {
    if (!this.tooltip) return;
    this.tooltip!.getElement()!.style.display = 'block';
    setTimeout(() => {
      this.tooltip!.getElement()!.classList.add('show');
    }, 10);
  }
  hideTooltip() {
    if (!this.tooltip) return;
    this.tooltip!.getElement()!.classList.remove('show');
    setTimeout(() => {
      this.tooltip!.getElement()!.style.display = 'none';
    }, 250);
  }
  createLayer() {
    return new Vector({
      source: new source.Vector(),
    });
  }
  createIcon(pointer: number[], type: string) {
    const icon = new Feature({
      geometry: new geom.Point(pointer),
    });

    icon.setStyle(
      new style.Style({
        image: new style.Icon({
          src: icons[type].img,
          scale: this.defaultScale,
        }),
      })
    );

    icon.set('className', 'vector-icon');
    return icon;
  }

  createInteraction(layer: Layer<source.Source, LayerRenderer<any>>) {
    return new interaction.Select({
      layers: [layer],
      condition: condition.pointerMove,
      style: null,
    });
  }
  createTooltipEl(pointer: number[], type: string, text: string) {
    const pixels = stringifyPoint(pointer as [number, number]);
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    let tips = `${pixels[0].replace(/：/, ':')} ${pixels[1].replace(
      /：/,
      ':'
    )}`;
    if (text) {
      tips += `<br/>${text}`;
    }
    tooltip.innerHTML = tips;
    return tooltip;
  }
  createMark({ coordinate, type, remark }: MarkRes) {
    const markEl = document.createElement('div');
    const isStatic = ['ss', 'smt', 'txz'].includes(type);
    markEl.classList.add('mark', type);
    if (!isStatic) {
      const tooltipEl = this.createTooltipEl(coordinate, type, remark);
      markEl.appendChild(tooltipEl);
      markEl.classList.add('glow');
      markEl.addEventListener('click', () => {
        const classList = markEl.classList;
        if (classList.contains('thin')) {
          classList.remove('thin');
        } else {
          classList.add('thin');
        }
      });
      markEl.addEventListener('mouseover', () => {
        findParentWithClass(markEl, 'ol-selectable')!.style.zIndex = '9999';
      });
      markEl.addEventListener('mouseout', () => {
        findParentWithClass(markEl, 'ol-selectable')!.style.zIndex = 'unset';
      });
    }
    const mark = new Overlay({
      element: markEl,
      positioning: 'center-center',
      offset: [0, 0],
      stopEvent: false,
      className: isStatic ? 'z-1' : 'ol-overlay-container ol-selectable',
    });
    this.map.addOverlay(mark);
    mark.setPosition(coordinate);

    return () => {
      this.map.removeOverlay(mark);
      this.map.removeOverlay(this.tooltip!);
    };
  }

  addMark(marks: MarkRes[]) {
    const removeFns: any = [];
    marks.map((mark) => removeFns.push(this.createMark(mark)));
    return () => {
      removeFns.map((fn: any) => fn());
    };
  }
}
