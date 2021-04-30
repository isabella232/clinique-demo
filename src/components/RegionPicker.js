import React from 'react';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import './regionPicker.scss';

const baseIndexName = 'clinique-products-';
const suffixIndexNames = [
  'us',
  'kr-ko',
  'tr',
  'jp-ja',
  'il-he',
  'cn-zhhans',
  'ru',
  'fr',
];

const options = suffixIndexNames.map((e, i) => {
  return { value: baseIndexName + e, label: e };
});

const defaultOption = options[0];

const RegionPicker = ({ selectedRegion, setSelectedRegion }) => {
  return (
    <Dropdown
      options={options}
      onChange={e => setSelectedRegion(e.value)}
      value={defaultOption}
      placeholder="Select an option"
    />
  );
};

export default RegionPicker;
