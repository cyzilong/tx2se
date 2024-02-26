import TileGrid from 'ol/tilegrid/TileGrid';
import Tile from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import Map from 'ol/Map';
import View, { FitOptions } from 'ol/View';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { cfg } from '@/config';
import Header from './header';
import { Marker } from './map';
import { dailyRandom, staticPoint } from '@/config/static';
import { Copy } from './component/copy';

type Props = {
  children: (map: Map | null) => React.ReactNode | null;
};

const GameBase: FC<Props> = ({ children }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;
    if (mapRef.current.querySelectorAll('*').length > 0) return;
    const mapTileGrid = new TileGrid({
      extent: cfg.tileExtent,
      minZoom: cfg.minZoom,
      resolutions: cfg.resolutions,
    });

    const layer = new Tile({
      source: new XYZ({
        projection: 'EPSG:3857',
        tileGrid: mapTileGrid,
        tilePixelRatio: 1,
        url: './tiles/{z}/{x}/{y}.jpg',
      }),
    });

    const initMap = new Map({
      target: mapRef.current,
      layers: [layer],
      view: new View({
        projection: 'EPSG:3857',
        multiWorld: false,
        center: [0, 0],
        extent: cfg.extent,
        maxResolution: mapTileGrid.getResolution(cfg.minZoom),
        minZoom: cfg.minZoom,
      }),
      controls: [],
    });

    setMap(initMap);

    const view = initMap.getView();

    view.fit(cfg.extent, initMap.getSize() as FitOptions);
    view.setZoom(1.8);

    view.on('change:resolution', function () {
      const currentZoom = view.getZoom()!; // 获取当前缩放级别
      const max = cfg.maxZoom - cfg.minZoom;
      if (currentZoom > max) {
        initMap.getView().setZoom(max);
      }
    });
  }, []);

  useEffect(() => {
    if (!map) return;
    const marker = new Marker(map);
    return marker.addMark(staticPoint);
  }, [map]);

  useEffect(() => {
    if (!map) return;
    const marker = new Marker(map);
    return marker.addMark(dailyRandom);
  }, [map]);

  return (
    <>
      {children(map)}
      <div className="map" ref={mapRef}></div>
    </>
  );
};

const Index = () => {
  return (
    <GameBase>
      {(map: Map | null) => {
        if (!map) return null;
        return (
          <>
            <Header map={map} />
            <div className="watermark"></div>
          </>
        );
      }}
    </GameBase>
  );
};

export default Index;
