import { useState } from 'react'

import {  getPropertiesByGroup } from './data/discountAssortmentData'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectGroup,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'


interface PropertyOption {
  value: string;
}

interface Property {
  propertyHolder: string;
  propertyName: string;
  propertyObj: PropertyOption[];
}

interface FilterSelection {
  group: string;
  
  properties: {
    [propertyHolder: string]: {
      propertyName: string;
      selectedValues: string[];
    }
  };
}

function DiscountAssortmentSearchFilters() {
  const [filterSelection, setFilterSelection] = useState<FilterSelection>({
    group: '',
    properties: {}
  });
  const [groupProperties, setGroupProperties] = useState<Property[]>([]);

  const handleGroupChange = async (value: string) => {
    setFilterSelection(prev => ({ ...prev, group: value }));
    const propertiesData = await getPropertiesByGroup(value);
    setGroupProperties(propertiesData);
    const newProperties: { [propertyHolder: string]: { propertyName: string; selectedValues: string[] } } = {};
    propertiesData.forEach(prop => {
      newProperties[prop.propertyHolder] = {
        propertyName: prop.propertyName,
        selectedValues: [] // start with an empty array.
      };
    });
    setFilterSelection(prev => ({ ...prev, properties: newProperties }));
  };
  const handleCheckboxChange = (propertyHolder: string, value: string, checked: boolean) => {
    setFilterSelection(prev => {
      const current = prev.properties[propertyHolder];
      let newSelectedValues = current.selectedValues;
      if (checked) {
        newSelectedValues = [...current.selectedValues, value];
      } else {
        newSelectedValues = current.selectedValues.filter(val => val !== value);
      }
      return {
        ...prev,
        properties: {
          ...prev.properties,
          [propertyHolder]: {
            ...current,
            selectedValues: newSelectedValues
          }
        }
      };
    });
  };

  // Function to save the selection.
  const saveSelection = () => {
    console.log('Saved Filter Selection:', filterSelection);
    // Convert the properties object into an array if needed.
    const payload = {
      group: filterSelection.group,
      properties: Object.entries(filterSelection.properties).map(([propertyHolder, propData]) => ({
        propertyHolder,
        propertyName: propData.propertyName,
        selectedValues: propData.selectedValues
      }))
    };
    console.log('Payload to Post:', payload);
    // Here you can post the payload to your backend.
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg w-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Filter Assortment</h2>
      
      {/* Group Selection */}
      <div className="flex flex-col gap-2 mb-4">
        <Label className="text-sm">Group</Label>
        <Select onValueChange={handleGroupChange}>
          <SelectTrigger className="border p-2 w-full text-start">
            <SelectValue placeholder="Select a Group" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="cloth">Cloth</SelectItem>
              <SelectItem value="deos">Deos</SelectItem>
              <SelectItem value="group3">Group3</SelectItem>
              <SelectItem value="group4">Group4</SelectItem>
              <SelectItem value="group5">Group5</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Dynamic Filtering Table */}
      {groupProperties.length > 0 && (
        <div className="overflow-x-scroll max-w-[900px] mx-auto w-full border">
          <table className="w-[900px] border-collapse mx-auto">
            <thead>
              <tr>
                {groupProperties.map(prop => (
                  <th key={prop.propertyHolder} className="px-4 py-2 border text-center">
                    {prop.propertyName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(() => {
                // Determine the maximum number of options among all properties.
                const maxRows = Math.max(...groupProperties.map(prop => prop.propertyObj.length));
                const rows = [];
                for (let i = 0; i < maxRows; i++) {
                  rows.push(
                    <tr key={i}>
                      {groupProperties.map(prop => {
                        const option = prop.propertyObj[i];
                        return (
                          <td key={prop.propertyHolder} className="px-4 py-2 border text-center">
                            {option ? (
                              <label className="flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  onChange={(e) =>
                                    handleCheckboxChange(prop.propertyHolder, option.value, e.target.checked)
                                  }
                                />
                                <span>{option.value}</span>
                              </label>
                            ) : null}
                          </td>
                        );
                      })}
                    </tr>
                  );
                }
                return rows;
              })()}
            </tbody>
          </table>
        </div>
      )}

      <div className="flex gap-4 mt-4">
        <Button type="button" onClick={saveSelection} className="bg-green-500 hover:bg-green-600 text-white">
          Save
        </Button>
      </div>
    </div>
  );
}

export default DiscountAssortmentSearchFilters
