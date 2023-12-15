/* eslint-disable react/jsx-no-comment-textnodes */
import { useRef, useEffect, useState } from 'react';
import { map, view, basemaps, layerList } from './Scene';
import Select from 'react-select';
import './index.css';
import './App.css';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-list';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteShell,
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction,
  CalciteSwitch,
  CalciteTabs,
  CalcitePanel,
  CalciteList,
  CalciteListItem,
} from '@esri/calcite-components-react';
import Chart from './components/Chart';
import { dropdownData } from './dropdownData';

function App() {
  const mapDiv = useRef(null);
  const layerListDiv = useRef<HTMLDivElement | undefined | any>(null);

  // For Calcite Design
  const calcitePanelBasemaps = useRef<HTMLDivElement | undefined | any>(null);
  const [activeWidget, setActiveWidget] = useState<undefined | any | unknown>(null);
  const [nextWidget, setNextWidget] = useState<undefined | any | unknown>(null);

  // Calcite switch for see-through-ground
  const [underground, setUnderground] = useState<boolean>(false);

  // For dropdown filter
  const [depotBuildingName, setDepotBuildingName] = useState<null | any>(null);

  useEffect(() => {
    if (activeWidget) {
      const actionActiveWidget = document.querySelector(
        `[data-panel-id=${activeWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionActiveWidget.hidden = true;
    }

    if (nextWidget !== activeWidget) {
      const actionNextWidget = document.querySelector(
        `[data-panel-id=${nextWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionNextWidget.hidden = false;
    }
  });

  // useEffect(() => {
  //   const dropdownData = new DropDownData({
  //     featureLayers: [depotBuildingStructureLayer],
  //     fieldNames: ['Building_Names'],
  //   });

  //   dropdownData.dropDownQuery().then((response: any) => {
  //     setInitDepotBuildingName(response);
  //   });
  // }, []);

  const handleMunicipalityChange = (obj: any) => {
    setDepotBuildingName(obj);
  };

  useEffect(() => {
    map.ground.opacity = underground === true ? 0.7 : 1;
    view.environment.atmosphereEnabled = false;
  }, [underground]);

  useEffect(() => {
    if (mapDiv.current) {
      map.ground.navigationConstraint = {
        type: 'none',
      };

      view.container = mapDiv.current;
      view.ui.components = [];
      view.ui.empty('top-left');
      basemaps.container = calcitePanelBasemaps.current;
      layerList.container = layerListDiv.current;
    }
  }, []);

  // Style CSS
  const customstyles = {
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      // const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isFocused ? '#999999' : isSelected ? '#2b2b2b' : '#2b2b2b',
        color: '#ffffff',
      };
    },

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: '#2b2b2b',
      borderColor: '#949494',
      height: 35,
      width: '170px',
      color: '#ffffff',
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: '#fff' }),
  };

  return (
    <>
      <CalciteShell>
        <CalciteTabs slot="panel-end" style={{ width: '25vw' }}>
          <Chart depotname={depotBuildingName === null ? '' : depotBuildingName.name} />
        </CalciteTabs>
        <header
          slot="header"
          id="header-title"
          style={{ display: 'flex', width: '100%', padding: '0 1rem' }}
        >
          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/DOTr_Logo_v2.png"
            alt="DOTr Logo"
            height={'2.9%'}
            width={'2.9%'}
            style={{ marginBottom: 'auto', marginTop: 'auto' }}
          />
          <b className="headerTitle">MMSP DEPOT</b>
          <div className="date">As of December 11, 2023</div>

          <div className="dropdownFilter">
            <div className="dropdownFilterLayout">
              <b style={{ color: 'white', margin: 10, fontSize: '0.9vw' }}></b>
              <Select
                placeholder="Select Buildings"
                value={depotBuildingName}
                options={dropdownData}
                onChange={handleMunicipalityChange}
                getOptionLabel={(x: any) => x.name}
                styles={customstyles}
              />
            </div>
          </div>

          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/GCR LOGO.png"
            alt="GCR Logo"
            height={'4.4%'}
            width={'4.4%'}
            style={{
              marginBottom: 'auto',
              marginTop: 'auto',
              marginLeft: 'auto',
              marginRight: '5rem',
            }}
          />
        </header>
        {/* Calcite Action Panel */}
        <CalciteShellPanel
          width-scale="1"
          slot="panel-start"
          position="start"
          id="left-shell-panel"
          displayMode="dock"
        >
          <CalciteActionBar slot="action-bar">
            <CalciteAction
              data-action-id="layers"
              icon="layers"
              text="layers"
              id="layers"
              //textEnabled={true}
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="basemaps"
              icon="basemap"
              text="basemaps"
              id="basemaps"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="information"
              icon="information"
              text="Information"
              id="information"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>
          </CalciteActionBar>

          <CalcitePanel
            heading="Layers"
            height-scale="l"
            width-scale="l"
            data-panel-id="layers"
            style={{ width: '18vw' }}
            hidden
          >
            <CalciteList>
              <CalciteListItem
                label=""
                description=""
                value="land-acquisition"
                ref={layerListDiv}
              ></CalciteListItem>
            </CalciteList>
          </CalcitePanel>

          <CalcitePanel
            heading="Basemaps"
            height-scale="l"
            data-panel-id="basemaps"
            style={{ width: '18vw' }}
            hidden
          >
            <CalciteList>
              <CalciteListItem
                label=""
                description=""
                value="basemaps"
                ref={calcitePanelBasemaps}
              ></CalciteListItem>
            </CalciteList>
          </CalcitePanel>

          <CalcitePanel heading="Description" data-panel-id="information" hidden>
            {nextWidget === 'information' ? (
              <div className="informationDiv">
                <ul>
                  <li>
                    <b>Click pie chart series</b> to the corresponding structural components on the
                    map.
                  </li>
                </ul>
              </div>
            ) : (
              <div className="informationDiv" hidden></div>
            )}
          </CalcitePanel>
        </CalciteShellPanel>
        <div
          className="groundSwitchDiv"
          style={{
            position: 'fixed',
            zIndex: 1,
            bottom: 10,
            right: '23%',
            color: 'white',
            backgroundColor: '#2b2b2b',
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          Ground: {''}
          On{' '}
          <CalciteSwitch
            onCalciteSwitchChange={(event: any) => setUnderground(event.target.checked)}
          ></CalciteSwitch>{' '}
          Off
        </div>

        <div className="mapDiv" ref={mapDiv}></div>
      </CalciteShell>
    </>
  );
}

export default App;
