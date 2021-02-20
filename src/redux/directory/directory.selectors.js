import {createSelector} from 'reselect';

const selectDirectory = state => state.directory;

const directorySelector = createSelector(
  [selectDirectory],
  directory => directory.sections
)

export default directorySelector;

