import { FilterWraper, Label, FilterInput } from './Filter.styled';
// import PropTypes from 'prop-types';


const Filter = ({ value, onChange }) => {
    return (
      <FilterWraper>
        <Label> Find contacts by name: <FilterInput type="text" value={value} onChange={onChange} />
    </Label>
      </FilterWraper>
    
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default Filter;